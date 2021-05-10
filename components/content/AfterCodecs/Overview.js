import FeaturesCard, { FeaturesList, FeaturesListItem, FeaturesCardWrapper } from "../../ProductPage/FeaturesCard";
import DottedList, { ListItem } from "../../ProductPage/DottedList";
import { H3 } from "../../Heading";
import { Flex, Box } from "rebass";
import Link from "../../Link";
import { ExternalLinkIcon } from '../../ExternalLinkIcon';

export const Features = props => (
  <>
    {props.overview ? (
        <>
          <Flex alignItems="center" justifyContent="center" mt={4}>
            <H3 centered underline={props.mainColor}>
              Main Features
            </H3>
            <Box
              as="a"
              ml={2}
              href={`/AfterCodecs/Main_Features`}
            >
              <ExternalLinkIcon mt={-1} />
            </Box>
          </Flex>
        </>
      ) : (
        <Flex alignItems="center" justifyContent="center" flexDirection="column" mt={4}>
          {!props.generateForAescripts && <Link href="/AfterCodecs">Go Back to AfterCodecs</Link>}
          <H3 centered underline={props.mainColor} mt={4}>
            Main Features
          </H3>
        </Flex>
      )
    }

    <FeaturesCardWrapper>
      <FeaturesCard bgImage={props.assetPrefix + "/static/images/_AC/puzzle.png"}>
        <FeaturesCard.Title>Filling the codec gap</FeaturesCard.Title>
        <FeaturesCard.Body>
          AfterCodecs brings you with consistency all the codecs & features you need, without Quicktime and in <code>.MP4</code> and <code>.MOV</code>:
        </FeaturesCard.Body>
        <FeaturesList color={props.mainColor}>
          <FeaturesListItem>ProRes 422 / 4444 / XQ : yes even on Windows and older versions of Adobe. Included a new ProRes 4444 Light unofficial profile to get both Alpha channel and lower filesize</FeaturesListItem>
          <FeaturesListItem>All 4 HAP codecs from Vidvox but with faster algorithms and without resolution restrictions</FeaturesListItem>
          <FeaturesListItem>Special Premiere Pro & Media Encoder features : MultiRenders Markers, Export all Audio tracks separately, Quick sub resolutions buttons, Custom Framerate etc.</FeaturesListItem>
        </FeaturesList>
      </FeaturesCard>
      <FeaturesCard bgImage={props.assetPrefix + "/static/images/_AC/compression.png"}>
        <FeaturesCard.Title>H264 / H265 : the best and fastest compression</FeaturesCard.Title>
        <FeaturesList color={props.mainColor}>
          <FeaturesListItem>Choose the efficiency you need: fast encoding for your previews or low filesize for final delivery. Low bitrates videos are of better quality than before and you can render in 8K!</FeaturesListItem>
          <FeaturesListItem>A fast, easy-to-use (one param to select), YouTube Upload profile that respects YouTube upload recommendation</FeaturesListItem>
          <FeaturesListItem>Save time directly in After Effects render queue without having to use the command line and without using Adobe Media Encoder</FeaturesListItem>
          <FeaturesListItem>Advanced features : FileSize targetting, 10 bpc, Full Range, YUV 4:2:2 / 4:4:4, Tuning profiles etc.</FeaturesListItem>
        </FeaturesList>
      </FeaturesCard>
      <FeaturesCard bgImage={props.assetPrefix + "/static/images/_AC/update.png"}>
        <FeaturesCard.Title>Optimize your workflow !</FeaturesCard.Title>
        <FeaturesCard.Body>
          AfterCodecs is regularly updated with new codecs, features or speed
          improvements, see our{" "}
          <Link href={"/AfterCodecs/Changelog"}>Changelog</Link>. Our latest
          feature are {" "}
          <Link
            href={
              "/blog/Batch-Export-Clips-Quickly-Premiere-Pro-with-our-Panel/"
            }
          >
            MultiRender Markers to batch export in Premiere Pro
          </Link> and displaying a progressbar in your taskbar icon in After Effects when rendering !
        </FeaturesCard.Body>
        <FeaturesCard.Body>
          More information about each license and features :
        </FeaturesCard.Body>
        <FeaturesList mt={2} color={props.mainColor}>
          <FeaturesListItem><Link href={"/AfterCodecs/After_Effects"}>AfterCodecs for After Effects</Link></FeaturesListItem>

          <FeaturesListItem><Link href={"/AfterCodecs/Media_Encoder"}>AfterCodecs for Media Encoder</Link></FeaturesListItem>

          <FeaturesListItem><Link href={"/AfterCodecs/Premiere_Pro"}>AfterCodecs for Premiere Pro</Link></FeaturesListItem>
        </FeaturesList>
      </FeaturesCard>
    </FeaturesCardWrapper>
  </>
);

export const Requirements = (props) => (
  <DottedList title="Requirements:" color={props.mainColor} withTitleUrl={props.overview ? '/AfterCodecs/Requirements' : ''}>
    <ListItem><strong>One license is for the same user on up to two computers not used at the same time</strong></ListItem>
    <ListItem>MacOS Intel : 10.12 to 11 (Big Sur). On Apple Silicon (ARM) for now you can use it through Rosetta 2 automatically</ListItem>
    <ListItem>Microsoft Windows 10</ListItem>
    <ListItem>Adobe CC 2014 to 2020 included</ListItem>
  </DottedList>
);

export const CodecsAndContainers = (props) => (
  <DottedList
    halfWidth={props.overview}
    title="Codecs and containers:"
    color={props.mainColor}
    withTitleUrl={props.overview ? '/AfterCodecs/Codecs_containers' : ''}
  >
    <ListItem><b>[MOV] ProRes:</b> 6 official profiles (422 LT / Proxy / Normal / HQ / 4444 / XQ) and 2 unofficial profiles (422 Ultra / 4444 Light). ProRes 4444 Light / 4444 / XQ supports the Alpha Channel.</ListItem>
    <ListItem><b>[MOV] HAP GPU accelerated codecs:</b> 4 codecs (Hap, Hap Alpha, Hap Q and Hap Q Alpha), you can choose disable Snappy compression and change the number of CPU chunks, and for Hap and Hap Alpha you can choose your compression algorithm (each have their own tradeoff between speed and quality)</ListItem>
    <ListItem><b>[MOV] [MP4] x264:</b> best H264 / AVC implementation, outperforming both Adobe Media Encoder and QuickTime H264. A special Youtube Upload profile is provided, very easy to use!</ListItem>
    <ListItem><b>[MOV] [MP4] x265:</b> files are ~25% lighter than x264 for the same quality, but slower encoding</ListItem>
    <ListItem><b>[MOV] [MP4] x264 RGB:</b> same as x264 but avoids YUV colorspace, best for storing separate channels in one video like UV maps, alpha, 3D passes etc. (for power users!)</ListItem>
  </DottedList>
);

export const KnownLimitations = (props) => (
  <DottedList
    halfWidth={props.overview}
    title="Known Limitations:"
    color={props.mainColor}
    withTitleUrl={props.overview ? '/AfterCodecs/Known_limitations' : ''}
  >
    <ListItem><b>Don’t use the ProRes for broadcast. Always test your hardware and software.</b> It’s not an official version of ProRes; for example ProRes 4444’s Alpha channel doesn’t seem to be accepted by Blackmagic Hyperdeck Studio Mini.</ListItem>
    <ListItem>For H264 and H265, dimensions of the video must be even ({'=>'} odd resolutions will fail), except if you choose YUV 4:4:4 for H264</ListItem>
    <ListItem>Interlacing: lower field first in H264 recognized as top field first by Adobe</ListItem>
  </DottedList>
);

export const TechnicalSpecs = props => (
  <>
    <H3 centered underline={props.mainColor}>
      Technical Specifications
    </H3>

    <Requirements {...props} />

    <Flex flexDirection={["column", "row"]} mb={4}>
      <CodecsAndContainers {...props} />
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

export default Overview
