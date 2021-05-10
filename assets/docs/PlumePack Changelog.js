/* PlumePack Changelog */
module.exports = [
	{
		Title: 'PlumePack collects your PrPro projects & trim medias to make it lightweight: Trim, Archive, Organize and more!',
		ResourcesFolder: 'Source/Resources'
	},
    /*{
		nextBeta: true, // to delete if we're not in BETA
		version: '1.0.0',
		date: [2020,12,7],
		changes: [
			['multiple lines :',
                'first',
                'second',
			],
			'one line'
        ]
	},*/
    {
		version: '1.1.1',
		date: [2021,04,29],
		changes: [
            ['Fixed : PlumePack had an error when Preview Files were missing.',
            ]
        ]
	},
    {
		version: '1.1.0',
		date: [2021,04,16],
		changes: [
            ['New Codecs supported for Trimming :',
                'Image Sequence (.PNG, .JPG, .TIFF etc.)',
                '.DNG CinemaDNG Image Sequence with .WAV sound',
				'Files with closed captions if "Drop Metadata Stream" user option is enabled. The closed captions will be lost but the file will be trimmed. Contact us if you need to keep them in the trimmed files.',
                'The following are only added in Beta for now, you will need to enable the new Beta user option to test then. Please send us your feedback !',
                '[.MOV, .MP4, .MXF] H.264 AVC',
                '[.MOV, .MP4, .MXF] H.265 HEVC',
				'[.MOV] Apple QuickTime Animation RLE',
				'[.MOV] XDCAM',
            ],
            ['New Features :',
                'User option for Beta test : to be able to test trimming on new codecs !',
                'User option : "Trim InPoint when rounding issues on clip". This issue only happen when your media framerate is different than the sequence framerate : some frames (not all) could be shifted to the next or previous one. You can disable this option to get the exact same frames before and after. More information in the Panel documentation tab.',
                'Premiere Pro support extended, now compatible from v14.0 (first version of 2020)',
                'Target .prproj folder is automatically opened in Windows Explorer / macOS Finder when PlumePack is finished',
				'User options preferences are now saved from one session to another and you can reset the option to their default values with a new button'
            ],
			['Improvements :',
				'Global stability',
                'Project Analysis is much faster and has an improved design',
                'An error on one file has less chance to stop the whole process',
				'There are now quick tooltips to understand what each option does',
                'Offline files not found on disk are now mentionned in the Analysis details and report',
				'UI final feedback improved',
                'Updated to BRAW SDK version 2.1.beta4, supporting new .BRAW files from latest BMD Cameras and Video Assist',
                '.BRAW2 Dual Card files are now copied along the source .BRAW file (like for RED .R3D files)'
			],
            ['Fixed : ',
                'Some projects were stucked during Analysis, and the project is not saved multiple times per sequence anymore',
                'PlumePack was not working on some projects with MultiCam Clips or MultiChannel Audio tracks',
                'Some files could be not trimmed because of Audio AAC',
                'Do not show MultiCam clip in sequence dropdown list',
                '.R3D footage with multiple files was failing while relinking',
				'.DNG with .WAV sound were impossible to copy',
				'Logs created on big projects failed to be created'
            ],
			
        ]
	},
    {
		version: '1.0.2',
		date: [2021,03,08],
		changes: [
            'Bug fixed : when using PlumePack in TRIAL mode, the Analysis was not showing the trimming capabilities (always 0 media to trim)'
        ]
	},
    {
		version: '1.0.1',
		date: [2021,03,01],
		changes: [
            ['Bugs fixed : ',
				'Fixed : previous 1.0.0 was not working since 1st March due to the old Beta time limitation code',
				'Fixed : Audio .WAV Trimming',
                'Fixed : Panel error when starting Premiere Pro with PlumePack immediately displayed (restarting the Panel was needed)'
            ]
        ]
	},
	{
		version: '1.0.0',
		date: [2021,02,16],
		changes: [
            'First Release of PlumePack for Windows and Mac - Adobe Premiere Pro from 14.4',
            ['Trimming of your media files (PlumePack Premium license) :',
                'Removing unused frames in the current project and replacing the project Items, keeping the original codec and quality for the used frames',
                'Auto Trim Control : check for any lost metadata or important properties',
                'Supports Premiere Pro Transitions',
                'User Option : Disable Trim and copy files instead',
                'User Option : Handle to add more frames (from 0 to 1000) at the bounds of the trimmed footages, before the in point and after the out point, just in case you need to slightly re edit afterwards',
                'User Option : for video footage with compressed audio, trim video and re-encode the audio stream',
                'User Option : for video footage with unknown Metadata streams (like GPS coordinates in GoPro), trim video anyway and drop the metadata stream'
            ],
            ['Container / Codecs available for Trimming',
                '[.MOV] Apple ProRes (XQ, 4444, HQ, Normal, LT, Proxy) with and without Alpha',
                '[.MOV] Apple ProRes RAW',
                '[.BRAW] Blackmagic RAW',
                '[.R3D] RED R3D',
                '[.MOV] Cineform',
                '[.MOV] DNxHD',
                '[.MOV] Vidvox HAP',
                '[.WAV] Linear PCM (Uncompressed)',
                'Want more? Contact us!',
            ],
            ['Clean your project : ',
                'User Option : Remove any unused Project Item',
                'User Option : Choose a sequence and Copy/Trim from it (removing anything which is not in this sequence OR in the nested subsequences of this choosen sequence)'
            ],
            'Trimmed / Copied media will be organized in the final folder following Premiere Pro Project Panel bins structure',
            'Full report generated at the end of the PlumePack Process',
            'You can first analyze your project and check in details what PlumePack will do for the full process'
        ]
	}
];
