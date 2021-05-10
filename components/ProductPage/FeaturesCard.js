import styled from "styled-components";
import { Flex, Box } from "rebass";
import Card from "../Card";
import Image from "../Image";
import { ListItemText } from "./DottedList";
import { useContext, createContext } from "react";

const FeaturesCard = styled(props => (
  <Box {...props} position="relative" mx={[4, 2]} mb={[2, 2, 2, 0]}>
    <Card
      boxShadowHeight="100%"
      css={`
        &:first-of-type {
          margin-left: 0;
        }
        &:last-of-type {
          margin-right: 0;
        }
        &:after {
          background: url(${props.bgImage}) no-repeat;
          background-size: 150px;
          content: " ";
          display: block;
          position: absolute;
          left: calc(100% - 175px);
          top: calc(100% - 175px);
          width: 150px;
          height: 150px;
          opacity: 0.5;
          z-index: -1;
        }
      `}
      px={[2, 2, 3, 4]}
      pb={[4, 4, 4, 6]}
      children={props.children}
    />
  </Box>
))`
  flex: 1;

  @media screen and (max-width: 992px) {
    flex: 1 1 auto;
  }
`;

FeaturesCard.Body = Card.Body;

FeaturesCard.Title = Card.Title;

FeaturesCard.Image = styled(Image).attrs({
  py: 4,
  mx: "auto",
  width: ["100px", "120px", "160px"]
})`
  display: block;
`;

const Tick = styled(Box)`
  height: 16px;
  width: 16px;  
  background: url('data:image/svg+xml;utf8,<svg width="16px" height="16px" viewBox="0 0 16 16" fill="${props =>
    (props.iconColor || "").replace(
      "#",
      "%23"
    )}" xmlns="http://www.w3.org/2000/svg"><path d="M15.4164 0.0138225C14.711 0.195132 13.9694 0.697814 13.1556 1.42261C12.3417 2.14737 11.4731 3.10296 10.62 4.22337C9.04446 6.29246 7.55479 8.92393 6.62328 11.647C5.0526 10.3836 2.77273 10.1612 0.333252 10.8605C0.141155 10.9152 -0.00157484 11.1007 1.31204e-05 11.2935C0.00234836 11.4864 0.147366 11.6702 0.340327 11.7227C2.03048 12.1912 4.42816 13.9028 6.12803 15.84C6.24145 15.9702 6.43577 16.0295 6.6061 15.9858L9.98322 15.1177C10.1746 15.0662 10.3209 14.8871 10.3254 14.6958C10.4371 9.73879 12.6299 5.2671 15.9187 0.705143C16.0272 0.555687 16.027 0.340713 15.9187 0.191055C15.8099 0.0413525 15.6001 -0.0327482 15.4169 0.0138225H15.4164ZM14.0267 1.89569C11.4007 5.87053 9.59978 9.90559 9.41737 14.3339L6.63127 15.05C5.2798 13.561 3.62388 12.2415 2.04426 11.4517C3.90582 11.2166 5.45272 11.6249 6.46848 12.7395C6.57807 12.8595 6.75744 12.9161 6.91939 12.8819C7.08134 12.8477 7.21919 12.7239 7.26594 12.5708C8.12566 9.73867 9.72397 6.92047 11.3721 4.75611C12.2455 3.75635 13.0404 2.6225 14.0267 1.89569Z" /><path d="M14.0267 1.89569C11.4007 5.87053 9.59978 9.90559 9.41737 14.3339L6.63127 15.05C5.2798 13.561 3.62388 12.2415 2.04426 11.4517C3.90582 11.2166 5.45272 11.6249 6.46848 12.7395C6.57807 12.8595 6.75744 12.9161 6.91939 12.8819C7.08134 12.8477 7.21919 12.7239 7.26594 12.5708C8.12566 9.73867 9.72397 6.92047 11.3721 4.75611C12.2455 3.75635 13.0404 2.6225 14.0267 1.89569Z" /></svg>')
`;

const FeatureListContext = createContext({ color: "#000" });

export const FeaturesListItem = styled(props => {
  const theme = useContext(FeatureListContext);
  return (
    <Flex mb={2}>
      <Tick iconColor={props.color || theme.color} mt={"3px"} />
      <ListItemText width="90%" mt={0} px={0} pl={2} fontSize={[0, 1]}>
        {props.children}
      </ListItemText>
    </Flex>
  );
})`
  &:last-of-type {
    margin-bottom: 0;
  }
`;

FeaturesCard.FeaturesListItem = FeaturesListItem;

export const FeaturesList = props => (
  <FeatureListContext.Provider value={props}>
    <Flex mt={4} flexDirection="column" as="ul" {...props}>
      {props.children}
    </Flex>
  </FeatureListContext.Provider>
);

FeaturesCard.FeaturesList = FeaturesList;

export const FeaturesCardWrapper = props => (
  <Flex
    flexDirection={["column", "column", "column", "row"]}
    pt={4}
    mb={4}
    {...props}
  />
);
FeaturesCard.FeaturesCardWrapper = FeaturesCardWrapper;

export default FeaturesCard;
