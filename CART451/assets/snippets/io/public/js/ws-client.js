window.onload = function () {
  console.log("client js loaded in ws example");
  //use current time as a unique id (ms)
  myID = Date.now();
  console.log(myID);
  document.getElementById("willPut").innerHTML = myID;

  //make an instance ... using the inbuilt WebSocket API (browser side)
  /* Establishing a WebSocket relies on the HTTP Upgrade mechanism , so the request for the protocol upgrade is implicit 
   * when we address the web server as ws://www.example.com or wss://www.example.com.
   *  We are upgrading the HTTP conncection to a web socket connection
   * The WebSocket() constructor doees all the work to create the initial http connection and the handshaking protocol for you
   */

  let ws = new WebSocket("ws://localhost:4200");
  //1: when the connection is open (setup)
  ws.onopen = function () {

    //OPTION 1:: 
    // Web Socket is connected, send data using send()
    //ws.send(`Sending a Message from ${myID}`);
    //OPTION 1A::
    ws.send(JSON.stringify({ eventName: 'default', payload: `Sending a Message from ${myID}` }));

    ws.onmessage = function (event) {
      //let receivedMsg = event.data;
      let jsonParse = JSON.parse(event.data);
      console.log("Message is received..." + jsonParse.payload);
    };

  } //on open
  //when websocket closes
  ws.onclose = function () {

    // websocket is closed.
    console.log("Connection is closed...");
  };





} // onload
