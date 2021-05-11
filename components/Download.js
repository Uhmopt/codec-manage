import { Flex, Box } from "rebass";
import { IText as Text } from "./Text";
import Button from "./Button";
import WinIcon from "assets/windows.svg";
import MacIcon from "assets/mac.svg";
import SubscribeModal from "./SubscribeModal";

const DownloadPage = (props) => {
  return (
    <>
      <Flex id="download-page" my={4} justifyContent="center">
        <SubscribeModal />

        {props.linkForMacOs != "" && (
          <Box mr={4}>
            <Button
              linkId="download-btn-macos"
              hoverColor={(props) => props.theme.colors.yellow}
              color="black"
              href={props.linkForMacOs}
            >
              <Flex alignItems="center">
                <Text fontSize={[2]} mr={2}>{`Download for`}</Text>
                <MacIcon width="30px" height="30px" />
              </Flex>
            </Button>
          </Box>
        )}

        <Box mr={4}>
          <Button
            linkId="download-btn-win"
            hoverColor={(props) => props.theme.colors.yellow}
            color="black"
            href={props.linkForWindows}
          >
            <Flex alignItems="center">
              <Text fontSize={[2]} mr={2}>{`Download for`}</Text>
              <WinIcon width="30px" height="30px" />
            </Flex>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default DownloadPage;
