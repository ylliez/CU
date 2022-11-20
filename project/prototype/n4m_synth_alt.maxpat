{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 3,
			"revision" : 1,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 34.0, 79.0, 1372.0, 787.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-98",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Stereo.maxpat",
					"numinlets" : 2,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 2061.402027487754822, 1510.938082814216614, 148.0, 116.0 ],
					"varname" : "bp.Stereo[3]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-99",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Oscillator.maxpat",
					"numinlets" : 6,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 2061.402027487754822, 1096.278293967247009, 314.0, 116.0 ],
					"varname" : "bp.Oscillator[3]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-100",
					"maxclass" : "number~",
					"mode" : 2,
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "float" ],
					"patching_rect" : [ 2383.902027487754822, 1190.278293967247009, 56.0, 22.0 ],
					"sig" : 0.0
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-101",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.ASR.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 2372.902027487754822, 1226.278293967247009, 142.0, 116.0 ],
					"varname" : "bp.ASR[3]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-102",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.VCA.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 2061.402027487754822, 1373.278293967247009, 113.0, 116.0 ],
					"varname" : "bp.VCA[3]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-103",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.LPF.maxpat",
					"numinlets" : 5,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 2061.402027487754822, 1231.278293967247009, 304.0, 116.0 ],
					"varname" : "bp.LPF[3]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-104",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Sequencer.maxpat",
					"numinlets" : 2,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 2061.402027487754822, 773.154638886451721, 726.0, 232.0 ],
					"varname" : "bp.Sequencer[1]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-97",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Quantizer.maxpat",
					"numinlets" : 1,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 1056.247444629669189, 1004.79378867149353, 217.0, 116.0 ],
					"varname" : "bp.Quantizer[1]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-91",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Stereo.maxpat",
					"numinlets" : 2,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 1324.288666725158691, 1510.938082814216614, 148.0, 116.0 ],
					"varname" : "bp.Stereo[1]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-92",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Oscillator.maxpat",
					"numinlets" : 6,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 1324.288666725158691, 1096.278293967247009, 314.0, 116.0 ],
					"varname" : "bp.Oscillator[1]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-93",
					"maxclass" : "number~",
					"mode" : 2,
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "float" ],
					"patching_rect" : [ 1646.788666725158691, 1190.278293967247009, 56.0, 22.0 ],
					"sig" : 0.0
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-94",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.ASR.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 1635.788666725158691, 1226.278293967247009, 142.0, 116.0 ],
					"varname" : "bp.ASR[2]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-95",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.VCA.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 1324.288666725158691, 1373.278293967247009, 113.0, 116.0 ],
					"varname" : "bp.VCA[2]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-96",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.LPF.maxpat",
					"numinlets" : 5,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 1324.288666725158691, 1231.278293967247009, 304.0, 116.0 ],
					"varname" : "bp.LPF[2]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-90",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Sequencer.maxpat",
					"numinlets" : 2,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 1324.288666725158691, 773.154638886451721, 726.0, 232.0 ],
					"varname" : "bp.Sequencer",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-89",
					"linecount" : 6,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1287.010311126708984, 573.845366716384888, 404.0, 87.0 ],
					"text" : "drone synth: https://www.youtube.com/watch?v=BOh7ysTFkiI\ngranular drone: https://www.youtube.com/watch?v=nW_j4uqZnII\n\nALSO, use data? https://github.com/Cycling74/n4m-examples/blob/master/dog-ceo/dogceo.js"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-87",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Audio Mixer.maxpat",
					"numinlets" : 4,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 925.0, 595.0, 201.0, 116.0 ],
					"varname" : "bp.Audio Mixer",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-86",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Quantizer.maxpat",
					"numinlets" : 1,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 1062.433011293411255, 1115.103060841560364, 217.0, 116.0 ],
					"varname" : "bp.Quantizer",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-85",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 102.0, 490.0, 50.0, 22.0 ],
					"text" : "-0.21"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-81",
					"maxclass" : "number~",
					"mode" : 2,
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "float" ],
					"patching_rect" : [ 2281.0, 479.0, 56.0, 22.0 ],
					"sig" : 0.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-80",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 2222.0, 293.0, 31.0, 22.0 ],
					"text" : "sig~"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-79",
					"maxclass" : "number~",
					"mode" : 2,
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "float" ],
					"patching_rect" : [ 2327.0, 257.0, 56.0, 22.0 ],
					"sig" : 0.0
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-76",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.LFO.maxpat",
					"numinlets" : 0,
					"numoutlets" : 5,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal", "signal", "signal", "signal" ],
					"patching_rect" : [ 2264.0, 113.0, 137.0, 116.0 ],
					"varname" : "bp.LFO",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-75",
					"maxclass" : "newobj",
					"numinlets" : 6,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 2222.0, 264.0, 101.0, 22.0 ],
					"text" : "scale 0 127 -5. 5."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-74",
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 2228.0, 40.0, 20.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-72",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.LFO3.maxpat",
					"numinlets" : 1,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 2111.0, 334.0, 160.0, 116.0 ],
					"varname" : "bp.LFO3",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-70",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Stereo.maxpat",
					"numinlets" : 2,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 815.0, 413.0, 148.0, 116.0 ],
					"varname" : "bp.Stereo[2]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-69",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.MMF.maxpat",
					"numinlets" : 5,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 1662.0, 334.0, 427.0, 116.0 ],
					"varname" : "bp.MMF",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-68",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Granular.maxpat",
					"numinlets" : 4,
					"numoutlets" : 3,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal", "" ],
					"patching_rect" : [ 1662.0, 82.0, 541.0, 214.0 ],
					"varname" : "bp.Granular",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-60",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.ASR.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 1415.0, 220.0, 142.0, 116.0 ],
					"varname" : "bp.ASR[1]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-61",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.VCA.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 1102.5, 362.0, 113.0, 116.0 ],
					"varname" : "bp.VCA[1]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-62",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.LPF.maxpat",
					"numinlets" : 5,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 1102.5, 220.0, 304.0, 116.0 ],
					"varname" : "bp.LPF[1]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-58",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Oscillator.maxpat",
					"numinlets" : 6,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 607.5, 87.0, 314.0, 116.0 ],
					"varname" : "bp.Oscillator[2]",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-56",
					"maxclass" : "number~",
					"mode" : 2,
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "float" ],
					"patching_rect" : [ 930.0, 181.0, 56.0, 22.0 ],
					"sig" : 0.0
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-48",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.ASR.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 919.0, 217.0, 142.0, 116.0 ],
					"varname" : "bp.ASR",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-47",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.VCA.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 607.5, 364.0, 113.0, 116.0 ],
					"varname" : "bp.VCA",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-46",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.LPF.maxpat",
					"numinlets" : 5,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 607.5, 222.0, 304.0, 116.0 ],
					"varname" : "bp.LPF",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-43",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.FM.maxpat",
					"numinlets" : 2,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 1102.5, 87.0, 211.0, 116.0 ],
					"varname" : "bp.FM",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-42",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 330.0, 607.0, 50.0, 22.0 ],
					"text" : "0."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-40",
					"maxclass" : "newobj",
					"numinlets" : 6,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 258.5, 554.0, 97.0, 22.0 ],
					"text" : "scale 0 100 0. 5."
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"extract" : 1,
					"id" : "obj-36",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "bp.Reverb 1.maxpat",
					"numinlets" : 4,
					"numoutlets" : 2,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "signal", "signal" ],
					"patching_rect" : [ 600.0, 627.0, 190.0, 116.0 ],
					"varname" : "bp.Reverb 1",
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"linecount" : 2,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 258.5, 53.0, 255.0, 35.0 ],
					"text" : ";\rmax launchbrowser http://localhost:4200/client"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.301961, 0.301961, 0.301961, 1.0 ],
					"bgcolor2" : [ 0.301961, 0.301961, 0.301961, 1.0 ],
					"bgfillcolor_angle" : 270.0,
					"bgfillcolor_autogradient" : 0.0,
					"bgfillcolor_color" : [ 0.105882352941176, 0.427450980392157, 0.976470588235294, 1.0 ],
					"bgfillcolor_color1" : [ 0.301961, 0.301961, 0.301961, 1.0 ],
					"bgfillcolor_color2" : [ 0.2, 0.2, 0.2, 1.0 ],
					"bgfillcolor_proportion" : 0.5,
					"bgfillcolor_type" : "color",
					"fontsize" : 19.766075047976013,
					"gradient" : 1,
					"id" : "obj-35",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 258.5, 13.083333333333336, 192.0, 31.0 ],
					"text" : "Launch the webpage"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-30",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1774.0, 25.0, 66.0, 22.0 ],
					"text" : "r osc1Freq"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-29",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 92.0, 397.0, 68.0, 22.0 ],
					"text" : "s osc1Freq"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-20",
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 461.0, 397.0, 20.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-21",
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 403.0, 397.0, 20.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 345.0, 397.0, 20.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 287.0, 397.0, 20.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 229.0, 397.0, 20.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "slider",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 171.0, 397.0, 20.0, 140.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "newobj",
					"numinlets" : 7,
					"numoutlets" : 7,
					"outlettype" : [ "", "", "", "", "", "", "" ],
					"patching_rect" : [ 171.0, 360.0, 367.0, 22.0 ],
					"text" : "route osc1Freq osc1Amp osc1Wave osc2Freq osc2Amp osc2Wave"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"linecount" : 3,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 35.0, 360.0, 50.0, 49.0 ],
					"text" : "osc1Freq -0.21"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 113.0, 36.0, 63.0, 22.0 ],
					"text" : "script stop"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 194.0, 36.0, 41.0, 22.0 ],
					"text" : "reveal"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-6",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "n4m.monitor.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 35.0, 121.0, 400.0, 220.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 35.0, 36.0, 64.0, 22.0 ],
					"text" : "script start"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 35.0, 66.0, 141.0, 22.0 ],
					"saved_object_attributes" : 					{
						"autostart" : 0,
						"defer" : 0,
						"watch" : 0
					}
,
					"text" : "node.script n4m_synth.js"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 1 ],
					"order" : 1,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 0,
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-1", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-40", 0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-102", 1 ],
					"source" : [ "obj-101", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-98", 1 ],
					"order" : 0,
					"source" : [ "obj-102", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-98", 0 ],
					"order" : 1,
					"source" : [ "obj-102", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-102", 0 ],
					"source" : [ "obj-103", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-99", 0 ],
					"source" : [ "obj-104", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"order" : 0,
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"source" : [ "obj-2", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-16", 0 ],
					"source" : [ "obj-2", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"source" : [ "obj-2", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"source" : [ "obj-2", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-2", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-29", 0 ],
					"order" : 2,
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-85", 1 ],
					"order" : 1,
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"source" : [ "obj-30", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"source" : [ "obj-35", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-42", 1 ],
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-62", 0 ],
					"source" : [ "obj-43", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 0 ],
					"source" : [ "obj-46", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-70", 1 ],
					"order" : 0,
					"source" : [ "obj-47", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-70", 0 ],
					"order" : 1,
					"source" : [ "obj-47", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 1 ],
					"source" : [ "obj-48", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-46", 0 ],
					"order" : 1,
					"source" : [ "obj-58", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-48", 0 ],
					"source" : [ "obj-58", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-56", 0 ],
					"order" : 0,
					"source" : [ "obj-58", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-61", 1 ],
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-61", 0 ],
					"source" : [ "obj-62", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-69", 0 ],
					"source" : [ "obj-68", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-68", 2 ],
					"source" : [ "obj-72", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 0 ],
					"source" : [ "obj-74", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"source" : [ "obj-75", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-79", 0 ],
					"source" : [ "obj-76", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-72", 0 ],
					"order" : 1,
					"source" : [ "obj-80", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-81", 0 ],
					"order" : 0,
					"source" : [ "obj-80", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-92", 0 ],
					"source" : [ "obj-90", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-93", 0 ],
					"order" : 0,
					"source" : [ "obj-92", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-94", 0 ],
					"source" : [ "obj-92", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-96", 0 ],
					"order" : 1,
					"source" : [ "obj-92", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-95", 1 ],
					"source" : [ "obj-94", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-91", 1 ],
					"order" : 0,
					"source" : [ "obj-95", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-91", 0 ],
					"order" : 1,
					"source" : [ "obj-95", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-95", 0 ],
					"source" : [ "obj-96", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-100", 0 ],
					"order" : 0,
					"source" : [ "obj-99", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-101", 0 ],
					"source" : [ "obj-99", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-103", 0 ],
					"order" : 1,
					"source" : [ "obj-99", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-101::obj-20" : [ "mute[6]", "mute", 0 ],
			"obj-101::obj-32" : [ "Release[3]", "Release", 0 ],
			"obj-101::obj-45" : [ "Attack[3]", "Attack", 0 ],
			"obj-101::obj-6" : [ "Sustain[3]", "Sustain", 0 ],
			"obj-102::obj-33" : [ "Quadrants[3]", "Quadrants", 0 ],
			"obj-102::obj-55" : [ "Bypass[3]", "Bypass", 0 ],
			"obj-102::obj-80" : [ "Response[3]", "Response", 0 ],
			"obj-103::obj-20" : [ "Freq[6]", "Freq", 0 ],
			"obj-103::obj-22" : [ "TimeMode[4]", "TimeMode", 1 ],
			"obj-103::obj-23" : [ "Offset[8]", "Offset", 0 ],
			"obj-103::obj-51" : [ "CV2[7]", "CV2", 0 ],
			"obj-103::obj-54" : [ "CV1[4]", "CV1", 0 ],
			"obj-103::obj-55" : [ "power[5]", "power", 0 ],
			"obj-103::obj-63" : [ "CV3[6]", "CV3", 0 ],
			"obj-103::obj-68" : [ "Res[4]", "Res", 0 ],
			"obj-103::obj-95" : [ "ResCV[4]", "CV", 0 ],
			"obj-104::obj-120" : [ "Max pulse[2]", "Max pulse", 0 ],
			"obj-104::obj-125" : [ "NoteGrid[1]", "NoteGrid", 0 ],
			"obj-104::obj-130" : [ "mute[5]", "mute", 0 ],
			"obj-104::obj-155" : [ "Swing amount[1]", "Swing amount", 0 ],
			"obj-104::obj-157" : [ "Swing enable[1]", "Swing enable", 0 ],
			"obj-104::obj-185" : [ "Sequence[1]", "Sequence", 0 ],
			"obj-104::obj-2" : [ "trans_trig[1]", "trans_trig", 0 ],
			"obj-104::obj-22" : [ "Pattern[1]", "Pattern", 0 ],
			"obj-104::obj-25" : [ "GateTime[1]", "GateTime", 0 ],
			"obj-104::obj-28" : [ "Sync[1]", "Sync", 0 ],
			"obj-104::obj-4" : [ "live.text[1]", "live.text", 0 ],
			"obj-104::obj-89" : [ "Reset[1]", "Reset", 0 ],
			"obj-104::obj-95" : [ "Steps[1]", "Steps", 0 ],
			"obj-104::obj-96" : [ "Pulse[1]", "Pulse", 0 ],
			"obj-36::obj-1" : [ "Time", "Time", 0 ],
			"obj-36::obj-25" : [ "Cutoff", "Cutoff", 0 ],
			"obj-36::obj-26" : [ "Reflections", "Reflections", 0 ],
			"obj-36::obj-28" : [ "Mix", "Mix", 0 ],
			"obj-36::obj-47" : [ "bypass", "bypass", 0 ],
			"obj-43::obj-20" : [ "mute", "mute", 0 ],
			"obj-43::obj-56" : [ "Depth", "Depth", 0 ],
			"obj-43::obj-80" : [ "Ratio", "Ratio", 0 ],
			"obj-43::obj-86" : [ "Amt", "Amt", 0 ],
			"obj-43::obj-91" : [ "Offset[1]", "Offset", 0 ],
			"obj-46::obj-20" : [ "Freq[1]", "Freq", 0 ],
			"obj-46::obj-22" : [ "TimeMode", "TimeMode", 1 ],
			"obj-46::obj-23" : [ "Offset[2]", "Offset", 0 ],
			"obj-46::obj-51" : [ "CV2[1]", "CV2", 0 ],
			"obj-46::obj-54" : [ "CV1", "CV1", 0 ],
			"obj-46::obj-55" : [ "power", "power", 0 ],
			"obj-46::obj-63" : [ "CV3[1]", "CV3", 0 ],
			"obj-46::obj-68" : [ "Res", "Res", 0 ],
			"obj-46::obj-95" : [ "ResCV", "CV", 0 ],
			"obj-47::obj-33" : [ "Quadrants", "Quadrants", 0 ],
			"obj-47::obj-55" : [ "Bypass", "Bypass", 0 ],
			"obj-47::obj-80" : [ "Response", "Response", 0 ],
			"obj-48::obj-20" : [ "mute[1]", "mute", 0 ],
			"obj-48::obj-32" : [ "Release", "Release", 0 ],
			"obj-48::obj-45" : [ "Attack", "Attack", 0 ],
			"obj-48::obj-6" : [ "Sustain", "Sustain", 0 ],
			"obj-58::obj-106" : [ "CV3", "CV3", 0 ],
			"obj-58::obj-107" : [ "Linear", "Linear", 0 ],
			"obj-58::obj-11" : [ "PWM", "PWM", 0 ],
			"obj-58::obj-129" : [ "CV2", "CV2", 0 ],
			"obj-58::obj-36" : [ "PW", "PW", 0 ],
			"obj-58::obj-4" : [ "Waveform", "Waveform", 0 ],
			"obj-58::obj-45" : [ "FreqMode", "FreqMode", 0 ],
			"obj-58::obj-46" : [ "Offset", "Offset", 0 ],
			"obj-58::obj-51" : [ "Freq", "Freq", 0 ],
			"obj-58::obj-53" : [ "Mute", "Mute", 0 ],
			"obj-60::obj-20" : [ "mute[2]", "mute", 0 ],
			"obj-60::obj-32" : [ "Release[1]", "Release", 0 ],
			"obj-60::obj-45" : [ "Attack[1]", "Attack", 0 ],
			"obj-60::obj-6" : [ "Sustain[1]", "Sustain", 0 ],
			"obj-61::obj-33" : [ "Quadrants[1]", "Quadrants", 0 ],
			"obj-61::obj-55" : [ "Bypass[1]", "Bypass", 0 ],
			"obj-61::obj-80" : [ "Response[1]", "Response", 0 ],
			"obj-62::obj-20" : [ "Freq[2]", "Freq", 0 ],
			"obj-62::obj-22" : [ "TimeMode[1]", "TimeMode", 1 ],
			"obj-62::obj-23" : [ "Offset[3]", "Offset", 0 ],
			"obj-62::obj-51" : [ "CV2[2]", "CV2", 0 ],
			"obj-62::obj-54" : [ "CV1[1]", "CV1", 0 ],
			"obj-62::obj-55" : [ "power[1]", "power", 0 ],
			"obj-62::obj-63" : [ "CV3[2]", "CV3", 0 ],
			"obj-62::obj-68" : [ "Res[1]", "Res", 0 ],
			"obj-62::obj-95" : [ "ResCV[1]", "CV", 0 ],
			"obj-68::obj-101" : [ "Width", "Width", 0 ],
			"obj-68::obj-114" : [ "MaxGrains", "MaxGrains", 0 ],
			"obj-68::obj-115" : [ "NewGrainEvery", "NewGrainEvery", 0 ],
			"obj-68::obj-12" : [ "Mute[3]", "Mute", 0 ],
			"obj-68::obj-141" : [ "live.button", "live.button", 0 ],
			"obj-68::obj-19" : [ "CV2[3]", "CV2", 0 ],
			"obj-68::obj-25" : [ "CV", "CV", 0 ],
			"obj-68::obj-28" : [ "Offset[4]", "Offset", 0 ],
			"obj-68::obj-3" : [ "Position", "Position", 0 ],
			"obj-68::obj-45" : [ "DurationRandomAmt", "Random", 0 ],
			"obj-68::obj-47" : [ "Duration", "Duration", 0 ],
			"obj-68::obj-58" : [ "PanRandomAmt", "Random", 0 ],
			"obj-68::obj-71" : [ "Pan", "Pan", 0 ],
			"obj-68::obj-94" : [ "PitchRandomAmt", "Random", 0 ],
			"obj-68::obj-98::obj-2" : [ "pastebang[2]", "pastebang", 0 ],
			"obj-69::obj-11" : [ "Res[2]", "Res", 0 ],
			"obj-69::obj-20" : [ "Freq[3]", "Freq", 0 ],
			"obj-69::obj-22" : [ "TimeMode[2]", "TimeMode", 1 ],
			"obj-69::obj-23" : [ "Offset[5]", "Offset", 0 ],
			"obj-69::obj-38" : [ "FilterType", "FilterType", 0 ],
			"obj-69::obj-51" : [ "CV2[4]", "CV2", 0 ],
			"obj-69::obj-54" : [ "CV1[2]", "CV1", 0 ],
			"obj-69::obj-55" : [ "power[3]", "power", 0 ],
			"obj-69::obj-63" : [ "CV3[3]", "CV3", 0 ],
			"obj-69::obj-95" : [ "ResCV[2]", "CV", 0 ],
			"obj-70::obj-22" : [ "Mute[4]", "Mute", 0 ],
			"obj-70::obj-52" : [ "Level[2]", "Level", 0 ],
			"obj-70::obj-55" : [ "DSP[2]", "DSP", 0 ],
			"obj-70::obj-56" : [ "OutputChannel[2]", "OutputChannel", 0 ],
			"obj-72::obj-12" : [ "Mute[10]", "Mute", 0 ],
			"obj-72::obj-20" : [ "Frequency[3]", "Freq", 0 ],
			"obj-72::obj-7" : [ "CV[1]", "CV", 0 ],
			"obj-72::obj-75" : [ "SpectraLFOShape[2]", "Shape", 0 ],
			"obj-76::obj-12" : [ "Mute[5]", "Mute", 0 ],
			"obj-76::obj-20" : [ "Frequency", "Freq", 0 ],
			"obj-86::obj-100" : [ "score", "score", 0 ],
			"obj-86::obj-105" : [ "rounding", "rounding", 0 ],
			"obj-86::obj-12" : [ "bypass[1]", "bypass", 0 ],
			"obj-86::obj-14::obj-2" : [ "pastebang[3]", "pastebang", 0 ],
			"obj-86::obj-71" : [ "notes", "notes", 1 ],
			"obj-86::obj-77::obj-2" : [ "pastebang[4]", "pastebang", 0 ],
			"obj-87::obj-29" : [ "3", "3", 0 ],
			"obj-87::obj-32" : [ "2", "2", 0 ],
			"obj-87::obj-33" : [ "4", "4", 0 ],
			"obj-87::obj-37" : [ "Mute[11]", "Mute", 0 ],
			"obj-87::obj-39" : [ "1", "1", 0 ],
			"obj-87::obj-49" : [ "MuteCh1", "MuteCh1", 0 ],
			"obj-87::obj-58" : [ "MuteCh2", "MuteCh2", 0 ],
			"obj-87::obj-64" : [ "MuteCh3", "MuteCh3", 0 ],
			"obj-87::obj-70" : [ "MuteCh4", "MuteCh4", 0 ],
			"obj-90::obj-120" : [ "Max pulse[1]", "Max pulse", 0 ],
			"obj-90::obj-125" : [ "NoteGrid", "NoteGrid", 0 ],
			"obj-90::obj-130" : [ "mute[3]", "mute", 0 ],
			"obj-90::obj-155" : [ "Swing amount", "Swing amount", 0 ],
			"obj-90::obj-157" : [ "Swing enable", "Swing enable", 0 ],
			"obj-90::obj-185" : [ "Sequence", "Sequence", 0 ],
			"obj-90::obj-2" : [ "trans_trig", "trans_trig", 0 ],
			"obj-90::obj-22" : [ "Pattern", "Pattern", 0 ],
			"obj-90::obj-25" : [ "GateTime", "GateTime", 0 ],
			"obj-90::obj-28" : [ "Sync", "Sync", 0 ],
			"obj-90::obj-4" : [ "live.text", "live.text", 0 ],
			"obj-90::obj-89" : [ "Reset", "Reset", 0 ],
			"obj-90::obj-95" : [ "Steps", "Steps", 0 ],
			"obj-90::obj-96" : [ "Pulse", "Pulse", 0 ],
			"obj-91::obj-22" : [ "Mute[7]", "Mute", 0 ],
			"obj-91::obj-52" : [ "Level", "Level", 0 ],
			"obj-91::obj-55" : [ "DSP", "DSP", 0 ],
			"obj-91::obj-56" : [ "OutputChannel", "OutputChannel", 0 ],
			"obj-92::obj-106" : [ "CV3[5]", "CV3", 0 ],
			"obj-92::obj-107" : [ "Linear[1]", "Linear", 0 ],
			"obj-92::obj-11" : [ "PWM[1]", "PWM", 0 ],
			"obj-92::obj-129" : [ "CV2[6]", "CV2", 0 ],
			"obj-92::obj-36" : [ "PW[1]", "PW", 0 ],
			"obj-92::obj-4" : [ "Waveform[1]", "Waveform", 0 ],
			"obj-92::obj-45" : [ "FreqMode[1]", "FreqMode", 0 ],
			"obj-92::obj-46" : [ "Offset[7]", "Offset", 0 ],
			"obj-92::obj-51" : [ "Freq[5]", "Freq", 0 ],
			"obj-92::obj-53" : [ "Mute[6]", "Mute", 0 ],
			"obj-94::obj-20" : [ "mute[4]", "mute", 0 ],
			"obj-94::obj-32" : [ "Release[2]", "Release", 0 ],
			"obj-94::obj-45" : [ "Attack[2]", "Attack", 0 ],
			"obj-94::obj-6" : [ "Sustain[2]", "Sustain", 0 ],
			"obj-95::obj-33" : [ "Quadrants[2]", "Quadrants", 0 ],
			"obj-95::obj-55" : [ "Bypass[2]", "Bypass", 0 ],
			"obj-95::obj-80" : [ "Response[2]", "Response", 0 ],
			"obj-96::obj-20" : [ "Freq[4]", "Freq", 0 ],
			"obj-96::obj-22" : [ "TimeMode[3]", "TimeMode", 1 ],
			"obj-96::obj-23" : [ "Offset[6]", "Offset", 0 ],
			"obj-96::obj-51" : [ "CV2[5]", "CV2", 0 ],
			"obj-96::obj-54" : [ "CV1[3]", "CV1", 0 ],
			"obj-96::obj-55" : [ "power[4]", "power", 0 ],
			"obj-96::obj-63" : [ "CV3[4]", "CV3", 0 ],
			"obj-96::obj-68" : [ "Res[3]", "Res", 0 ],
			"obj-96::obj-95" : [ "ResCV[3]", "CV", 0 ],
			"obj-97::obj-100" : [ "score[1]", "score", 0 ],
			"obj-97::obj-105" : [ "rounding[1]", "rounding", 0 ],
			"obj-97::obj-12" : [ "bypass[2]", "bypass", 0 ],
			"obj-97::obj-14::obj-2" : [ "pastebang", "pastebang", 0 ],
			"obj-97::obj-71" : [ "notes[1]", "notes", 1 ],
			"obj-97::obj-77::obj-2" : [ "pastebang[5]", "pastebang", 0 ],
			"obj-98::obj-22" : [ "Mute[12]", "Mute", 0 ],
			"obj-98::obj-52" : [ "Level[3]", "Level", 0 ],
			"obj-98::obj-55" : [ "DSP[3]", "DSP", 0 ],
			"obj-98::obj-56" : [ "OutputChannel[3]", "OutputChannel", 0 ],
			"obj-99::obj-106" : [ "CV3[7]", "CV3", 0 ],
			"obj-99::obj-107" : [ "Linear[2]", "Linear", 0 ],
			"obj-99::obj-11" : [ "PWM[2]", "PWM", 0 ],
			"obj-99::obj-129" : [ "CV2[8]", "CV2", 0 ],
			"obj-99::obj-36" : [ "PW[2]", "PW", 0 ],
			"obj-99::obj-4" : [ "Waveform[2]", "Waveform", 0 ],
			"obj-99::obj-45" : [ "FreqMode[2]", "FreqMode", 0 ],
			"obj-99::obj-46" : [ "Offset[9]", "Offset", 0 ],
			"obj-99::obj-51" : [ "Freq[7]", "Freq", 0 ],
			"obj-99::obj-53" : [ "Mute[8]", "Mute", 0 ],
			"parameterbanks" : 			{
				"0" : 				{
					"index" : 0,
					"name" : "",
					"parameters" : [ "-", "-", "-", "-", "-", "-", "-", "-" ]
				}

			}
,
			"parameter_overrides" : 			{
				"obj-101::obj-20" : 				{
					"parameter_longname" : "mute[6]"
				}
,
				"obj-101::obj-32" : 				{
					"parameter_longname" : "Release[3]"
				}
,
				"obj-101::obj-45" : 				{
					"parameter_longname" : "Attack[3]"
				}
,
				"obj-101::obj-6" : 				{
					"parameter_longname" : "Sustain[3]"
				}
,
				"obj-102::obj-33" : 				{
					"parameter_longname" : "Quadrants[3]"
				}
,
				"obj-102::obj-55" : 				{
					"parameter_longname" : "Bypass[3]"
				}
,
				"obj-102::obj-80" : 				{
					"parameter_longname" : "Response[3]"
				}
,
				"obj-103::obj-20" : 				{
					"parameter_longname" : "Freq[6]"
				}
,
				"obj-103::obj-22" : 				{
					"parameter_longname" : "TimeMode[4]"
				}
,
				"obj-103::obj-23" : 				{
					"parameter_longname" : "Offset[8]"
				}
,
				"obj-103::obj-51" : 				{
					"parameter_longname" : "CV2[7]"
				}
,
				"obj-103::obj-54" : 				{
					"parameter_longname" : "CV1[4]"
				}
,
				"obj-103::obj-55" : 				{
					"parameter_longname" : "power[5]"
				}
,
				"obj-103::obj-63" : 				{
					"parameter_longname" : "CV3[6]"
				}
,
				"obj-103::obj-68" : 				{
					"parameter_longname" : "Res[4]"
				}
,
				"obj-103::obj-95" : 				{
					"parameter_longname" : "ResCV[4]"
				}
,
				"obj-104::obj-120" : 				{
					"parameter_longname" : "Max pulse[2]"
				}
,
				"obj-104::obj-130" : 				{
					"parameter_longname" : "mute[5]"
				}
,
				"obj-104::obj-155" : 				{
					"parameter_longname" : "Swing amount[1]"
				}
,
				"obj-104::obj-157" : 				{
					"parameter_longname" : "Swing enable[1]"
				}
,
				"obj-104::obj-2" : 				{
					"parameter_longname" : "trans_trig[1]"
				}
,
				"obj-104::obj-22" : 				{
					"parameter_longname" : "Pattern[1]"
				}
,
				"obj-104::obj-25" : 				{
					"parameter_longname" : "GateTime[1]"
				}
,
				"obj-104::obj-28" : 				{
					"parameter_longname" : "Sync[1]"
				}
,
				"obj-104::obj-4" : 				{
					"parameter_longname" : "live.text[1]"
				}
,
				"obj-104::obj-89" : 				{
					"parameter_longname" : "Reset[1]"
				}
,
				"obj-104::obj-95" : 				{
					"parameter_longname" : "Steps[1]"
				}
,
				"obj-104::obj-96" : 				{
					"parameter_longname" : "Pulse[1]"
				}
,
				"obj-43::obj-91" : 				{
					"parameter_longname" : "Offset[1]"
				}
,
				"obj-46::obj-20" : 				{
					"parameter_longname" : "Freq[1]"
				}
,
				"obj-46::obj-23" : 				{
					"parameter_longname" : "Offset[2]"
				}
,
				"obj-46::obj-51" : 				{
					"parameter_longname" : "CV2[1]"
				}
,
				"obj-46::obj-63" : 				{
					"parameter_longname" : "CV3[1]"
				}
,
				"obj-48::obj-20" : 				{
					"parameter_longname" : "mute[1]"
				}
,
				"obj-60::obj-20" : 				{
					"parameter_longname" : "mute[2]"
				}
,
				"obj-60::obj-32" : 				{
					"parameter_longname" : "Release[1]"
				}
,
				"obj-60::obj-45" : 				{
					"parameter_longname" : "Attack[1]"
				}
,
				"obj-60::obj-6" : 				{
					"parameter_longname" : "Sustain[1]"
				}
,
				"obj-61::obj-33" : 				{
					"parameter_longname" : "Quadrants[1]"
				}
,
				"obj-61::obj-55" : 				{
					"parameter_longname" : "Bypass[1]"
				}
,
				"obj-61::obj-80" : 				{
					"parameter_longname" : "Response[1]"
				}
,
				"obj-62::obj-20" : 				{
					"parameter_longname" : "Freq[2]"
				}
,
				"obj-62::obj-22" : 				{
					"parameter_longname" : "TimeMode[1]"
				}
,
				"obj-62::obj-23" : 				{
					"parameter_longname" : "Offset[3]"
				}
,
				"obj-62::obj-51" : 				{
					"parameter_longname" : "CV2[2]"
				}
,
				"obj-62::obj-54" : 				{
					"parameter_longname" : "CV1[1]"
				}
,
				"obj-62::obj-55" : 				{
					"parameter_longname" : "power[1]"
				}
,
				"obj-62::obj-63" : 				{
					"parameter_longname" : "CV3[2]"
				}
,
				"obj-62::obj-68" : 				{
					"parameter_longname" : "Res[1]"
				}
,
				"obj-62::obj-95" : 				{
					"parameter_longname" : "ResCV[1]"
				}
,
				"obj-68::obj-12" : 				{
					"parameter_longname" : "Mute[3]"
				}
,
				"obj-68::obj-19" : 				{
					"parameter_longname" : "CV2[3]"
				}
,
				"obj-68::obj-28" : 				{
					"parameter_longname" : "Offset[4]"
				}
,
				"obj-68::obj-98::obj-2" : 				{
					"parameter_longname" : "pastebang[2]"
				}
,
				"obj-69::obj-11" : 				{
					"parameter_longname" : "Res[2]"
				}
,
				"obj-69::obj-20" : 				{
					"parameter_longname" : "Freq[3]"
				}
,
				"obj-69::obj-22" : 				{
					"parameter_longname" : "TimeMode[2]"
				}
,
				"obj-69::obj-23" : 				{
					"parameter_longname" : "Offset[5]"
				}
,
				"obj-69::obj-51" : 				{
					"parameter_longname" : "CV2[4]"
				}
,
				"obj-69::obj-54" : 				{
					"parameter_longname" : "CV1[2]"
				}
,
				"obj-69::obj-55" : 				{
					"parameter_longname" : "power[3]"
				}
,
				"obj-69::obj-63" : 				{
					"parameter_longname" : "CV3[3]"
				}
,
				"obj-69::obj-95" : 				{
					"parameter_longname" : "ResCV[2]"
				}
,
				"obj-70::obj-22" : 				{
					"parameter_longname" : "Mute[4]"
				}
,
				"obj-70::obj-52" : 				{
					"parameter_longname" : "Level[2]"
				}
,
				"obj-70::obj-55" : 				{
					"parameter_longname" : "DSP[2]"
				}
,
				"obj-70::obj-56" : 				{
					"parameter_longname" : "OutputChannel[2]"
				}
,
				"obj-72::obj-7" : 				{
					"parameter_longname" : "CV[1]"
				}
,
				"obj-76::obj-12" : 				{
					"parameter_longname" : "Mute[5]"
				}
,
				"obj-86::obj-12" : 				{
					"parameter_longname" : "bypass[1]"
				}
,
				"obj-86::obj-14::obj-2" : 				{
					"parameter_longname" : "pastebang[3]"
				}
,
				"obj-86::obj-77::obj-2" : 				{
					"parameter_longname" : "pastebang[4]"
				}
,
				"obj-87::obj-37" : 				{
					"parameter_longname" : "Mute[11]"
				}
,
				"obj-90::obj-130" : 				{
					"parameter_longname" : "mute[3]"
				}
,
				"obj-91::obj-22" : 				{
					"parameter_longname" : "Mute[7]"
				}
,
				"obj-92::obj-106" : 				{
					"parameter_longname" : "CV3[5]"
				}
,
				"obj-92::obj-107" : 				{
					"parameter_longname" : "Linear[1]"
				}
,
				"obj-92::obj-11" : 				{
					"parameter_longname" : "PWM[1]"
				}
,
				"obj-92::obj-129" : 				{
					"parameter_longname" : "CV2[6]"
				}
,
				"obj-92::obj-36" : 				{
					"parameter_longname" : "PW[1]"
				}
,
				"obj-92::obj-4" : 				{
					"parameter_longname" : "Waveform[1]"
				}
,
				"obj-92::obj-45" : 				{
					"parameter_longname" : "FreqMode[1]"
				}
,
				"obj-92::obj-46" : 				{
					"parameter_longname" : "Offset[7]"
				}
,
				"obj-92::obj-51" : 				{
					"parameter_longname" : "Freq[5]"
				}
,
				"obj-92::obj-53" : 				{
					"parameter_longname" : "Mute[6]"
				}
,
				"obj-94::obj-20" : 				{
					"parameter_longname" : "mute[4]"
				}
,
				"obj-94::obj-32" : 				{
					"parameter_longname" : "Release[2]"
				}
,
				"obj-94::obj-45" : 				{
					"parameter_longname" : "Attack[2]"
				}
,
				"obj-94::obj-6" : 				{
					"parameter_longname" : "Sustain[2]"
				}
,
				"obj-95::obj-33" : 				{
					"parameter_longname" : "Quadrants[2]"
				}
,
				"obj-95::obj-55" : 				{
					"parameter_longname" : "Bypass[2]"
				}
,
				"obj-95::obj-80" : 				{
					"parameter_longname" : "Response[2]"
				}
,
				"obj-96::obj-20" : 				{
					"parameter_longname" : "Freq[4]"
				}
,
				"obj-96::obj-22" : 				{
					"parameter_longname" : "TimeMode[3]"
				}
,
				"obj-96::obj-23" : 				{
					"parameter_longname" : "Offset[6]"
				}
,
				"obj-96::obj-51" : 				{
					"parameter_longname" : "CV2[5]"
				}
,
				"obj-96::obj-54" : 				{
					"parameter_longname" : "CV1[3]"
				}
,
				"obj-96::obj-55" : 				{
					"parameter_longname" : "power[4]"
				}
,
				"obj-96::obj-63" : 				{
					"parameter_longname" : "CV3[4]"
				}
,
				"obj-96::obj-68" : 				{
					"parameter_longname" : "Res[3]"
				}
,
				"obj-96::obj-95" : 				{
					"parameter_longname" : "ResCV[3]"
				}
,
				"obj-97::obj-100" : 				{
					"parameter_longname" : "score[1]"
				}
,
				"obj-97::obj-105" : 				{
					"parameter_longname" : "rounding[1]"
				}
,
				"obj-97::obj-12" : 				{
					"parameter_longname" : "bypass[2]"
				}
,
				"obj-97::obj-77::obj-2" : 				{
					"parameter_longname" : "pastebang[5]"
				}
,
				"obj-98::obj-22" : 				{
					"parameter_longname" : "Mute[12]"
				}
,
				"obj-98::obj-52" : 				{
					"parameter_longname" : "Level[3]"
				}
,
				"obj-98::obj-55" : 				{
					"parameter_longname" : "DSP[3]"
				}
,
				"obj-98::obj-56" : 				{
					"parameter_longname" : "OutputChannel[3]"
				}
,
				"obj-99::obj-106" : 				{
					"parameter_longname" : "CV3[7]"
				}
,
				"obj-99::obj-107" : 				{
					"parameter_longname" : "Linear[2]"
				}
,
				"obj-99::obj-11" : 				{
					"parameter_longname" : "PWM[2]"
				}
,
				"obj-99::obj-129" : 				{
					"parameter_longname" : "CV2[8]"
				}
,
				"obj-99::obj-36" : 				{
					"parameter_longname" : "PW[2]"
				}
,
				"obj-99::obj-4" : 				{
					"parameter_longname" : "Waveform[2]"
				}
,
				"obj-99::obj-45" : 				{
					"parameter_longname" : "FreqMode[2]"
				}
,
				"obj-99::obj-46" : 				{
					"parameter_longname" : "Offset[9]"
				}
,
				"obj-99::obj-51" : 				{
					"parameter_longname" : "Freq[7]"
				}
,
				"obj-99::obj-53" : 				{
					"parameter_longname" : "Mute[8]"
				}

			}
,
			"inherited_shortname" : 1
		}
,
		"dependency_cache" : [ 			{
				"name" : "M4L.cross1~.maxpat",
				"bootpath" : "C74:/patchers/m4l/Tools resources",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "background_sm.maxpat",
				"bootpath" : "C74:/packages/BEAP/misc",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.ASR.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Envelope",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.Audio Mixer.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Mixers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.FM.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Oscillator",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.Granular.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Oscillator",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.LFO.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/LFO",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.LFO3.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/LFO",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.LPF.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Filter",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.MMF.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Filter",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.Oscillator.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Oscillator",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.Quantizer.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Quantizer",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.Reverb 1.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Effects",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.Sequencer.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Sequencer",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.Stereo.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Output",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.VCA.maxpat",
				"bootpath" : "C74:/packages/BEAP/clippings/BEAP/Level",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.arc.accum-2.maxpat",
				"bootpath" : "C74:/packages/BEAP/misc",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.arc.knob.maxpat",
				"bootpath" : "C74:/packages/BEAP/misc",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp.rgrain.maxpat",
				"bootpath" : "C74:/packages/BEAP/misc",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bp_change_to_pulse.gendsp",
				"bootpath" : "C74:/packages/BEAP/misc",
				"type" : "gDSP",
				"implicit" : 1
			}
, 			{
				"name" : "fit_jweb_to_bounds.js",
				"bootpath" : "C74:/packages/Node for Max/patchers/debug-monitor",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "n4m.monitor.maxpat",
				"bootpath" : "C74:/packages/Node for Max/patchers/debug-monitor",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "n4m_synth.js",
				"bootpath" : "~/Documents/GitHub/CU/CART451/project/prototypes/projProtN4M",
				"patcherrelativepath" : ".",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "pastebang.maxpat",
				"bootpath" : "C74:/packages/BEAP/misc",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "rchoose.maxpat",
				"bootpath" : "~/Library/Application Support/Cycling '74/Max 8/Examples/sampling/granular/lib",
				"patcherrelativepath" : "../../../../../../../Library/Application Support/Cycling '74/Max 8/Examples/sampling/granular/lib",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "rchoosef.maxpat",
				"bootpath" : "C74:/packages/BEAP/misc",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "resize_n4m_monitor_patcher.js",
				"bootpath" : "C74:/packages/Node for Max/patchers/debug-monitor",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "sine.svg",
				"bootpath" : "C74:/media/max/picts/m4l-picts",
				"type" : "svg",
				"implicit" : 1
			}
, 			{
				"name" : "square.svg",
				"bootpath" : "C74:/media/max/picts/m4l-picts",
				"type" : "svg",
				"implicit" : 1
			}
, 			{
				"name" : "swingCalc.js",
				"bootpath" : "C74:/packages/BEAP/misc",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "transratio.maxpat",
				"bootpath" : "~/Library/Application Support/Cycling '74/Max 8/Examples/max-tricks/notes-and-pitch/pitch-to-freq-ratio",
				"patcherrelativepath" : "../../../../../../../Library/Application Support/Cycling '74/Max 8/Examples/max-tricks/notes-and-pitch/pitch-to-freq-ratio",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "up.svg",
				"bootpath" : "C74:/media/max/picts/m4l-picts",
				"type" : "svg",
				"implicit" : 1
			}
, 			{
				"name" : "updown.svg",
				"bootpath" : "C74:/media/max/picts/m4l-picts",
				"type" : "svg",
				"implicit" : 1
			}
 ],
		"autosave" : 0
	}

}
