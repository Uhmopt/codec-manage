/* BRAW Studio Changelog */
/*

	{
		nextBeta: true,
		changes: [
			['',
				'',
			],
			'',
			''
		]
	},
 */
module.exports = [
	{
		Title: 'BRAW Studio is the best Blackmagic RAW (.BRAW) footage Importer for Adobe CC (Premiere Pro, Media Encoder and After Effects) with tons of features for your daily workflow !',
		ResourcesFolder: 'Source/Resources'
	},
    /*{
		nextBeta: true,
		version: '1.8.3',
		date: [2020,02,21],
		changes: [
			['After Effects :',
                'Layer Settings now tries to use your GPU when you select CUDA / OpenCL / Metal acceleration in File->Project Settings'
                
			],
			''
        ]
	},*/
    {
		version: '2.4.1',
		date: [2021,04,24],
		changes: [
            ['Fixed :',
                'PrPro Cache Rendered Previews : green line turned back to red sometimes since version 2.4.0. Now fixed but you will need to render them again once after updating',
                'After Effects Layer Settings GPU decoding : artifacts could be visible at the bottom of big resolution frames (6K and more)',
                'Preset and Sidecar loading / saving issues when the latest Gamut ("DaVinci Wide Gamut") and latest Gamma ("DaVinci Intermediate") were selected',
                'Convert BMD PrPro Panel : issue when a .BRAW file was offline and missing in the project',
                'Crash issue'
            ]
        ]
	},
	{
		version: '2.4.0',
		date: [2021,03,28],
		changes: [
            ['BRAW 2.0 :',
				'Support for new cameras URSA Mini Pro 12K and BMPCC 6K Pro cameras, latest Camera Firmware (e.g. v6.9.4+ on URSA Mini Pro G1 and G2) and Nikon Z 6II / Z 7II .BRAW clips captured by Blackmagic Video Assist',   
                'Support for Dual Card Recording, it will produce a separate .braw2 file with half of the frames. If this file is missing the imported main .braw file will only report half the framerate you recorded',
				'Color Science Version 5 available for all .BRAW. Note : in this new Gen5, the curve is fixed so ISO and Exposure have the same effect, see CaptainHook message here https://forum.blackmagicdesign.com/viewtopic.php?f=2&t=123096#p675106. Now we have a new Param for Color Science in BRAW Settings because before there was only Version 4',
				'New Param in BRAW Settings : "Use Gamut Compression" checkbox will protect your extreme highlights, in the PrPro Panel it is next to the Color Space (Gamut) choice. WARNING : this Param is in BETA ! Do not use if not really needed, until BRAW 2.1 is out and BRAW Studio updated. Disable this if automatically enabled.',
				'New Color Spaces (Gamuts) : Alexa Wide Gamut, DaVinci Wide Gamut',
				'New Gammas : Log C, DaVinci Intermediate',
				'Bug fix : incorrect resolution for 2.8K footage (for example it was 2868x1512 instead of 2864x1512), see https://forum.blackmagicdesign.com/viewtopic.php?f=12&t=110719. Don\'t forget to change your sequences with this new correct resolution !',
				'Note 1 : URSA 12K frames are huge, in PrPro we recommend using Playback and Paused Resolution at 1/4, in AEfx please use our Layer Settings with GPU acceleration (Metal / CUDA / OpenCL) enabled in the Settings',
				'Note 2 : for all recent .BRAW (URSA 12K, BMPCC 6K Pro, recent firmware), Camera Metadata default values are Color Science at V5 and "Use Gamut Compression" enabled. We recommend turning off the latter, unless you really need it.'
			],
            '.sidecar and .braw2 (from Dual Card recording) files will be copied when using AEfx "Collect Files" and PrPro "Collect and Copy" from the Project Manager, on PrPro only for filepath with Latin-1 characters. If you have an issue please contact us ! https://www.autokroma.com/contact',
			'macOS : because of BRAW 2.0 the minimum version is now 10.14 Mojave'
        ]
	},
    {
		version: '2.3.0',
		date: [2021,03,18],
		changes: [
            ['New Features :',
                'PrPro Panel "Trim BRAW" button in the Source Settings Tab : you can now trim a selected .BRAW file, creating a new file without unused frames while keeping the exact same metadata and the same original frames, very fast and without any re-encoding. In/Out points for the trim are taken from the Mark In / Mark Out bounds set in the Source Monitor of the Source clip from the Project Panel.\nCurrent Settings are exported in a .sidecar next to the .BRAW file. If you need more .BRAW Trimming feature we have another product called PlumePack for that purpose, check it out here : https://www.autokroma.com/PlumePack',
                'Preset Manager popup : new button to open the Global Presets folder, so it makes it easy to transfer your presets by copying around the presets you want !'
            ],
            'Official Blackmagic RAW Player and Thumbnails (Windows Explorer / macOS Finder) from Blackmagic Designcannot be installed anymore from our installer, but they can be downloaded and installed easily from the BRAW Studio PrPro Panel, ToolBox tab',
            'PrPro Panel bugs fixes for PrPro versions before 12.1 (CC 2018.1)',
            'PrPro Panel ToolBox tab design improved',
            'Convert BMD Project internal improvements'
        ]
	},
    {
		version: '2.2.7',
		date: [2021,03,02],
		changes: [
			'Fixed issue when getting back from Windows Sleep Mode with Premiere Pro opened, the BRAW footages were displaying red frames (restarting PrPro was the only solution)',
            'Fixed errors when starting PrPro with BRAW Studio Panel already opened (reloading the panel was needed)'
        ]
	},
    {
		version: '2.2.6',
		date: [2021,02,19],
		changes: [
			'Licensing : support for our new product PlumePack, your Best Project Manager and Media Trim Tool in Premiere Pro ! More information on our website https://autokroma.com/PlumePack',
			'We now have new BRAW Studio YouTube tutorials to understand easily our best features. More information on our website https://autokroma.com/blog/BRAW-Studio-YouTube-Short-Tutorials/',
            'Premiere Pro bug fixed : some projects with BRAW files made with the "Production" Premiere Pro feature were involving crash and/or an error "Impossible to get Handler"',
            'Solved issues when BRAW footages had a comma "," in their filepath. Especially with "Export correct FCP XML", "Correct Timecode" and "Display Metadata in Project Panel" features',
            'Improved user feedback when launching "Export Corrected FCP XML", "Correct Timecode" and "Display Metadata" process',
            'Settings and License popup : checkboxes to disable BRAW Studio per Host removed because there should be no reason to use them anymore',
        ]
	},
    {
		version: '2.2.5',
		date: [2021,01,12],
		changes: [
            '/!\\ WARNING : When upgrading from BRAW Studio < 2.2.0 to BRAW Studio >= 2.2.0 you could get your .BRAW offline and get the PrPro 2020 Shift. Please read our article to correct your project and upgrade safely : https://autokroma.com/blog/BRAW-Studio-Upgrade-2-2-Bug-Fix/ ',
			['PrPro Panel Fixes :', 
				'Applying Preset or Saving Sidecar for multiple clips was broken in last 2.2.4 version',
				'OSX : there was a crash message popping up when closing the panel'
			],
            'Layer Settings After Effects Fix : issues when saving the AEfx project with offline .BRAW Medias'
        ]
	},
    {
		version: '2.2.4',
		date: [2020,12,24],
		changes: [
            ['BRAW 1.8.2 :',
				'Added support for Nikon Z 6 and Z 7 Blackmagic RAW clips captured by Blackmagic Video Assist',
                'New Gamma in BRAW Settings : N-Log'
            ],
			['PrPro Panel New Features :',
				'BRAW Settings : some data are now stored locally from a session to another. It improves the Panel performance when re-starting Premiere Pro. Cache can be manually deleted from the Settings & License Popup',
				'BRAW Settings : Load and Save Sidecar buttons are now available in Decode Using : "Camera Metadata" and "BRAW Default"',
				'Metadata : new line "Has Embedded LUT"'
            ],
            ['Fixed :',
				'PrPro Panel v2.2.3 slowdown fixed',
                'When updating BRAW Studio, if a new choice was available in a BRAW Settings dropdown (like a new Gamma) : when opening an existing project it was impossible to select the new choice (one needed to re-import the footage to be able to select this new choice). This bug remains when updating from older versions, but it will be fixed from now on',
                'BRAW Studio Panel had trouble with multiple projects in the same Premiere Pro session',
                '"Reset to BRAW Default" button in BRAW Settings now sets the White Balance to fixed values (5500,10) instead of the previous behavior which was settings White Balance to "AsShot"',
                'Toolbox Convert BMD bug fix'
            ]
        ]
	},
    {
		version: '2.2.3',
		date: [2020,12,16],
		changes: [
            ['PrPro Panel New Features :',
				'Toolbox Convert BMD : now supports mixed plugins projects. Use with caution ! The best is that you do not mix plugins and follow official instructions',
				'ToolBox PrPro 2020 Shift : new method to correct your project in one click ! You don\'t need to relocate manually all your files anymore. Please send us your feedback if it works for you ! As always you need to use a .prproj BEFORE you notice the Shift.\n/!\\ WARNING : When upgrading from BRAW Studio < 2.2.0 to BRAW Studio >= 2.2.0 you could get your .BRAW offline. When relinking them you could get the PrPro 2020 Shift, if that\'s the case DO NOT save your project shifted, and apply this automatic method to the project saved with BRAW Studio < 2.2.0',
				'The first .BRAW selection is a bit longer because of the initialization. There is now a feedback text to inform this init process is running'
			],
            ['PrPro Panel Fixes :',
                'Wrong multiple selection, for example when the selection was happening during another event',
                'Bad Source Settings values displayed if the panel was not selected when clicking on buttons (Loading Preset / Reset to Camera Metadata etc.)',
                'Toolbox Timecode Correction of Dropped Frame 29.97 fps BRAW footage in Premiere Pro after 14.3 version fixed'
            ]
        ]
	},
    {
		version: '2.2.2',
		date: [2020,11,10],
		changes: [
            'Premiere Pro Cache Improvement : Video Previews rendered in the project were not linked when restarting Premiere Pro, so the "green line" above the timeline was returning to red or yellow sometimes. Now it should stay green longer and keep your renders for faster previews',
            ['PrPro Panel :',
				'Metadata tab : new lines for "Timecode Frames" and "Timecode is Drop-Frame"',
				'Panel is now disabled if BRAW Studio wasn\'t properly installed',
                'Convert BMD Project fix on some big projects',
                'Export Correct FCP .XML issue with Non Drop-Frame Timecode for .BRAW files at 29.97 fps (it seems like there is still the Adobe Timecode bug for this particular case)',
                'Removed red popup which was happening in the Metadata tab when selecting an offline clip'
            ]
        ]
	},
    {
		version: '2.2.1',
		date: [2020,10,27],
		changes: [
            'PrPro Panel Convert BMD now produces a .txt report file with more details about the conversion',
			['PrPro Panel Fixes :',
                'Merged Clip Items composed of Audio and Video from different BRAW sources are now well displayed in the Panel Source Settings',
                'Source Settings Merged Clips with network storage path were not working',
                'Export correct FCP XML feature (useful for PPro versions < 14.3) was not working with BRAW files on network storages',
                'Avoid "Error - Spawn E2BIG" error, which was especially happening with our First Frame Shift Issue Relocalization tool',
                'Convert BMD bugs with big projects'
            ],
			'Crash fix'
        ]
	},
    {
		version: '2.2.0',
		date: [2020,10,14],
		changes: [
			'Partial Presets : each RAW Params in the Global Presets can be "applied" or not by clicking on checkboxes, available in the "Manage" (previously "Rename") popup next to the Presets list. This feature also works in batch !',
			['PrPro Panel New Features :',
                'Convert BMD : you can now properly transfer your .prproj (Premiere Pro project) started with the Blackmagic Design Premiere Pro Plugin to BRAW Studio in one click with the Premiere Pro Panel, available in the ToolBox tab',
                'Metadata tab : each .BRAW metadata is now displayed row by row, they are constantly updated from the currently selected .BRAW. Might be more practical than Project Item Properties and Project Panel metadata columns, depending on your workflow',
				'Toolbox tab : regrouping features that you only do once in a while such as Convert BMD, PrPro 2020 Shift Relocation, Export FCP .XML, Timecode Correction, Timecode Shift Correction',
                '"Export Current BRAW Frame" button at the bottom of Source Settings Panel will export the current frame in the Source Monitor into a one-frame .BRAW file with .sidecar in the same folder with the same filename',
                'Copy / Paste buttons at the top of the Source Settings Panel, easier to use than Global Presets for a quick transfer of RAW Params. You can paste to a selection of .BRAW too !',
                'New animation is displayed when something is processing. Useful feedback when applying an action to multiple .BRAW and you need to wait a bit'
			],
			'Premiere Pro Fix : "Insert" and "Overwrite" on .BRAW Project Items were grayed out, now available again',
			'After Effects Layer Settings Windows : OpenCL fix',
			'Installer improvements : it will warn you if the MediaCore folder does not exists, will create it for you in that case. On Windows it will also warn you if you have Adobe applications running while trying to install / update plugins and Visual C++ Redistributable x64 is also automatically installed now',
			['PrPro Panel Fixes :',
				'Issue with non-ASCII chars in the filepath (especially with the Shift Correction process)',
                'Issue with Merged Clips when Application Language wasn\'t English',
                'Removed red error popup when importing a .BRAW File in CC 2018',
                'Prev/Next buttons, the wrong item could be selected in the Timeline',
                '"Open In Source Monitor" button is not available anymore in versions before CC 2019 (a red popup was displayed before)',
                'Saving a Global Preset will now display a confirm popup, to avoid a misclick which would erase existing values in the Preset'
            ],
        ]
	},
    {
		version: '2.1.5',
		date: [2020,9,7],
		changes: [
			['BRAW 1.8.1 for Windows :',
				'.BRAW Thumbnails are back !',
                'After Effects : "File exists but couldn\'t be opened for reading" error and warning popups are gone'
            ],
			'Premiere Pro : a message will now warn you when you opened a project that was using BMD Adobe plugin before'
        ]
	},
    {
		version: '2.1.4',
		date: [2020,9,3],
		changes: [
			['Premiere Pro Panel :',
                'Selected clip text now has an icon at its left, indicating if the selection waws made from the Timeline or from the Project Panel',
                'Clicking on "Set New Source" now updates the selected Source in the Panel (no need to unselect and re-select the clip anymore)',
                'When using Prev/Next buttons now the audio track item linked to the video track item is also selected if it exists'
            ],
			'Licensing bug fix'
        ]
	},
    {
		version: '2.1.3',
		date: [2020,8,9],
		changes: [
			'Installers will now double confirm with you before uninstalling Blackmagic RAW Adobe plugins from Blackmagic Design and redirect you to an online article when a conflict has been detected',
			['Premiere Pro Panel :',
			    'New Feature : Auto-Update. Panel will automatically download a new version of BRAW Studio if one is available. It can be disabled in the Settings',
                'Fixed : sometimes "No BRAW Item selected" was displayed and Source Settings were disabled. If you still have this problem, please try to Reload the panel (button at the bottom of the Panel) or contact us',
				'The maximum number of BRAW clips selected at the same time has been changed from 50 to 100',
		    ]
        ]
	},
    {
		version: '2.1.2',
		date: [2020,7,22],
		changes: [
			'BRAW 1.8 : Support for Sigma fp Blackmagic RAW clips captured by Blackmagic Video Assist',
            ['Fixed :',
				'Some panel features (metadata, timecode, Source Settings) were not working when applied on a lot of BRAW files',
				'"Correct 2020 PPro Shift" feature improvements and fixes',       
				'When a preset was renamed before saved, the name was erased'
			]
        ]
	},
    {
		version: '2.1.1',
		date: [2020,6,28],
		changes: [
            'Windows : CUDA loading crash fix'
        ]
	},
    {
		version: '2.1.0',
		date: [2020,6,25],
		changes: [
            'After Effects : Layer Settings can now be GPU accelerated when GPU selected in File -> Project Settings. Windows : works for OpenCL / CUDA. Mac OSX : works for Metal. Compatibility starts with AEfx CC 2019 onwards. You can enable this through a checkbox in the Settings (it won\'t be enabled by default), please send us your feedback !'
        ]
	},
    {
		version: '2.0.4',
		date: [2020,6,23],
		changes: [
			['Premiere Pro Panel :', 
                'New Feature : click on the new "Set New Source" button, a subclip will be automatically created from the select .BRAW Project Item, and the currently selected .BRAW clip in the timeline will be re-assigned to this new subclip. It is useful if you have 2 clips in your timeline coming from the same Project Item, and you want to have different color grade (separated Source Settings). See our article https://www.autokroma.com/blog/BRAW-Studio-Source-Settings-Panel',
                'Bug fix : Prev and Next buttons with Titles in the sequence',
                'Bug fix : "Correct 2020 PPro Shift" feature for big projects, it\'s also more performant and better suited for Mac OSX when files are from different disks'
            ],
			'Windows : if BRAW Studio is not loading you should install Visual C++ 2019 Redistributable x64, see our F.A.Q. https://www.autokroma.com/BRAW_Studio/User_Guide/Windows__BRAW_Studio_is_not_loading_or_I_get_the_vcruntime_dll_loading_error',
			'Various bug fixes'
        ]
	},
    {
		version: '2.0.3',
		date: [2020,6,14],
		changes: [
            'Premiere Pro Panel : all features from V1 (i.e. not the Source Settings tab) are working again for CC 2017 and CC 2018.0',
			['AEfx Layer Settings :',
				'Fixed : .BRAW file Metadata in the Project Item\'s "Comment" section were gone',
				'Fixed : wrong frame displayed on NTSC framerate when Time Remapping was enabled'
			],
			'Licensing bug fix'
        ]
	},
    {
		version: '2.0.2',
		date: [2020,06,3],
		changes: [
			['Premiere Pro Panel :',
				'"Reload" button at the bottom is available to refresh the panel if a bug has appeared and prevented you from using it. Now you can use the Panel again without having to redock it manually, but don\'t forget to send us a bug report if you experience an undesired behavior !',
				'Export Correct FCP .XML feature has been fixed'
			]
        ]
	},
    {
		version: '2.0.1', 
		date: [2020,05,29],
		changes: [
			'Performance optimization, BRAW Studio should now match Blackmagic Premiere Pro plugin, sometimes faster. We\'re waiting for your tests and feedback !',
            'Fixed : When changing Gamma to "Blackmagic Design Film", all other customs params could be reset to Camera Metadata values',
            'Fixed : When selecting the Panel after having changed the Source Settings, the Panel is updated with changes made in Source Settings',
			'"Priority" checkboxes are now changed into "Disabling" checkboxes where you can disable BRAW Studio for PrPro / AME and / or AEfx : now if a .BRAW cannot be imported with BMD Adobe plugin and the checkboxes are enabled, it also won\'t import with BRAW Studio so you\'re sure to not be using BRAW Studio in your project',
			'Installer ZIP doesn\'t include Manual Installation folder anymore, a Manual ZIP can be found on the website if needed',
			'aescriptsLicensing update bug fix'
        ]
	},
    {
		version: '2.0.0', 
		date: [2020,05,22],
		changes: [
            ['New Feature, Source Settings Panel in Premiere Pro :',
                'You can now control Source Settings of your .BRAW clips directly in your BRAW Studio Panel with a dedicated interface : no need to switch onto the Master tab anymore',
                'The Source Settings currently showed are updated when you select a .BRAW Project Item (in the Project Panel) or a .BRAW Clip (on a timeline)',
                'Multiple Selection Mode when you select multiple braw : you can batch apply Global Presets to all selected .BRAW, Save or Load sidecar and use the "Reset" buttons',
                '"Next" and "Prev" buttons can be used to move from BRAW to BRAW throughout the timeline (next .BRAW will be the one closest in time to currently selected .BRAW)',
                'You\'ll get a warning if you select a .BRAW clip with a Proxy attached and enabled'
            ],
            ['New Feature, Auto Correct Tool for "PrPro 2020 Relocating Shift Issue" in our Panel :',
                'This issue is happening when files needs to be relocated and others files than .BRAW can be concerned, more info here https://www.autokroma.com/blog/Premiere-Pro-Timeline-Shift-First-Frame-After-Moving-Project-Relinking', 
                'We now have a new way to auto-correct your .prproj (Premiere Pro project file) directly, by relocating the files inside (any extension)',
                'This new tool is in the "Shift Issues" tab of the BRAW Studio Panel, you will find there instructions to use it'
            ],
            'Presets and Copy/Paste : when pasting Source Settings (or loading Premiere Pro presets), if "As Ashot" was selected in the initial clip, it will be applied to the pasted clip, even if the White Balance values are not the same',
            'When switching to Camera Metadata or BRAW Default, the disabled values in the Effect Controls Panel in this mode are no more updated. You can still see what values are inside Camera Metadata / BRAW Default by clicking on the "Reset" buttons',
            'Global Presets can be transferred more easily from one computer to another by copy pasting BRAW Studio Global Preset files'
            
        ]
	},
    {
		version: '1.9.4', 
		date: [2020,04,26],
		changes: [
            'Memory leak from version 1.9.3 made renders and exports unfeasable, now fixed'
        ]
	},
    {
		version: '1.9.3', 
		date: [2020,04,18],
		changes: [
            'Premiere Pro Panel "FCP .XML Correction" feature was shifting 59.94 fps BRAW footages, now fixed',
            'After Effects CC 2017 14.0 works now (it was working only from 14.1 before)'
        ]
	},
    {
		version: '1.9.2',
		date: [2020,03,25],
		changes: [
            ['Premiere Pro Panel :',
                'New Feature : a new button lets you set the metadata of only the selected Clips in the Project Panel',
                'Fixed Shift Correction : Avoid error message if special clips (like transparent Video) are in the timeline, also added security to be sure non braw clip cannot be shifted by the panel',
                'Improved some blue message feedback launched by the panel'
            ],
			'Licensing improvements : you can now see all Autokroma licenses in the Settings & License popup or Desktop application'
        ]
	},
    {
		version: '1.9.1',
		date: [2020,03,18],
		changes: [
            ['Premiere Pro Panel :',
                'New Feature : a new button lets you correct the timecode of only the selected Clips in the Project Panel',
                'Fixed : now the Panel can be used on hundreds of BRAW Clips for big projects'
            ],
            ['BRAW 1.7 :',
                'Support for Panasonic EVA1 + Canon EOS C300 Mark II Blackmagic RAW clips captured by Blackmagic Video Assist',
                'New Color Spaces (Gamuts) : "V-Gamut" and "Canon Cinema Gamut"',
                'New Gammas : "V-Log" and "Canon Log2"',
				'Important Note : When opening older projects, it will be impossible to select the new Gammas and Gamuts. If you need them, you should import your .BRAW again'
            ],
            'Crash fix'
        ]
	},
    {
		version: '1.9.0',
		date: [2020,02,28],
		changes: [
            ['Premiere Pro Panel :',
                'New Feature : FCP .XML Correction - the best way to get a correct XML in order to grade in Resolve ! Without modifying Adobe timecode and without experiencing timeline shifts after footage relocation because of the Adobe timecode fix. Read our article for more information https://www.autokroma.com/blog/BRAW-Wrong-Timecode-Adobe-Premiere-Pro/',
                'Timecode Correction and Metadata Import are now two separates buttons, improved performances of Timecode Correction',
                'Timecode Correction and Metadata Import : you don\'t need anymore to generate the thumbnail in the Project Panel before processing, all BRAW are ready to be processed at any time',
                'Improved general appearance and design with clickable tabs',
				'Compatible again with newest versions of PrPro (14.0.2 and onwards)'
            ],
			['After Effects Layer Settings :',
                'Fixed issues with Time Stretching and Time Remapping',
                'Fixed issue with 8bpc when composition size was not the same than the .BRAW layer',
                'Fixed memory leaks from version 1.8.2'
			],
			'BRAW Studio Installer is now independent from AfterCodecs. You can still download and install AfterCodecs from https://www.autokroma.com/AfterCodecs/Download/'
        ]
	},
    {
		version: '1.8.2',
		date: [2020,01,29],
		changes: [
			'Blackmagic RAW background installer in our Autokroma Installer : just tick a checkbox in our install to get Blackmagic RAW Player (double click on .braw to play them) and OS Thumbnails (Windows Explorer, OSX Finder) ! Our Windows installer will also warn you if it detected Blackmagic RAW Adobe plugins and offer you the chance to delete them',
			'32 bpc support for Importer in both Premiere Pro and After Effects',
			['After Effects :',
                'Fixed crash in the Layer Settings which could happen when decoding at 1/3 resolution',
                'Improved error message when applying the Layer Settings in a Layer not connected to a Source (Text, Null Object etc.)',
                'Fixed : when the Layer Settings is disabled (abnormal situation), the Settings & License button was not working',
				'Now that the Importer produces directly 32 bits image (16 bits was used before instead) the whole BRAW Studio pipeline can work in 32 bits : you can mix both Importer and Layer Settings in the same 32 bpc project'
                
			],
			'Premiere Pro : now a project that started with the Blackmagic RAW Plugin, opened with BRAW Studio, will try to inform you with a better message (before it was about "Handle Size")',
			'16 bpc glitches and crash bug fix',
			'Various crashes and bugs fixes'
        ]
	},
	{
		version: '1.8.1',
		date: [2019,12,6],
		changes: [
			['After Effects :',
				'Big performance improvements in BRAW Studio Layer Settings',
				'32 bits support',
				'"Decode first frame only" checkbox in the Settings was removed, not useful anymore',
				'Avoid wrong message when loading a preset'
			],
			['Global Presets in the Source Settings (PPro) / Layer Settings (AEfx) :',
				'New "Manage Preset" button in the UI (below the "Save Preset" button) to be able to rename your currently selected preset. Presets will be named "Untitled Preset" until you rename them yourself',
				'Total number of available presets is now 20 (was 10 before)',
				'New article on our website explaining how to make copy of them for your own custom use'
			],
			'New Uninstaller (.exe on Windows / .pkg on Mac OSX) in the "Uninstall Plugins" folder (so uninstall checkboxes from the installers were removed)\nYou can also easily uninstall Blackmagic RAW plugins from there with the new checkbow "Uninstall Blackmagic Design Adobe Plugins" !',
			'Notarization for OSX 10.15 Catalina',
            'BRAW Studio plugins now have priority over Blackmagic Design\'s Blackmagic RAW plugin by default. If both are installed and you want to try out Blackmagic plugins you can lower BRAW Studio priority in our Settings Popup with one checkbox for Premiere Pro / Media Encoder and anoother checkbox for After Effects. MediaCore folder plugin was renamed "BRAW Studio" on Windows for that effect and BMD disable / uninstall buttons removed in the Settings & License popup.',
			'BRAW API 1.6 update',
			'Bug fixed : custom White Balance values weren\'t applied when loading a Preset or Sidecar in "Custom B"'

		]
	},
	{
		version: '1.8.0',
		date: [2019,11,12],
		changes: [
			['BRAW Studio for After Effects available now !',
				'Import any .braw footage, supports 8 bpc and 16 bpc for now',
				'Change the Blackmagic RAW Parameters in our Layer Settings Effect available under "Autokroma" in the Effects list (should only be applied on a .braw source footage layer)',
				'Metadata in the Comment column of the project panel, set after applying the Layer Settings, in the form "R.X - S.Y - T.Z - G.B - CR.W" (with Reel X, Scene Y, Take Z, GoodTake B 1 or 0, Compression Ratio W)'
			],
			'Premiere Pro : new "BR Compression Ratio" metadata, set as always by our BRAW Studio Panel'
        ]
	},
	{
		version: '1.7.6',
		date: [2019,11,8],
		changes: [
			'CC 2020 (Premiere Pro / Media Encoder 14.0)'
	    ]
	},
	{
		version: '1.7.5',
		date: [2019,10,29],
		changes: [
			'BRAW Studio Desktop : 2 new buttons to help you disable / enable back again Blackmagic Adobe plugins, so you can switch easily between the two plugins, and another button to completely remove them. Needs to be launched in Administrator on Windows and with sudo in the Terminal on OSX !',
			'Fixed : BRAW Studio Panel (timecode and shift correction) was not working in previous version',
			'Stability bug fixes'
        ]
	},
	{
		version: '1.7.4',
		date: [2019,10,24],
		changes: [
			['New features :',
				'Quickly compare two sets of RAW Params with Decode Using Custom A and B and the "Switch A/B" button !',
				'"Reset to Camera Metadata" button to reset all current RAW Params to those from Decode Using Camera Metadata',
				'Premiere Pro : You will be warned now if Timecode is wrong (23.98 / 29.97 fps), when importing a new clip or when opening an existing project. This yellow warning can be disabled in the Settings popup',
				'Panel : "Set correct timecode and metadata" button now only fires one unique blue popup, to not clutter Premiere Pro logs',
				'"Diagnostics" button in the Settings & License Popup in case if BRAW Studio is not installed properly',
				'Premiere Pro / OSX : Right-click "Properties" on .braw Source will now give you the Timecode (Media Start), so you can check yourself what is the right timecode for 23.98 / 29.97 fps footages'
			],
			'BRAW 1.5.1 : Removed the "Priority" checkboxes, they are useless now that Blackmagic is blocking our plugin and always taking priority',
			'The Shift correction feature (Panel) stopped working but now has been fixed',
			'User Guide in .PDF removed from downloaded .ZIP now that all information is available online at https://www.autokroma.com/BRAW_Studio/User_Guide/'
        ]
	},
	{
		version: '1.7.3',
		date: [2019,9,27],
		changes: [
			'Licensing bug fix'
        ]
	},
	{
		version: '1.7.2',
		date: [2019,9,26],
		changes: [
			'Fixed on Windows : BRAW Studio 1.7.1 and 1.7.0 plugins couldn\'t load because cudart64_100.dll wasn\'t found',
			'Fixed : When copying/pasting Source Settings, if White Balance Preset was "AsShot" there could be undesired behavior afterwards'
        ]
	},
	{
		version: '1.7.1',
		date: [2019,9,23],
		changes: [
			'WARNING : Previous 1.7.0 version SHOULD NOT be used, it is broken because of our tests related to the next BRAW Studio for After Effects BETA (Contact us to participate!) and projects saved with that version might not work in the future. Do not use it and update to 1.7.1 !',
			'Fixed : Source Settings plugin wasn\'t loading properly in Premiere Pro CC 2017',
			'[OSX] Fixed : Source & License Popup and Desktop popup had wrong colors in Dark Mode, it now will always be Light even in Dark Mode'
        ]
	},
	{
		version: '1.7.0',
		date: [2019,9,22],
		changes: [
			'New feature : BRAW Studio Presets ! You can now save and load up to 10 different Settings Presets from any Source Settings !',
			'[Windows] You can now test our CPU-CUDA implementation, not fully optimized yet, by enabling the option in the Settings popup. Send us your feedback !',
			'New "BRAW Studio Desktop" standalone popup next to the plugins (in MediaCore/Autokroma BRAW Studio/) so you can access Settings & License more easily ! Shortcut will be created on your Desktop & Programs Menu (Windows) or your Applications (Mac)',
			'BRAW API 1.5 update : now that Blackmagic has a new plugin, BRAW Studio will take priority over it by default : you can disable this in the Settings popup. You\'ll need to restart Adobe software to take that change into account',
			'"Decode Using : Clip" is now called "Decode Using : Custom" : the term "Clip" was taken from Resolve, but has multiple meaning in Premiere Pro, which can be confusing. BRAW Studio Source Settings applies for all instances of the Source Clip on all timelines of the current project. "Clip" is also used to refer to instances of Source Clips in timelines; they can have different properties and effect without affecting the Source Clip imported.',
			['Sidecar :',
				'LUT (Embedded or from Sidecar) is working now with Load / Save Sidecar buttons : it will store the state of the LUT (Disabled / Embedded / Sidecar) but not the data.',
				'Fixed Load Sidecar issue : if Gamma was "Blackmagic Design Custom", Gamma Controls were not loaded correctly'
			],
			'BRAW_Studio.prm (.bundle on Mac) has been renamed to BRAW_Studio_Importer.prm (.bundle on Mac) to not mix it up with our new BRAW_Studio.exe (.app on Mac)',
			'Fixed problem about Shift Correction in BRAW Studio Panel',
			'Fixed issue with Ctrl-Z in Source Settings : could give a weird behavior when sliders were changed and maintained.',
			'aescriptsLicensing update'

        ]
	},
	{
		version: '1.6.3',
		date: [2019,9,13],
		changes: [
			'You can now use the feature "Reconnect Full Resolution Media" on proxies, .braw footages are now displayed as known extension files',
			'New "Reset to BRAW Default" button below "Load Sidecar" button to set current RAW settings to their default values',
			'Fixed : Crashes with corrupted .BRAW on OSX (fixes in 1.6.2 were for Windows)',
			'Don\'t forget to ask us to participate in BRAW Studio for After Effects BETA !'
        ]
	},
	{
		version: '1.6.2',
		date: [2019,9,10],
		changes: [
			'Fixed : Crashes when corrupted BRAW are imported or looked at within the Media Browser, red errors message also removed',
			'Fixed : Memory leaks',
			'Fixed : In Trial mode, BRAW Studio was taking too much memory when too many clips were loaded',
			['Source Settings :',
				'Color Science dropdown list has been removed from GUI to make it simpler (It was disabled all the time before because only one choice was available : Color Science Version 4)',
				'Fixed : When loading sidecar, White Balance Preset was set to "Custom" even though values corresponded to "As Shot"'
			]
        ]
	},
	{
		version: '1.6.1',
		date: [2019,8,28],
		changes: [
			'Added a new pixel format for slight performance improvement on Windows',
			'Added 16 bpc pixel formats : for example you can now extract high quality TIFF out of your .BRAW!',
			['BRAW Studio Hidden Panel removed :',
				'Please use the usual GUI Panel (Top menu Window -> Extensions) to fix your NTSC timecodes and import your .braw metadata ! It\'s not done automatically (in background) anymore',
				'Fixed : Premiere Pro being slow when editing on timeline',
				'Fixed : Unable to "Undo" (CTRL+Z) last actions in some cases',
				'Fixed : When batch importing lots of .braw, the Hidden Panel was working too much and users could consider it as a crash',
				'No Shift issue if users don\'t want to correct timecodes (used to fix XML Export for DaVinci Resolve see https://www.autokroma.com/blog/Clip-Shifted-Issue-BRAW-Studio/ )'
			]
        ]
	},
	{
		version: '1.6.0',
		date: [2019,8,16],
		changes: [
			'BRAW API 1.4 from DaVinci Resolve 16 : Support for BMPCC6K, new Rec. 709 gamma\nDon\'t forget there\'s a new official desktop Blackmagic RAW Player for both Windows and Mac OSX !\nDownload on https://www.blackmagicdesign.com/support/',
			'If you experienced in/out points shifts with .braw clips, please follow our new article to fix it !\nhttps://www.autokroma.com/blog/Clip-Shifted-Issue-BRAW-Studio/',
			'Premiere Pro on Windows only : "Properties" of a .braw will now also show Metadata for the first frame (Aperture, Distance, Exposure, Focal, ND, Shutter, Timecode, White Balance etc.)',
			['Fixed :',
				'Crashes',
				'Panel : Reduced errors',
				'OSX Installer : Uninstall plugins checkboxes didn\'t work anymore and couldn\'t be selected alone',
				'Deleted some scripts in the downloaded .zip as they were wrongly flagged by Anti Viruses (falses positives)',
				'ACESctt gamma had custom gamma controls enabled',
				'License & Settings Popup : error message when clicking on "Open logs folder" fixed, can only open one popup at the same time now'
			]
        ]
	},
	{
		version: '1.5.3',
		date: [2019,8,6],
		changes: [
			'WARNING : DO NOT RELINK .braw files. Only "Relocate" them with the advanced UI and untick the "Align Timecode" checkbox\nIf you relocated / relinked .braw that have 23.98 / 29.97 fps you\'ll suffer from shifts in the in / out points of the clips on your timelines\nPlease contact us if this happened to you!',
			'Premiere Pro on OSX : Metadata (Click right on .braw -> Properties) available now',
			['Bug fixes :',
				'For Prefs size errors, please clean your plugin cache (press SHIFT while launching Premiere Pro and click OK) !',
				'Edge case crashes',
				'Loading .sidecar with LUT',
				'Existing projects with merged clip in previous versions had problems when loading in 1.5.2',
				'Imported .braw will show grey now instead of Trial image, because BRAW Studio for After Effects is not available yet'
			],
			'Panel : After relocating a media, timecode is immediately corrected in CC 2019, don\'t forget to press the button for CC 2017 and 2018'
        ]
	},
	{
		version: '1.5.2',
		date: [2019,7,25],
		changes: [
			'New Uninstall checkbox in the installers to easily uninstall BRAW Studio plugins and panels',
			'Fixes in the rendering engine, less crashes',
			['New Feature : LUT in BRAW Studio',
				'As in DaVinci Resolve, there is now a checkbox "Apply LUT" and a dropdown list to choose the LUT Origin (Embedded or Sidecar)',
				'Embedded LUT is the one which was saved from inside the camera when shot',
				'Sidecar LUT is the one in the sidecar file next to the braw file. Sidecar LUT is loaded when PPro starts or when the clip is imported',
				'The "Save Sidecar" and "Load Sidecar" buttons in Clip Mode are not concerned : LUT will not be saved in Sidecar and not loaded with these buttons',
				'These new parameters are invisible if no Embedded or Sidecar LUT are available, only one choice in the dropdown if only one of them is available'
			],
			['Panel :',
				'New Metadata : BR Timecode = the good starting timecode of the braw file. Useful to check if the one in PPRo is correct',
				'Fixed : After relinking a media, the timecode was wrong again',
				'Fixed : "getFilenameFromFilepath" error message'
			],
			'OSX License input : pressing COMMAND key will now automatically paste the license because COMMAND+V is not working',
			'Windows : IE won\'t launch anymore when using the popup offline'
        ]
	},
	{
		version: '1.5.1',
		date: [2019,7,22],
		changes: [
			'Fixes in the rendering engine : for example black frames issue when scaling down is fixed',
			'500 frames trial image will be shown less often',
			'A message will be displayed now if the plugin detects a problem in the installation process (duplicated plugin or files missing)',
			'Fixed : When loading sidecar, sometimes the White Balance Preset was wrongly set to custom  ',
			'Reduced BRAW Studio Panel error messages'
        ]
	},
	{
		version: '1.5.0',
		date: [2019,6,27],
		changes: [
			'Fixed ISO GUI problem : was switching to default value in some cases when was opened from an existing project',
			'New "User Guide" tab on top, showing Autokroma.com information to help you using BRAW Studio !',
			'New popup will automatically warn you about new versions available',
			'OSX : fixed multiple screens bug',
			'OSX : fixed 5 seconds lags when exiting popup'
        ]
	},
	{
		version: '1.4.3',
		date: [2019,6,18],
		changes: [
			'OSX : BRAW API updated to 1.3 (URSA Mini Pro G2 support, bug fixes)',
			'OSX : BRAW Studio Panels copied useless files to the "/Library/Application Support/Adobe/CEP/extensions/" folder. New installer won\'t copy them anymore, and will delete them if created by a previous installer'
        ]
	},
	{
		version: '1.4.2',
		date: [2019,6,11],
		changes: [
			'OSX PPro CC 2017 Source Settings were not appearing fixed'
        ]
	},
	{
		version: '1.4.1',
		date: [2019,6,10],
		changes: [
			'Licensing bug fixes and new "Paste Clipboard" button useful on OSX where COMMAND+V for Pasting the license doesn\'t work',
			'OSX : when using multiple screens Settings popup would disappear, now it is shown on the primary screen'
        ]
	},
	{
		version: '1.4.0',
		date: [2019,6,7],
		changes: [
			'BRAW Studio available on OSX (after Sierra 10.12) !',
			'You can now buy BRAW Studio licenses on https://www.autokroma.com ! This version is the first one compatible',
			'New popups : blue confirmation popup for Sidecar update success and BRAW Studio Panel import success (metadata / NTSC timecode fix), red popup for corrupted frames',
			['Bugs fixed :',
				'Copying Source Settings from one clip to another lead to some unwanted red popup',
				'"Run Script - Uncaught Error" when BRAW files were moved between 2 PPro sessions and needed new localization'
			],
			['BRAW Studio Panels (Metadata / NTSC Timecode) bugs fixed :',
				'"Stack Overrun" error when a lot of files were processed at the same time',
				'Now working with files located on folder without writing permission',
				'BRAW footages inside PPro project Bins were not processed',
				'Avoid some unwanted error popups',
				'New scripts in Manual Installation folder to help you when standard installation of panels didn\'t work'
			]
        ]
	},
	{
		version: '1.3.1',
		date: [2019,4,22],
		changes: [
			'Some plugins weren\'t working with BRAW Studio (NeatVideo Second Revision for example), fixed now',
			'Displaying dark grey frames for corrupted frames',
			'New Visible BRAW Studio Panel (CEP Extension) compatible with CC 2017 / 2018 : please click the button inside the panel (for metadata and timecodes) if not already done, it will use and delete temporary .braw.studio files',
			['Bug fixes :',
				'Copy / Paste Source Settings from one clip to another is working now (but not save / apply preset !)',
				'Avoid freezes when loading a .BRAW File with a LUT inside',
				'When an error was happening, some wrong messages were sent to the user'
			],
			'Improvements in installation process for plugin and Panel',
			'BRAW Studio manual updated, please don\'t forget to read it !'
        ]
	},
	{
		version: '1.3.0',
		date: [2019,4,8],
		changes: [
			'BRAW API 1.3 (Blackmagic Design URSA Mini Pro G2 support)',
			['New BRAW Studio Panel, compatible only with PPro CC 2019 :',
				'Automatically imports BRAW metadata : Camera Name, Scene, Take etc. automatically added to imported clips. You need to change Project panel columns display to see all of them',
				'"Media Start" Timecode for NTSC Framerates fixed (=> now you can export to FCP XML and reimport it into DaVinci Resolve without issues) '
			],
			['Bug fixes :',
				'Some frames were doubled and some missing',
				'When audio track was shorter than video track (slow motion footage)'
			],
			'New "BRAW Studio Readme.pdf" with more details about installing BRAW Studio, licensing, settings, accessing the Source Settings and information about the new Panel',
			['License and Settings :',
				'New button at the top of the Source Settings to access them (more visible than the little top right icon)',
				'When clicking on "Open Log Folder" it will create automatically a .zip to send us'
			]
        ]
	},
	{
		version: '1.2.1',
		date: [2019,3,21],
		changes: [
			'Importing BRAW files from a network location bug fixed',
			'"Merge Clip" feature : merged BRAW clips source settings are working now but without sidecar save/load',
			'BRAW Studio Settings popup can be launched when importing .braw into Adobe Media Encoder by right-clicking and selecting "Source Settings"',
			'Logs can now be written without launching in Administrator Mode',
			'Plugin more stable overall, fixed some crashes'
        ]
	},
	{
		version: '1.2.0',
		date: [2019,3,6],
		changes: [
			['Updating BRAW SDK to 1.2 :',
				'Analog gain restricts ISOs you can choose',
				'BRAW Studio can now load braw files shot from Blackmagic Design Pocket Cinema Camera 4K',
				'New Color Spaces (Gamuts) : ACES AP0 and ACES AP1',
				'New Gamma : ACEScct'
			],
			'BRAW Studio available on Adobe Media Encoder with a dedicated license, beginning with "AUKBRME". Licensing will be done through PPro BRAW Studio Settings popup (see video tutorial)',
			'UI freezes bug fix',
			'Bug Fixed : When .braw with international characters in filename was loaded, the created sidecar had a wrong filename',
			'You can license AfterCodecs in BRAW Studio and vice-versa' 
        ]
	},
	{
		version: '1.1.0',
		date: [2019,2,19],
		changes: [
			['BRAW Studio updated to Blackmagic BRAW API version 1.1 (from DaVinci Resolve 15.2)',
				'New Color Spaces (Gamut) : Rec.709, Rec.2020, DCI-P3 D65, DCI-P3 Theater, CIE 1931 XYZ D65, CIE 1931 XYZ D50 PCS',
				'New Gammas (Linear, Rec.2100 Hybrid Log Gamma, Rec.2100 ST2084 PQ)',
				'Hilight Recovery mode',
				'White Level & Black Level sliders in Gamma Controls',
				'ISO 3200 available now',
				'Some footage were impossible to open : now fixed'
			],
			'Plugin more stable overall',
			'Better logs files for debugging',
			'Footage without audio won\'t display a popup error anymore'
        ]
	},
	{
		version: '1.0.0',
		date: [2019,1,29],
		changes: [
			'First official version after January 13 BETA',
			'For Premiere Pro / Windows as of now',
			'Wrong colors with "Decode Using Camera Metadata" bug fix',
			'Media Browser import crash bug fix'
		]
	}
];
