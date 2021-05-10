import FeaturesCard, { FeaturesList, FeaturesListItem, FeaturesCardWrapper } from "../../ProductPage/FeaturesCard";
import DottedList, { ListItem } from "../../ProductPage/DottedList";
import { H2 } from "../../Heading";
import { Flex, Box } from "rebass";
import Link from "../../Link";
import { ExternalLinkIcon } from '../../ExternalLinkIcon'

export const Features = props => (
  <>
    {props.overview ? (
        <Flex alignItems="center" justifyContent="center">
          <H2 centered underline={props.mainColor}>
            Main Features
          </H2>
          <Box
            as="a"
            ml={2}
            href={`/BRAW_Studio/Main_Features`}
          >
            <ExternalLinkIcon />
          </Box>
        </Flex>
      ) : (
        <Flex alignItems="center" justifyContent="center" flexDirection="column" mt={4}>
          {!props.generateForAescripts && <Link href="/BRAW_Studio">Go Back to BRAW Studio</Link>}
          <H2 centered underline={props.mainColor}>
            Main Features
          </H2>
        </Flex>
      )
    }

    <FeaturesCardWrapper>
      <FeaturesCard bgImage={props.assetPrefix + "/static/images/_BR/puzzle.png"}>
        <FeaturesCard.Title>
          The missing piece in your Blackmagic workflow
        </FeaturesCard.Title>
        <FeaturesList color={props.mainColor}>
          <FeaturesListItem>Adobe Premiere Pro : import and edit your <code>.BRAW</code> footages directly and natively with BRAW Studio !<br /><strong>BRAW Studio Panel will also help your daily workflow with awesome features such as : Source Settings Panel, Sequence .XML Export, Timecode correction</strong> etc.</FeaturesListItem>
          <FeaturesListItem>Adobe Media Encoder : re-encode and create proxies for your <code>.BRAW</code></FeaturesListItem>
          <FeaturesListItem>Adobe After Effects : import your <code>.BRAW</code> and modify / experience the color grading in real time with our BRAW Studio Layer Settings filter, directly within AEfx interface</FeaturesListItem>
        </FeaturesList>
      </FeaturesCard>
      <FeaturesCard bgImage={props.assetPrefix + "/static/images/_BR/compression.png"}>
        <FeaturesCard.Title>Fully featured</FeaturesCard.Title>
        <FeaturesList
          color={props.mainColor}
        >
          <FeaturesListItem>Brand new Source Settings Panel to modify your RAW params in a docked panel, compatible with batch operations on your selection of <code>.BRAW</code> clips !</FeaturesListItem>
          <FeaturesListItem><strong>Custom A/B to quickly</strong> compare your different RAW Parameters set</FeaturesListItem>
          <FeaturesListItem><strong>20 Global Presets</strong> to store your RAW Params across Projects and Premiere Pro / After Effects</FeaturesListItem>
          <FeaturesListItem>Access the same RAW color parameters from DaVinci Resolve and Load / Save them thanks to <code>.sidecar</code> files. Using the official BMD Color Science and BMD BRAW SDK</FeaturesListItem>
        </FeaturesList>
      </FeaturesCard>
      <FeaturesCard bgImage={props.assetPrefix + "/static/images/_BR/update.png"}>
        <FeaturesCard.Title>Constantly updated</FeaturesCard.Title>
        <FeaturesCard.Body>
          BRAW Studio is constantly updated with Blackmagic latest features :
          new cameras supported (Blackmagic Pocket Cinema Camera 4K and 6K, URSA Mini
          Pro G2), new RAW params added (color spaces, gammas, highlight
          recovery, embedded LUT), bug fixes, new features etc. <br />Our latest update includes a brand new Source Settings Panel, try it out !<br />
          <br />
          All updates for
          the same versionare free : <Link href="/BRAW_Studio/Download/#Changelog">see our Changelog</Link>. You can{" "}
          update the <Link href="/BRAW_Studio/Download/">same way you installed BRAW Studio</Link>.
          <br />
          <br />
          <span style={{ color: '#c00'}}>Note : BRAW Studio doesn't import <code>.dng</code> files</span>
        </FeaturesCard.Body>
      </FeaturesCard>
    </FeaturesCardWrapper>
  </>
);

export const ProductDescription = props => (
  <p><br />
    BRAW Studio is comprised of three installed plugins, adding a new <code>.braw</code> format to be imported to Adobe CC (Premiere Pro, Media Encoder and After Effects). In
    Premiere Pro, you can access the Blackmagic RAW params in our brand new BRAW Studio Source Settings Panel. This Panel also provides useful utility and workflow features, for example correcting NTSC timecodes and importing your
    footages metadata (Panel UI is available in Window top menu {"->"} Extensions). On After Effects you will be able to use the BRAW Studio Layer Settings effect.<br />
  </p>
);

export const Requirements = props => (
  <DottedList
    halfWidth={props.overview}
    title="Requirements"
    color={props.mainColor}
    withTitleUrl={props.overview ? '/BRAW_Studio/Requirements' : ''}
  >
    <ListItem><strong>One license is for the same user on up to two computers not used at the same time</strong></ListItem>
    <ListItem>MacOS Intel : 10.14 (Mojave) to 11 (Big Sur). On Apple Silicon (ARM) for now you can use it through Rosetta 2 automatically</ListItem> 
    <ListItem>Microsoft Windows : version 7 / 8.1 / 10</ListItem>
    <ListItem>Adobe CC 2017 to 2020 included</ListItem>
    <ListItem>CPU : at least SSE4.1 instructions set. Most CPUs before 2008 are not compatible (e.g. AMD Phenom II. AMD Phenom II X6 is not compatible !). Compatibility with Intel starts with Core 2 Penryn architecture in 2008.This is a limitation of the BRAW API</ListItem>
  </DottedList>
);

export const KnownBugs = props => (
  <DottedList
    halfWidth={props.overview}
    title="Known bugs"
    color={props.mainColor}
    withTitleUrl={props.overview ? '/BRAW_Studio/Known_bugs' : ''}
  >
    <ListItem><strong>Adobe timecode bug</strong> : Media Start timecode for NTSC footage of 29.97fps is wrong (23.97fps footages also for old Premiere Pro versions before 14.3). This also means you can't export Final Cut Pro XML and import the timeline into DaVinci Resolve properly. <Link href="/blog/BRAW-Wrong-Timecode-Adobe-Premiere-Pro/">Please follow our article to solve this issue</Link>. Please note that this is an Adobe bug you will also experience this with the Blackmagic plugin</ListItem>
    <ListItem>If you need to use <code>Replace Clip</code> feature in Premiere Pro to change one of your source by another, there could be conflicts afterward with the Source Settings (the ISO List could be wrong and the sidecar file will stay to its old path). However, after using <code>Replace Clip</code>, you can save your project, close and restart Premiere Pro and everything will be fine</ListItem>
    <ListItem>Do not save/apply preset on the Source Settings, <Link href={"/blog/Introduction-to-BRAW-Studio/"}>please read our article about alternative methods</Link></ListItem>
    <ListItem>When updating BRAW Studio, new available choices in BRAW Settings dropdowns (Gamut, Gamma, ..) could be impossible to select for existing projects. Please re-import the footages to make it work. (Note : only when updating from BRAW Studio before 2.2.3 : fixed from this version)</ListItem>
    <ListItem><Link href={"/blog/Blackmagic-RAW-1.7-Bug-Thumbnails-File-Access-Issues/"}>Blackmagic RAW SDK 1.7 Windows bug, please read our article here</Link></ListItem>
  </DottedList>
);

export const TechnicalSpecs = props => (
  <>
    <H2 centered underline={props.mainColor}>
      Technical Specifications
    </H2>

    <ProductDescription {...props} />
    <Flex flexDirection={["column", "row"]}>
      <Requirements {...props} />
      <KnownBugs {...props} />
    </Flex>
  </>
);

const Overview = props => (
  <>
    <Features
      generateForAescripts={props.generateForAescripts}
      mainColor={props.mainColor}
      assetPrefix={props.generateForAescripts ? "https://www.autokroma.com" : ""}
    />
    {props.children}
    <TechnicalSpecs mainColor={props.mainColor} generateForAescripts={props.generateForAescripts}/>
  </>
);

export default Overview;
