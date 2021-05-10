/* AfterCodecs Changelog */
/*

			'Media Encoder : AfterCodecs will limit parallel encoding to 4 at the same time'
			
			
cancelled :
  * H264 YouTube Profile : New "Fix YouTube Color Shift" checkbox that will try to make your uploads well processed by YouTube

 */
module.exports = [
	{
		Title: 'AfterCodecs is a suite of Adobe CC plugins bringing you the best and missing codecs for faster exports ! ',
		ResourcesFolder: 'Resources'
	},
	/*{
		nextBeta: true,
		//version: '1.7.7',
		//date: [2019,11,21],
		changes: [
			'OSX crashes fix',
		],
		
		
		
	},*/
	/*{
		nextBeta: true,
		version: '2.0.0.beta1',
		date: [2021,02,28],
		changes: [
			[ 'New internal improvements on containers and extensions :',
				'New "AfterCodecs" choice in After Effects format dropdown that has the .ext extension but will change at export time, according to what choice of container you choose in the Encoding popup',
				'Container choice and Alpha channel choice in Premiere Pro / Media Encoder has been moved inside the Encoding popup',
				'Support for .MKV container',
				'Support for .GIF without the previous hack where you had to choose .MOV',
				'Support for Audio only exports, very useful for PrPro MultiRender feature with audio clips'
			],
			'Now saving all recent rendering logs in a cached folder, so you can send us .log files or inspect them even if you don\'t use the log writing feature',
			'You can now make your exports in a temporary folder, that you can customize in the Settings, before the file is finally being written at your desired original location. Useful if you want to change easily which disk you are writing to while Adobe reads another disk during rendering',
			'New option to keep temporary files used when rendering, in case you want to save separated streams created by AfterCodecs when exporting',
			'Warning : you should only use one version of AfterCodecs at the same time, do not try to use both Version 1 and 2 as there could be conflicts',
			'Warning : in Premiere Pro / Media Encoder your previous presets will not be transferred over AfterCodecs Version 2, you will need to recreate them yourself'
		]
	},*/
	{
		version: '1.10.3',
		date: [2021,04,27],
		changes: [
			'ffkroma / ffmpeg update version 4.4 "Rao" from April 8th 2021',
			'AfterCodecs V2 is in BETA ! New features are .MKV support, audio only exports, .ext automatic extension in After Effects, new codecs are coming later. Test it right now by downloading and installing it from here https://www.autokroma.com/blog/BETA-For-AfterCodecs-V2-Exporter-Adobe-Premiere-Pro-After-Effects/',
			'Our new plugin Influx Importer for Adobe CC is in BETA ! It will allow you to import all kinds of new files, formats, containers and codecs directly into Premiere Pro, Media Encoder and After Effects (for example there is support for the .MKV container). Test it right now : https://www.autokroma.com/blog/BETA-For-Influx-Importer-Adobe-Premiere-Pro-After-Effects'
		]
	},
	{
		version: '1.10.2',
		date: [2021,04,20],
		changes: [
			'After Effects : removed the taskbar icon\'s progress bar feature introduced in v1.8.0 as it seems not stable enough'
		]
	},
	{
		version: '1.10.1',
		date: [2021,02,28],
		changes: [
			'Licensing : support for our new product PlumePack, your Best Project Manager and Media Trim Tool in Premiere Pro ! More information on our website https://autokroma.com/PlumePack'
		]
	},
	{
		version: '1.10.0',
		date: [2021,02,12],
		changes: [
			'2021 Support : After Effects version 18 and Premiere Pro / Media Encoder version 15 Support',
			'Premiere Pro MultiRender workaround implemented for Adobe markers bug, sometimes the duration of the export was off by one frame. With the workaround it exports the correct number of frames but you can\'t trust what is written in Premiere Pro markers UI : sometimes the end frame of your marker span will be wrong because this is an Adobe bug. MultiRender now automatically detects the right frame you wanted to export from the clip you selected on the timeline when you pressed the button in AfterCodecs Panel'
		]
	},
	{
		version: '1.9.9',
		date: [2020,10,28],
		changes: [
			'Installer improvements : it will warn you if the MediaCore folder does not exists, will create it for you in that case. On Windows it will also warn you if you have Adobe applications running while trying to install / update plugins and Visual C++ Redistributable x64 is also automatically installed now',
			'If AfterCodecs is in Trial Mode, it will write a .txt warning you about it in the same folder than your renders'
		]
	},
	{
		version: '1.9.8',
		date: [2020,9,19],
		changes: [
			'MultiRender : AfterCodecs now avoids exporting markers that are duplicated (for example if you click multiple times on the Add Markers buttons for the same clips, you\'ll get duplicates)',
			'After Effects : there is now a new checkbox in the Settings to disable AEfx taskbar icon\'s progress bar feature from AfterCodecs introduced in version 1.8.0',
			'GIF bug fixes'
		]
	},
	{
		version: '1.9.7',
		date: [2020,7,31],
		changes: [
			['Premiere Pro / Media Encoder :',
				'Empty audio track bug fix',
				'Maximum custom framerate is now 999 fps, so you can export at 240fps for example'
			]
		]
	},
	{
		version: '1.9.6',
		date: [2020,6,23],
		changes: [
			'Windows : if AfterCodecs is not loading you should install Visual C++ 2019 Redistributable x64, see our F.A.Q. https://www.autokroma.com/AfterCodecs/User_Guide/Windows__AfterCodecs_is_not_loading_or_I_get_the_vcruntime_dll_loading_error/',
			'Bug fixes'
		]
	},
	{
		version: '1.9.5',
		date: [2020,6,14],
		changes: [
			'Bug fix'
		]
	},
	{
		version: '1.9.4',
		date: [2020,6,12],
		changes: [
			['MultiRender :',
				'Bug fix with forbidden filename characters (<>:"/\|?*), now there is a protection removing them both in the Exporter and in the MultiRender Panel',
				'If you are on Trial Mode, license will only be asked once',
			],
			['Licensing :',
				'You can license BRAW Studio V2 and Upgrade V1 to V2 in AfterCodecs now',
				'Bug fix : if you have a floating server configured, the Settings tab won\'t try to remote license all Autokroma licenses anymore'
			]
		]
	},
	{
		version: '1.9.3',
		date: [2020,5,7],
		changes: [
			'Installer ZIP doesn\'t include Manual Installation folder anymore, a Manual ZIP can be found on the website if needed',
			'Installer OSX Premiere Pro Panel installation has been merged with AfterCodecs, only one checkbox now'
		]
	},
	{
		version: '1.9.2',
		date: [2020,4,26],
		changes: [
			['MultiRender :',
				'PrPro Panel : you can now add markers from Audio clips if they are not linked to a video clip',
				'PrPro Panel : new button "Add Markers for First Video Track" and first button is renamed "Add Markers for All Video Tracks"',
				'Exporting stopped randomly sometimes (all markers weren\'t used), now fixed',
				'Fixed an Adobe bug where some markers would be used to perform two similar exports'
			],
			'Plugins stability improvement'
		]
	},
	{
		version: '1.9.1',
		date: [2020,3,25],
		changes: [
			'Licensing improvement : you can now see all Autokroma licenses in the Settings tab'
		]
	},
	{
		version: '1.9.0',
		date: [2020,2,28],
		changes: [
			'After Effects OSX : you can now use multiple output module with AfterCodecs for the same render queue item, like on Windows',
			'AfterCodecs Installer is now independent from BRAW Studio. You can still download and install BRAW Studio from https://www.autokroma.com/BRAW_Studio/Download/'
		]
	},
	{
		version: '1.8.1',
		date: [2020,2,13],
		changes: [
			'Premiere Pro Panel : new "Open AfterCodecs Desktop" button to access Settings & License more easily !',
			'After Effects : Windows crash fix'
		]
	},
	{
		version: '1.8.0',
		date: [2020,2,8],
		changes: [
			'Premiere Pro : New AfterCodecs Panel to help you create, in a snap, MultiRender Markers from the selected clips on your timeline ! You can now export all your PPro sequences from one Export Window directly in Premiere Pro and Media Encoder in a few clicks. Compatibility starts from CC 2017 included',
			'After Effects : Now AfterCodecs displays a progress bar inside After Effects icon in your taskbar on both Windows and Mac OSX. Progress will go back to zero each time an element from the render queue is finished. Behavior is the same as what PPro and AME are currently doing, but adapted for After Effects renders that uses AfterCodecs as the output format'
		]
	},
	{
		version: '1.7.8',
		date: [2020,1,29],
		changes: [
			'Rare HAP empty video bug fix, happened with non multiple of 8 resolutions and high CPU cores',
			'Crash fix'
		]
	},
	{
		version: '1.7.7',
		date: [2019,11,21],
		changes: [
			'Empty video exported bug fix',
			'Notarization for OSX 10.15 Catalina',
			'New Uninstaller (.exe on Windows / .pkg on Mac OSX) in the "Uninstall Plugins" folder, Uninstall checkboxes from the installers were removed'
		]
	},
	{
		version: '1.7.6',
		date: [2019,11,12],
		changes: [
			'Improved Uninstaller for OSX'
        ]
	},
	{
		version: '1.7.5',
		date: [2019,11,4],
		changes: [
			'Support for Adobe CC 2020 (Premiere Pro, Media Encoder and After Effects)',
			'ffkroma updated to 4.2 like ffmpeg 4.2 (will automatically be updated)',
			'OSX : New "AfterCodecs Desktop" standalone popup next to the plugins (in MediaCore/Autokroma AfterCodecs/) also available like on Windows, so you can access Global Settings & License more easily ! Shortcut will be created in your Applications'
        ]
	},
	{
		version: '1.7.4',
		date: [2019,09,27],
		changes: [
			'Windows : new "AfterCodecs Desktop" standalone popup next to the plugins (in MediaCore/Autokroma AfterCodecs/) so you can access Global Settings & License more easily ! Shortcut will be created on your Desktop & Programs Menu',
			'Premiere Pro / Media Encoder : "Quick Sub Resolutions" new buttons at the bottom of Video Settings so you can quickly set Width and Height to Full 1/1, Half 1/2, Quarter 1/4 or Eighth 1/8',
			'Now AfterCodecs will warn you with a popup when there\'s a new version available'
        ]
	},
	{
		version: '1.7.3',
		date: [2019,8,6],
		changes: [
			'Floating server : releasing license when After Effects exits bug fix'
        ]
	},
	{
		version: '1.7.2',
		date: [2019,7,29],
		changes: [
			'New PPro / AME MultiRender feature for your workflow : lets you batch export parts of your timeline into individual renders, according to its markers prefixed by _. We need your feedback on this!',
			'Bug fixes : Audio bitrate now only shown for AAC and WAVE audio codec not selectable with .MP4 format'
        ]
	},
	{
		version: '1.7.1',
		date: [2019,7,25],
		changes: [
			'New Uninstall checkbox in the installers to easily uninstall AfterCodecs plugins',
			'Custom AAC Bitrate available once you choose "AAC" as Audio Codec',
			'VR180 Monoscopic, Stereoscopic Left-Right and Top-Bottom metadata added',
			['PPro / AME :',
				'New 5.1 Film (L C R Ls Rs LFE) audio layout ',
				'Custom Frame Rate field (Experimental) ! and 16, 18 Frame Rate options available'
			],
			'OSX License input : pressing COMMAND key will now automatically paste the license because COMMAND+V is not working',
			'Windows : IE won\'t launch anymore when using the popup offline'
	    ]
	},
	{
		version: '1.7.0',
		date: [2019,6,27],
		changes: [
			'New "User Guide" tab on top, showing Autokroma.com information to help you using AfterCodecs !',
			'OSX : fixed multiple screens bug',
			'OSX : fixed 5 seconds lags when exiting popup'
        ]
	},
	{
		version: '1.6.4',
		date: [2019,6,10],
		changes: [
			'Licensing bug fixes and new "Paste Clipboard" button useful on OSX where COMMAND+V for Pasting the license doesn\'t work',
			'OSX : when using multiple screens Settings popup would disappear, now it is shown on the primary screen'
	    ]
	},
	{
		version: '1.6.3',
		date: [2019,6,7],
		changes: [
			'Small bug fix'
         ]
	},
	{
		version: '1.6.2',
		date: [2019,6,5],
		changes: [
			'Various crashes fixes and using ffkroma version 4.1-103',
			'You can now buy AfterCodecs licenses on https://www.autokroma.com ! This version is the first one compatible',
			'Plugins are now in the "Autokroma AfterCodecs" subfolder in MediaCore along with ffkroma automatically copied : you don\'t need to download it anymore in the Settings tab on OSX. Installers will also delete olders versions of the plugins'
        ]
	},
	{
		version: '1.6.1',
		date: [2019,3,25],
		changes: [
			'H264 Low resolution color shift when re-imported into Adobe softwares fixed (in the Encoding Options popup a message will now tell you if the rendered file will be re-importable into Adobe softwares or not)',
			['PPro / AME',
				'Individual audio tracks options Mac OSX bug fix',
				'You can now export audio in 4.0 ambisonic WYZX / WYXZ formats',
				'Filesize estimations for HAP codecs improved'
			],
			'Misc bug fixes',
			'Using ffkroma 4.1-100 please update if you\'re not using the Windows installer'
        ]
	},
	{
		version: '1.6.0',
		date: [2019,2,28],
		changes: [
			'VR360 tag your renders automatically ! On PPro / AME CC 2019+ "Auto" will detect 360 / 3D footage automatically but you can also choose manually "Monoscopic", "Stereoscopic Left-Right" or "Stereoscopic Top-Bottom"',
			'Experimental GIF encoder (extension will automatically change to .gif, cannot contain audio)',
			['New global options :',
				'Disable AVX512 (Intel accelerated instructions) that seem to be the source of crash on some workstations',
				'Append encoding options to render\'s filename'
			],
			['Bugs fix :',
				'Hap Q Alpha No Snappy was buggy',
				'OSX : editing Quality, Speed, GOP input values with keyboard is possible again',
				'OSX : H265 / HEVC can be opened in Quicktime Player now'
			],
			'Our new product BRAW Studio can be licensed from AfterCodecs and vice-versa',
			'Using ffkroma 4.1-99 please update if not using the Windows installer'
        ]
	},
	{
		version: '1.5.1',
		date: [2018,11,26],
		changes: [
			'Using ffkroma 4.1-84 and not using ffmpeg anymore, you can delete the old ffmpeg executable if you want',
			'All color shifts with ProRes codecs are fixed now, please update !',
			'H264 / H265 : 8 bpc / 10 bpc, TV Range / Full Range, YUV subsampling choice (4:2:0 / 4:2:2 / 4:4:4)',
			'H264 YouTube profile in .MP4 will render AAC audio now, please use .MOV that will generate WAVE audio so that Youtube has the best quality to re-encode after upload ;) ',
			'PPro / AME : new audio layout to render all individual mono tracks separately, reimportable in Premiere Pro ! "All Channels" layout are now called : "All : One Multi-Channel Track", "All : Individuals Mono Tracks" and "All : Individuals Stereo Tracks" for more clarity',
			'AE : alpha channel interpretation (Straight or Premultiplied) and Matte color are now saved into files and work when reimporting into Adobe softwares',
			'New "Open target directory at the end of each render" checkbox in Settings tab (it won\'t open the folder multiple times if rendering multiple times in the same folder, it will only bring the Explorer / Finder window on the foreground)',
			'Hap codecs glitch bug fix',
			'Memory optimization for very long renders'
        ]
	},
	{
		version: '1.5.0',
		date: [2018,10,20],
		changes: [
			'Updated for CC 2019',
			'Our ffmpeg fork executable is now called ffkroma, don\'t forget to update if not using the Windows installer ! AfterCodecs needs at least version 4.0.2-93',
			['HAP codecs improvement :',
				'New Hap Q Alpha profile ! Automatically selected when rendering "Hap Q / Hap Q Alpha" and exporting an alpha channel ("RGB + Alpha" in AE, checkbox in PPro / AME)',
				'Best quality : new HAP algorithms are equivalent in quality to original Vidvox / Quicktime algorithms',
				'Faster compression : those algorithms were optimised with fast processor instructions, including AVX512 for recent workstations, and multithreading (up to 3 times faster depending on your content and configuration)',
				'For Hap and Hap Alpha you have the choice between 3 methods of compression, each with their own tradeoff between speed and quality',
				'Multiple By 4 Resolutions in HAP limit removed, you can now render any resolution you want'
			],
			'Warning on OSX : Adobe changed their way of interpreting AfterCodecs ProRes 422, it has now a color shift on reimport in Adobe CC 2019 (only), please use ProRes 4444',
			'Unable to Undo (CTRL+Z) when using automatic AE RQ Comments bug fix, now this feature has its own sub menu in "Composition" top menu under "AfterCodecs Settings"'

         ]
	},
	{
		version: '1.4.2',
		date: [2018,9,21],
		changes: [
			'AE : new option in Settings will automatically replace all Comments section of render queue items that are AfterCodecs renders by their respective AfterCodecs params (will happen each time you click the "Composition" top menu)',
			'ProRes 422 not limited to even width anymore',
			'Float licensing enabled',
			'Bugs fixes'
        ]
	},
	{
		version: '1.4.1',
		date: [2018,8,31],
		changes: [
			'Audio PPro / AME : added 24 bit , 32 bit (Float) and "All Channels (Grouped as Stereo)" audio layout which reimports fine in Premiere Pro as multichannel stereo ! (Experimental) ',
			'Audio on AE : added 32 bit (Float) and 8 bit',
			'[Experimental] Interlaced ProRes / H264 / H265.\nIn PPro / AME you should untick the last checkbox and choose something else than "None (Progressive)" (only if you have an interlaced source !).\nIn AE it\'s in the Render Settings -> Field',
			'Checkbox in settings to disable timecode metadata',
			'Description text now on the right ',
			'AE : new menu Composition -> AfterCodecs Settings to change Settings without going into the render queue',
			'AE in Render Mode : not showing the License popup anymore',
			'AE : ProRes 422 Ultra enabled (was only for PPro / AME before)',
			'H264 Fast Decode Tuning available',
			'Timecode issue in PPro / AME fixed',
			'Various bugs fixes'
        ]
	},
	{
		version: '1.4.0',
		date: [2018,6,20],
		changes: [
			'Now using ffmpeg 4.0 at least and a new ffmpeg_aftercodecs, please update ffmpeg in the Settings tab',
			'ProRes 422 faster in After Effects, better ProRes 422 compatibility in Adobe softwares',
			'Low screen resolution bug fix',
			'Unable to go over 4096x4096 resolution on PPro / AME bug fix',
			'Various bug fixes'
        ]
	},
	{
		version: '1.3.6',
		date: [2018,5,22],
		changes: [
			'Sound on PPro / AME : "All Channels" option available now'
        ]
	},
	{
		version: '1.3.5',
		date: [2018,5,18],
		changes: [
			'PPro / AME : able to export 4.0 VR and 5.1 audio',
			'H264 / H265 : max bitrate is now 900 Mbps and minimal filesize 1 Mio',
			'Various bug fixes'
        ]
	},
	{
		version: '1.3.4',
		date: [2018,4,26],
		changes: [
			'After Effects : ProRes interlaced (experimental feature)',
			'Bug fix for ProRes 422 on PP/ME CC 2018 Windows'
        ]
	},
	{
		version: '1.3.3',
		date: [2018,4,17],
		changes: [
			'Windows : Multiple output in parallel are now possible on AME and AE',
			'Manual ffmpeg download button in the Settings tab',
			'OSX Crash bug fix',
			'End frames lost bug fix'
        ]
	},
	{
		version: '1.3.2',
		date: [2018,4,15],
		changes: [
			'ProRes 4444 Export in PP / AME on OSX bug fix'
        ]
	},
	{
		version: '1.3.1',
		date: [2018,4,12],
		changes: [
			'Media Encoder render from After Effects / Interlaced footage instead of progressive bug fix',
			'New Audio codec choice : Auto (= previous behavior), AAC or WAVE, useful for AE RenderGarden without audio glitches'
         ]
	},
	{
		version: '1.3.0',
		date: [2018,4,9],
		changes: [
			'New AfterCodecs plugin for Premiere Pro and Media Encoder !',
			'ProRes 4444 has been divided into 3 profiles : 4444 Light (unofficial profile lighter than 4444), 4444 and 4444 XQ',
			'New "ProRes 422 Ultra" unofficial profile for Premiere Pro / Media Encoder, quality better than HQ',
			'New H264 YouTube Upload profile, which provides a fast way to render a video for uploading to web platforms !',
			'AE : Project Link feature is now compatible with CC 2018, and now points to the right composition in the opened project',
			'Various bug fixes',
			'New errors dialogs (for example with HAP codec, width must be a multiple of 4)',
			'AE : If you try to render Alpha with ProRes 422, it won\'t switch automatically to ProRes 4444 now'
        ]
	},
	{
		version: '1.2.2',
		date: [2017,12,11],
		changes: [
			'FREE H.264 720p in Trial !',
			'Snappy compression is enabled by default for HAP (the checkbox is here to disable it now)\nBeware test your software and hardware before deciding to disable Snappy. Some users report choppy playback without it !',
			'New Setup executable for both Windows and Mac, AfterCodecs uses Autokroma folder now for configuration and storing the ffmpeg executable (not Dornisoft)',
			'The codecs lists indicates [A] for codecs accepting alpha channel',
			'Various bug fixes'
        ]
	},
	{
		version: '1.2.1',
		date: [2017,10,25],
		changes: [
			'High DPI UI fix on Windows',
			'AfterCodecs .mov exports the timecode in non drop frame mode if the timecode is not negative\n( There\'s an AE settings to set automatically the Drop Frame / Non Drop Frame mode when importing NTSC footage, timecode will be converted automatically !)',
			'XMP Project Link : New experimental feature for ProRes (enable it in the Settings tab)',
			'AfterCodecs downloads ffmpeg latest version 3.4 ',
			'Crash bug fixed on Chinese Windows',
			'A bug where trial was not enabled is fixed'
        ]
	},
	{
		version: '1.2.0',
		date: [2017,9,19],
		changes: [
			'AfterCodecs for After Effects is now working for Mac OSX !',
			['WARNING :',
				'Items in previous projects that uses AfterCodecs won\'t be compatible with the new version, you\'ll have to reconfigure them !',
				'Windows : ProRes 4444 8 bits Alpha cannot be re imported in AE 16 bpc projects',
				'OSX : ProRes 422 when re imported in AE CC 2014 and older have color shifts ! Everything is fine for CC 2015 and CC 2017'
			],
			['NEW FEATURES : ',
				'Two new plugins in the dropdown : "AfterCodecs .mp4" and "AfterCodecs .mov". there\'s no more .ext and file renaming stuff (Removed the "Overwriting" options in Settings because not needed anymore)',
				'You can choose ProRes 4444 Alpha depth now : 16 bits or 8 bits (smaller files, faster decompression)',
				'Enabled lossless for x265 (same as x264 : 99 for 422, 100 for 444)',
				'AfterCodecs will warn you if the width or the height are odd instead of displaying the generic error popup',
				'2 New shortcuts : ESC to exit AfterCodecs dialog, Shift+ESC to reposition it in the top left corner (use theses shortcuts if you have trouble with multiple screens for example)',
				'ProRes 422 Bitrate matches more closely official Apple ProRes bitrate than before, and are now re importable back into AE on OSX'
			],
			'BUGS FIXED : Slight color shifts in ProRes has been mostly corrected',
			['KNOWN BUGS / LIMITATIONS : ',
				'OSX : When exiting the AfterCodecs options dialog, the UI freeze for a few seconds',
				'ProRes 422 always have a soundtrack even if you don\'t render sound',
				'x265 videos don\'t seem to be reimportable on OSX (OK on Windows)',
				'If the content is complex (with small repetitive patterns in background for example etc.), AfterCodecs\' ProRes has a hard time matching the official Apple bitrate : files can be 50% bigger but they will also be of higher quality. If that happens, you can try to step down the profile (e.g. choose Normal over HQ)'
			]
        ]
	},
	{
		version: '1.1.4',
		date: [2017,7,1],
		changes: [
			'WARNING :\nProRes renders need at least ffmpeg version N-86691-gc885356 because a bug was recently fixed in it !\nJust click the download button to update it',
			['BUGS FIXED : ',
				'Fixed AE exit crash bug',
				'Fixed the AE crash bug when clicking twice on the "Format Options" button',
				'Fixed the bug in CC 2015 when trying to mux at the end of the render',
				'"Error #11 : license too old" bug removed',
				'Bug with 29.97 fps fixed'
			],
			['NEW FEATURES : ',
				'For x264 : added two lossless modes (100 for 4:4:4, 99 for 4:2:0), beware : they are not compatible with Quicktime Player and old devices',
				'Overall ProRes quality has been improved, notably 4444',
				'ProRes 422 renders are faster',
				'End audio-video muxing is faster for x264 / x265 !',
				'16 bpc (Trillions of Colors) renders are also faster !',
				'Sound for HAP codecs is now Uncompressed PCM like ProRes',
				'ProRes streaming option enabled (Youtube accepts uploading ProRes !)',
				'Now if you want to use a ffmpeg whose version is not supported, AfterCodecs will accept it anyway for rendering and not look for an other ffmpeg version on the computer'
			]
        ]
	},
	{
		version: '1.1.3',
		date: [2017,5,31],
		changes: [
			'Added a bitrate mode for x264 / x264 RGB / x265',
			'Always overwrite checkbox in Settings to remove the dialog about renaming file OR overwriting OR canceling the render',
			'Added x264 video profiles (high, main, baseline) for old devices compatibility',
			'Automatically ticks FFmpeg checkbox if needed after Download',
			'New buttons in Settings to open Dornisoft folder and ffmpeg folder',
			'Removed max dimensions limitations, ProRes can handdle 8K resolutions now !',
			'Added Hap, Hap alpha and Hap Q codecs ! With settings to enable compression and chunks'
        ]
	},
	{
		version: '1.1.2',
		date: [2017,5,15],
		changes: [
			'Crash bug fix',
			'ProRes bugs fixes',
			'Added a "AfterCodecs AV Muxing" Dialog at the end of the render',
			'Added encoder metadata to ProRes with AfterCodecs\' and ffmpeg\' version (for example "ProRes HQ (AFC 1.1.2 3.2.2)")\nThis info can be seen in AE and PP',
			'Added fast decode for x264 / x265 when resolution > HD',
			'In the preview text under "Format Options" little description of chosen encoding parameters (for example "x264 Q75 (Streaming)")',
			'The encoding window is not always on top anymore',
			'Prevents overwriting files with the same name before launching render, asking to rename the file OR overwriting OR cancel the render'
         ]
	},
	{
		version: '1.1.1',
		date: [2017,5,8],
		changes: [
			'Added a trial of 500 frames'
         ]
	},
	{
		version: '1.1.0',
		date: [2017,5,8],
		changes: [
			'First public version'
		]
	}
];
