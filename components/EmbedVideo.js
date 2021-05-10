import styled from "styled-components";
import { Box, Flex } from "rebass";

const VideoWrapper = styled(Box)`
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;

  & > iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    border: 0;
  }
`;

const VideoEmbed = ({ videoSrc, playlistId }) => (
  <VideoWrapper>
    <iframe
      width="784"
      height="441"
      src={`https://www.youtube.com/embed/${
        playlistId
          ? `videoseries?list=${playlistId}`
          : `${videoSrc}?rel=0&amp;showinfo=0`
      }`}
      frameBorder="0"
      allowFullScreen
    />
  </VideoWrapper>
);

export const MarkdownVideo = ({ videoSrc }) => {
  return (
    <Flex my={2}>
      <video autoPlay="autoplay" width="100%" height="auto" muted loop>
        {Array.isArray(videoSrc) ? (
          videoSrc.map(src => <source src={src} />)
        ) : (
          <source src={videoSrc} />
        )}
        Video not supported.
      </video>
    </Flex>
  );
};

export default VideoEmbed;
