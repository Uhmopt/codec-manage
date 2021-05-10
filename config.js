const BRAW_Studio_Version = "2.4.1";
const Older_BRAW_Studio_Version = "1.9.4";

const AfterCodecs_Version = "1.10.3";
const Older_AfterCodecs_Version = "1.7.5"; // not used yet

const PlumePack_Version = "1.1.1";

const DowloadFolder = "https://dl.autokroma.com/";
const Windows_Suffix = "_Windows_Installer.zip";
const MacOS_Suffix = "_MacOS_Installer.zip";

const Windows_Suffix_Manual = "_Windows_Manual_Install.zip";
const MacOS_Suffix_Manual = "_MacOS_Manual_Install.zip";

const AfterCodecsPrefix = DowloadFolder + "AfterCodecs/AfterCodecs_v" + AfterCodecs_Version;
const BRAWStudioPrefix = DowloadFolder + "BRAW_Studio/BRAW_Studio_v" + BRAW_Studio_Version;
const PlumePackPrefix = DowloadFolder + "PlumePack/PlumePack_v" + PlumePack_Version;

const AfterCodecsPrefix_old =
  DowloadFolder + "AfterCodecs_v" + Older_AfterCodecs_Version;
const BRAWStudioPrefix_old =
  DowloadFolder + "BRAW_Studio_v" + Older_BRAW_Studio_Version;

const config = {
  author: "Antoine D", // useless ?
  sitename: "Autokroma.com",
  siteDescription:
    "Developing AfterCodecs (Fast Codecs Exporter), BRAW Studio (Blackmagic RAW Native Importer) and PlumePack (Project Manager with tons of workflow features) plugins and panels for Adobe CC Video softwares (After Effects, Premiere Pro and Media Encoder)",
  defaultPageTitle:
    "Autokroma Plugins and Panels for Adobe After Effects, Premiere Pro and Media Encoder",
  homepageTitle:
    "AfterCodecs, BRAW Studio and PlumePack : Autokroma Plugins and Panels for Adobe After Effects, Premiere Pro and Media Encoder",

  defaultOgImage: require("assets/images/_AC/AC_product_background.jpg"),
  showNewsFeedOnMainPage: false,
  enablePlumePack: true,

  separateCart: false,

  numberOfBlogpostToShowOnMainPage: 10,
  numberOfBlogpostsOnPage: 10,

  googleAnalytics: "UA-110078783-1",

  // TAG NAME: Title postfix. It will be added to the end of the title => Article Name | Title Postfix
  blogTitlePostfixes: {
    defaultBlogPostfix:
      "Autokroma Plugins for Adobe After Effects, Premiere Pro and Media Encoder (AfterCodecs, BRAW Studio and PlumePack)",

    AfterCodecs:
      "AfterCodecs Fast Exporter for Adobe CC (After Effects, Premiere Pro and Media Encoder)",
    "BRAW Studio":
      "BRAW Studio Blackmagic RAW Importer for Adobe CC (After Effects, Premiere Pro and Media Encoder)",
    PlumePack:
      "PlumePack is a new Premiere Pro Panel to minimize your projects & media weight as well as maximize your workflow options with tons of bonus features ! Archive, Transfer, Organize and more"
  },

  keywordsForSeo:
    "blackmagicdesign,camera,bmpcc4k,bmpcc6k,ursa,braw,blackmagic,braw studio,studio,raw,.braw,aftercodecs,codecs,after,effects,after effects,ae,cc,adobe,prores,prores windows,h264,h265,x265,x265,hap,codec,plugin,crack,after codec,after codecs,plume,plumepack,pack,plume pack,project manager,manager,consolidate,trim,trimming",
 
  showSearchPage: true,
  enableLicensePage: true,
  //storeLink: "https://autokroma.onfastspring.com/",

  brawStudioChangelogVersion: "2.4.1",
  afterCodecsChangelogVersion: "1.10.3",
  plumePackChangelogVersion: "1.1.1",

  afterCodecsLinkForMacOs: AfterCodecsPrefix + MacOS_Suffix,
  afterCodecsLinkForWindows: AfterCodecsPrefix + Windows_Suffix,

  brawStudioLinkForMacOs: BRAWStudioPrefix + MacOS_Suffix,
  brawStudioLinkForWindows: BRAWStudioPrefix + Windows_Suffix,

  afterCodecsLinkForMacOs_old: AfterCodecsPrefix_old + MacOS_Suffix,
  afterCodecsLinkForWindows_old: AfterCodecsPrefix_old + Windows_Suffix,

  afterCodecsLinkForWindows_Manual: AfterCodecsPrefix + Windows_Suffix_Manual,
  afterCodecsLinkForMacOs_Manual: AfterCodecsPrefix + MacOS_Suffix_Manual,

  brawStudioLinkForWindows_Manual: BRAWStudioPrefix + Windows_Suffix_Manual,
  brawStudioLinkForMacOs_Manual: BRAWStudioPrefix + MacOS_Suffix_Manual,

  brawStudioLinkForMacOs_old: BRAWStudioPrefix_old + MacOS_Suffix,
  brawStudioLinkForWindows_old: BRAWStudioPrefix_old + Windows_Suffix,

  plumePackLinkForMacOs: PlumePackPrefix + MacOS_Suffix, 
  plumePackLinkForWindows: PlumePackPrefix + Windows_Suffix,

  plumePackLinkForMacOs_Manual: PlumePackPrefix + MacOS_Suffix_Manual,
  plumePackLinkForWindows_Manual: PlumePackPrefix + Windows_Suffix_Manual,

  AfterCodecsScreenshots: [
    {
      image: require("assets/images/_AC/Screenshots/Screenshot_Mac_OSX_00000_AfterCodecs_After_Effects.jpg"),
      title:
        "AfterCodecs for Adobe After Effects on Mac OSX (Fast exporter plugin screenshot)"
    },
    {
      image: require("assets/images/_AC/Screenshots/Screenshot_Mac_OSX_00001_AfterCodecs_Premiere_Pro.jpg"),
      title:
        "AfterCodecs for Adobe Premiere Pro and Adobe Media Encoder on Mac OSX (Fast exporter plugin screenshot)"
    },
    {
      image: require("assets/images/_AC/Screenshots/Screenshot_Mac_OSX_00002_AfterCodecs_Premiere_Pro.jpg"),
      title:
        "AfterCodecs for Adobe Premiere Pro and Adobe Media Encoder on Mac OSX (Fast exporter plugin screenshot)"
    },
    {
      image: require("assets/images/_AC/Screenshots/Screenshot_Windows_00000_AfterCodecs_After_Effects.jpg"),
      title:
        "AfterCodecs for Adobe After Effects on Microsoft Windows (Fast exporter plugin screenshot)"
    },
    {
      image: require("assets/images/_AC/Screenshots/Screenshot_Windows_00001_AfterCodecs_After_Effects.jpg"),
      title:
        "AfterCodecs for Adobe After Effects on Microsoft Windows (Fast exporter plugin screenshot)"
    },
    {
      image: require("assets/images/_AC/Screenshots/Screenshot_Windows_00002_AfterCodecs_After_Effects.jpg"),
      title:
        "AfterCodecs for Adobe After Effects on Microsoft Windows (Fast exporter plugin screenshot)"
    },
    {
      image: require("assets/images/_AC/Screenshots/Screenshot_Windows_00003_AfterCodecs_Premiere_Pro_Media_Encoder_Audio.jpg"),
      title:
        "Audio output options and layout (tracks you can export) in AfterCodecs for Adobe Premiere Pro and Adobe Media Encoder on Microsoft Windows (Fast exporter plugin screenshot)"
    },
    {
      image: require("assets/images/_AC/Screenshots/Screenshot_Windows_00004_AfterCodecs_Premiere_Pro_Media_Encoder.jpg"),
      title:
        "AfterCodecs for Adobe Premiere Pro and Adobe Media Encoder on Microsoft Windows (Fast exporter plugin screenshot)"
    },
    {
      image: require("assets/images/_AC/Screenshots/Screenshot_Windows_00005_AfterCodecs_Premiere_Pro_Media_Encoder.jpg"),
      title:
        "AfterCodecs for Adobe Premiere Pro and Adobe Media Encoder on Microsoft Windows (Fast exporter plugin screenshot)"
    },
    {
      image: require("assets/images/_AC/Screenshots/Screenshot_Windows_00006_AfterCodecs_Premiere_Pro_Media_Encoder.jpg"),
      title:
        "AfterCodecs for Adobe Premiere Pro and Adobe Media Encoder on Microsoft Windows (Fast exporter plugin screenshot)"
    }
  ],

  BRAWStudioScreenshots: [
    {
      image: require("assets/images/_BR/Screenshots/Screenshot_Windows_00010_BRAW_Studio_V2_Source_Settings_Panel_Premiere_Pro.jpg"),
      title:
        "BRAW Studio V2 for Adobe Premiere Pro on Microsoft Windows (Blackmagic RAW importer plugin screenshot) showing the Source Settings Panel"
    },
    {
      image: require("assets/images/_BR/Screenshots/Screenshot_Mac_OSX_00003_BRAW_Studio_After_Effects.jpg"),
      title:
        "BRAW Studio for Adobe After Effects on Mac OSX (Blackmagic RAW importer plugin screenshot)"
    },
    {
      image: require("assets/images/_BR/Screenshots/Screenshot_Mac_OSX_00004_BRAW_Studio_After_Effects.jpg"),
      title:
        "BRAW Studio for Adobe After Effects on Mac OSX (Blackmagic RAW importer plugin screenshot)"
    },
    {
      image: require("assets/images/_BR/Screenshots/Screenshot_Mac_OSX_00005_BRAW_Studio_Media_Encoder.jpg"),
      title:
        "BRAW Studio for Adobe Premiere Pro and Adobe Media Encoder on Mac OSX (Blackmagic RAW importer plugin screenshot)"
    },
    {
      image: require("assets/images/_BR/Screenshots/Screenshot_Mac_OSX_00006_BRAW_Studio_Media_Encoder.jpg"),
      title:
        "BRAW Studio for Adobe Premiere Pro and Adobe Media Encoder on Mac OSX (Blackmagic RAW importer plugin screenshot)"
    },
    {
      image: require("assets/images/_BR/Screenshots/Screenshot_Windows_00007_BRAW_Studio_After_Effects.jpg"),
      title:
        "BRAW Studio for Adobe After Effects on Microsoft Windows (Blackmagic RAW importer plugin screenshot)"
    },
    {
      image: require("assets/images/_BR/Screenshots/Screenshot_Windows_00008_BRAW_Studio_After_Effects.jpg"),
      title:
        "BRAW Studio for Adobe After Effects on Microsoft Windows (Blackmagic RAW importer plugin screenshot)"
    },
    {
      image: require("assets/images/_BR/Screenshots/Screenshot_Windows_00009_BRAW_Studio_After_Effects.jpg"),
      title:
        "BRAW Studio for Adobe After Effects on Microsoft Windows (Blackmagic RAW importer plugin screenshot)"
    }
  ],

  PlumePackScreenshots: [
    {
      image: require("assets/images/_PP/PP_SharedImages/Autokroma_PlumePack_Premiere_Pro_Introduction_Image.jpg"),
      title:
        "PlumePack for Premiere Pro (Project Manager & Trim engine)"
    },
    {
      image: require("assets/images/_PP/PP_SharedImages/Autokroma_PlumePack_Premiere_Pro_Premium_Version.jpg"),
      title:
        "PlumePack panel for Premiere Pro (Project Manager & Trim engine)"
    },
    {
      image: require("assets/images/_PP/ScreenShots/Autokroma_PlumePack_Premiere_Pro_Analysis.jpg"),
      title:
        "PlumePack in Premiere Pro (Analysis result)"
    }
  ]
};

export { config };
