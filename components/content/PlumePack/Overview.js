import FeaturesCard, { FeaturesList, FeaturesListItem, FeaturesCardWrapper } from "../../ProductPage/FeaturesCard";
import DottedList, { ListItem } from "../../ProductPage/DottedList";
import { H2 } from "../../Heading";
import { Flex, Box } from "rebass";
import Link from "../../Link";
import { ExternalLinkIcon } from '../../ExternalLinkIcon';

export const Features = props => (
  <>
    {props.overview ? (
        <>
          <Flex alignItems="center" justifyContent="center">
            <H2 centered underline={props.mainColor}>
              Main Features
            </H2>
            <Box
              as="a"
              ml={2}
              href={`/PlumePack/Main_Features`}
            >
              <ExternalLinkIcon />
            </Box>
          </Flex>
        </>
      ) : (
        <Flex alignItems="center" justifyContent="center" flexDirection="column" mt={4}>
          {!props.generateForAescripts && <Link href="/PlumePack">Go Back to PlumePack</Link>}
          <H2 centered underline={props.mainColor}>
            Main Features
          </H2>
        </Flex>
      )
    }

    <FeaturesCardWrapper>
      <FeaturesCard bgImage={props.assetPrefix + "/static/images/_PP/puzzle.png"}>
        <FeaturesCard.Title>Collect &#38; Copy</FeaturesCard.Title>
        <FeaturesList color={props.mainColor}>
          <FeaturesListItem><b>Get rid of the bugs</b> from the native PrPro Project Manager !</FeaturesListItem>
          <FeaturesListItem><b>Organize</b> final folder structure from Premiere Pro bins structure and remove unused items</FeaturesListItem>
          <FeaturesListItem>Select only <b>one sequence to consolidate</b>. Nested subsequences will be kept !</FeaturesListItem>
        </FeaturesList>
      </FeaturesCard>
      <FeaturesCard bgImage={props.assetPrefix + "/static/images/_PP/compression.png"}>
        <FeaturesCard.Title>Lossless Trim (Premium)</FeaturesCard.Title>
        <FeaturesList color={props.mainColor}>
          <FeaturesListItem>Supports <b>ProRes, .BRAW</b>, .R3D, Image Sequences and also compressed <b>H.264</b> and H.265 (HEVC) !</FeaturesListItem>
          <FeaturesListItem>Trim files based by <b>removing unused frames</b> according to your edits, with a handle option for flexible re-editing</FeaturesListItem>
          <FeaturesListItem>No re-encoding : keep the same codec &amp; exact quality than your source !</FeaturesListItem>
        </FeaturesList>
      </FeaturesCard>
      <FeaturesCard bgImage={props.assetPrefix + "/static/images/_PP/update.png"}>
        <FeaturesCard.Title>Improve your workflow</FeaturesCard.Title>
        <FeaturesList color={props.mainColor}>
          <FeaturesListItem>Your PrPro projects will be <b>faster to transfer</b> to your colleagues and clients</FeaturesListItem>
          <FeaturesListItem><b>Save disk space</b> when backuping and archiving your projects</FeaturesListItem>
          <FeaturesListItem>Clean your project and keep your media organized</FeaturesListItem>
        </FeaturesList>
      </FeaturesCard>
    </FeaturesCardWrapper>
  </>
);

export const Requirements = props => (
  <DottedList
    title="Requirements:"
    color={props.mainColor}
    withTitleUrl={props.overview ? '/PlumePack/Requirements' : ''}
  >
    <ListItem><b>One license is for the same user on up to two computers</b></ListItem>
    <ListItem>Adobe Premiere Pro 2020 - version &ge; 14.0</ListItem>
    <ListItem>Microsoft Windows 10</ListItem>
    <ListItem>MacOS : 10.15 (Catalina) / 10.16 (Big Sur). On Apple Silicon (ARM) for now you can use it through Rosetta 2 automatically</ListItem>
  </DottedList>
)

export const CodecsAndContainers = (props) => (
  <>
    <DottedList
      halfWidth={props.overview}
      title="Trim Codecs :"
      color={props.mainColor}
      withTitleUrl={props.overview ? '/PlumePack/Codecs_containers' : ''}
    >
      <ListItem><b>[.MOV, .MP4, .MXF] H.264 / AVC and H.265 / HEVC</b> (in Beta)</ListItem>
      <ListItem><b>[.MOV, .MXF] Apple ProRes (XQ, 4444, HQ, Normal, LT, Proxy), ProRes RAW</b></ListItem>
      <ListItem><b>[.BRAW] Blackmagic RAW</b></ListItem>
      <ListItem><b>[.R3D] REDCODE R3D</b></ListItem>
      <ListItem><b>[.PNG, .JPG, .DNG, .DPX, .TIFF, .PSD etc.] Image Sequence</b></ListItem>
      <ListItem><b>[.MOV] Cineform</b></ListItem>
      <ListItem><b>[.MOV, .MXF] DNxHD / DNxHR</b></ListItem>
      <ListItem><b>[.MOV] Vidvox HAP</b></ListItem>
      <ListItem><b>[.MOV] Apple QuickTime Animation RLE</b> (in Beta)</ListItem>
      <ListItem><b>[.MOV, .MXF] MPEG-2 (XDCAM)</b> (in Beta)</ListItem>
      <ListItem><b>[.MOV] Motion JPEG</b> (in Beta)</ListItem>
      <ListItem>Want more? <Link href={"/contact"}>Contact us!</Link></ListItem>
    </DottedList>

  </>

);

export const SupportedItems = (props) => (
  <DottedList
    halfWidth={props.overview}
    title="Trimming :"
    color={props.mainColor}
    withTitleUrl={props.overview ? '/PlumePack/Supported_Items' : ''}
  >
    <ListItem>PlumePack will take into account the transitions and the different framerates of your media and sequences to trim</ListItem>
    <ListItem>MultiCam Clips are working, processed like Nested Sequences</ListItem>

    <ListItem>Plumepack cannot yet trim in the following cases (contact us if you need this) : 
      <DottedList
        color={props.mainColor}
      >
        <ListItem>Media Interpretation changed</ListItem>
        <ListItem>SubClips</ListItem>
        <ListItem>Merged Clips</ListItem>
        <ListItem>Time Remapping enabled, Speed changed, reversed clips</ListItem>
        <ListItem>Media used inside an After Effects Composition</ListItem>
      </DottedList>
    </ListItem>

    <ListItem>Proxies will not be trimmed, are detached automatically and won't be present in your final project</ListItem>

  </DottedList>
);

export const KnownLimitations = (props) => (
  
  <DottedList
    halfWidth={props.overview}
    title="Copy :"
    color={props.mainColor}
    withTitleUrl={props.overview ? '/PlumePack/Known_limitations' : ''}
  >
    <ListItem>Nested sequences are always taken into account, even when you select one sequence to process !</ListItem>
    <ListItem>Elements who are supported but you will need to relink them manually for now :
      <DottedList
        color={props.mainColor}
      >
        <ListItem>Merged Clips</ListItem>
        <ListItem>AEgraphics</ListItem>
        <ListItem>AE Dynamic link composition</ListItem>
        <ListItem>After Effects Composition, where dependencies are copied but not relinked into the AEfx copied project</ListItem>
        <ListItem>dependencies are copied but not relinked into AE copied project</ListItem>
      </DottedList>
    </ListItem>

    <ListItem>Video Previews (green timeline), audio conformed files, cache files are not copied and might need to be regenerated</ListItem>
    <ListItem>Proxies will not be copied, are detached automatically and won't be present in your final project</ListItem>

  </DottedList>
);

export const TechnicalSpecs = props => (
  <>
    <H2 centered underline={props.mainColor}>
      Technical Specifications
    </H2>

    <Requirements {...props} />
    <Flex flexDirection={["column", "row"]} mb={4}>
      <CodecsAndContainers {...props} />
      <SupportedItems {...props} />
      <KnownLimitations {...props} />
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
