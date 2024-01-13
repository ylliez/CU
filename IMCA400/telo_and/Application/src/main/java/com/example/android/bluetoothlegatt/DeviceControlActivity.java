/*
 * Copyright (C) 2013 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.example.android.bluetoothlegatt;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Intent;
import android.content.ServiceConnection;
import android.graphics.Color;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.util.Log;
import android.view.MotionEvent;
import android.util.DisplayMetrics;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Spinner;

public class DeviceControlActivity extends Activity implements AdapterView.OnItemSelectedListener {
    private final static String TAG = DeviceControlActivity.class.getSimpleName();

    public static final String EXTRAS_DEVICE_NAME = "DEVICE_NAME";
    public static final String EXTRAS_DEVICE_ADDRESS = "DEVICE_ADDRESS";

    private String mDeviceAddress;
    private BluetoothLeService mBluetoothLeService;
    private PaintView paintView;
    private Handler mHandler;
    private Spinner brushType;
    private Spinner brushColor;
    private static final String[] brushTypes = { "NORMAL", "EMBOSS", "BLURRY"};
    private static final String[] brushColors = { "RED", "BLUE", "GREEN", "PURPLE", "GREY", "BLACK"};

    int intensity;
    int repeat;
    boolean isSquare = false;
    boolean isSine = false;
    int mDelay = 500;

    // Code to manage Service lifecycle.
    private final ServiceConnection mServiceConnection = new ServiceConnection() {

        @Override
        public void onServiceConnected(ComponentName componentName, IBinder service) {
            mBluetoothLeService = ((BluetoothLeService.LocalBinder) service).getService();
            if (!mBluetoothLeService.initialize()) {
                Log.e(TAG, "Unable to initialize Bluetooth");
                finish();
            }
            // Automatically connects to the device upon successful start-up initialization.
            mBluetoothLeService.connect(mDeviceAddress);
        }

        @Override public void onServiceDisconnected(ComponentName componentName) { mBluetoothLeService = null; }
    };

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.canvas);
        mHandler = new Handler();

        paintView = findViewById(R.id.paintView);
        DisplayMetrics metrics = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(metrics);
        paintView.init(metrics);

        final Intent intent = getIntent();
        mDeviceAddress = intent.getStringExtra(EXTRAS_DEVICE_ADDRESS);

        brushType = findViewById(R.id.type);
        ArrayAdapter<String> typeAdapter = new ArrayAdapter<>(this,android.R.layout.simple_spinner_dropdown_item, brushTypes);
        typeAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        brushType.setAdapter(typeAdapter);
        brushType.setOnItemSelectedListener(this);

        brushColor = findViewById(R.id.color);
        ArrayAdapter<String> colorAdapter = new ArrayAdapter<>(this,android.R.layout.simple_spinner_dropdown_item, brushColors);
        colorAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        brushColor.setAdapter(colorAdapter);
        brushColor.setOnItemSelectedListener(this);

        Intent gattServiceIntent = new Intent(this, BluetoothLeService.class);
        bindService(gattServiceIntent, mServiceConnection, BIND_AUTO_CREATE);
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mBluetoothLeService != null) {
            final boolean result = mBluetoothLeService.connect(mDeviceAddress);
            Log.d(TAG, "Connect request result=" + result);
        }
    }

    @Override protected void onPause() { super.onPause(); killCalls(); callTelo(0); }

    @Override protected void onDestroy() { super.onDestroy(); killCalls(); callTelo(0);
        unbindService(mServiceConnection); mBluetoothLeService = null; }

    @Override
    public void onItemSelected(AdapterView<?> parent, View v, int position, long id) {
        Spinner spinner = (Spinner) parent;
        if (spinner.getId() == R.id.type) {
            switch (position) {
                case 0: paintView.normal(); isSquare = false; isSine = false; break;
                case 1: paintView.emboss(); isSquare = true; isSine = false; break;
                case 2: paintView.blur(); isSquare = false; isSine = true; break;
            }
        }
        else if (spinner.getId() == R.id.color) {
            switch (position) {
                case 0: paintView.currentColor = Color.RED; break;
                case 1: paintView.currentColor = Color.BLUE; break;
                case 2: paintView.currentColor = Color.GREEN; break;
                case 3: paintView.currentColor = Color.MAGENTA; break;
                case 4: paintView.currentColor = Color.GRAY; break;
                case 5: paintView.currentColor = Color.BLACK; break;
            }
        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> parent) { paintView.normal(); isSquare = false; isSine = false; }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        float x = event.getX();
        float y = event.getY()-60;

        switch(event.getAction()) {
            case MotionEvent.ACTION_DOWN : paintView.touchStart(x, y); break;
            case MotionEvent.ACTION_MOVE : paintView.touchMove(x, y); break;
            case MotionEvent.ACTION_UP : paintView.touchUp(); break;
        }

        if (y > 500) { intensity = Math.max(0,Math.round((1250 - y)/5)); callTelo(intensity); }
        else { intensity = Math.min(255,Math.round((1250 - y)/5)); callTelo(intensity); }

        Log.w(TAG, "y: " + y + " / int: " + intensity);

        mDelay = Math.round(x);
        return true;
    }

    public void callTelo(int value) {
        killCalls();
        repeat = value;
        mBluetoothLeService.writeCustomCharacteristic(repeat);
        if(isSquare) { killTelo(); }
        if(isSine) { sineVal = repeat; sineTelo(); }
    }

    public void killTelo() { mHandler.postDelayed(r1,mDelay); }

    Runnable r1 = new Runnable() {
        @Override
        public void run() {
            mBluetoothLeService.writeCustomCharacteristic(0);
            resusTelo();
        }
    };

    public void resusTelo () { mHandler.postDelayed(r2,mDelay); }

    Runnable r2 = new Runnable() {
        @Override
        public void run() {
            mBluetoothLeService.writeCustomCharacteristic(repeat);
            killTelo();
        }
    };

    int sineVal;
    boolean sineDir = false;

    public void sineTelo () {
        if (sineVal<=20) { sineDir = true; }
        if (sineVal>=repeat) { sineDir = false; }
        if (sineDir) { sineVal++; }
        else if (!sineDir) { sineVal--; }
        mHandler.postDelayed(r3,mDelay/100);
    }

    Runnable r3 = new Runnable() {
        @Override
        public void run() {
//            Log.w(TAG, "r3: " + sineVal);
            mBluetoothLeService.writeCustomCharacteristic(sineVal);
            sineTelo2();
        }
    };

    public void sineTelo2 () {
        if (sineVal<=0) { sineDir = true; }
        if (sineVal>=repeat) { sineDir = false; }
        if (sineDir) { sineVal++; }
        else if (!sineDir) { sineVal--; }
        mHandler.postDelayed(r4,mDelay/100); }

    Runnable r4 = new Runnable() {
        @Override
        public void run() {
//            Log.w(TAG, "r4: " + sineVal);
            mBluetoothLeService.writeCustomCharacteristic(sineVal);
            sineTelo();
        }
    };

    public void killCalls() {
        mHandler.removeCallbacks(r1);
        mHandler.removeCallbacks(r2);
        mHandler.removeCallbacks(r3);
        mHandler.removeCallbacks(r4);
    }

    public void onClickClear(View view) {
        paintView.clear();
        killCalls();
        mBluetoothLeService.writeCustomCharacteristic(0);
        mHandler.postDelayed(new Runnable() {
            @Override
            public void run() { mBluetoothLeService.writeCustomCharacteristic(0); } }, 300);
    }
}