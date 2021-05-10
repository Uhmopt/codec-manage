import { Flex, Box } from "rebass";
import styled, { css } from "styled-components";
import { createContext, useContext } from "react";
import { H4 } from "../Heading";
import Text, { B } from "../Text";
import { ExternalLinkIcon } from "../ExternalLinkIcon";

function replaceLinksSO(text) {
  let rex = /(<a href=")?(https?:\/\/[-A-Za-z0-9+&@#\/%?=~_|$!:,.;]+\.)+[-A-Za-z0-9+&@#\/%?=~_|$!:,.;]+/gi;
  return text.replace(rex, function($0, $1) {
    if (/^https?:\/\/.+/i.test($0)) {
      return $1 ? $0 : '<a href="' + $0 + '">' + $0 + "</a>";
    } else {
      return $1 ? $0 : '<a href="http://' + $0 + '">' + $0 + "</a>";
    }
  });
}

export const ListItemText = props => <Text lineHeight={1.25} {...props} />;

export const FilledDot = styled(Box)`
  width: ${props => (props.size ? props.size + "px" : "10px")};
  height: ${props => (props.size ? props.size + "px" : "10px")};

  background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="xMinYMin meet" height="${props =>
    props.size
      ? props.size + "px"
      : "10px"}" viewBox="0 0 10 10" fill="${props =>
  (props.fillColor || "").replace("#", "%23") ||
  "black"}" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%" r="5" /></svg>');

  ${props =>
    props.innerText &&
    css`
      &::after {
        content: '${props.innerText}';
        color: white;
        font-weight: bold;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
      }
    `}
`;

const EmptyDot = styled(Box)`
  width: 10px;
  height: 10px;

  background-image: url('data:image/svg+xml;utf8,<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="4" strokeWidth="1" fill="none" stroke="${props =>
    (props.fillColor || "").replace("#", "%23") || "black"}"/></svg>')
`;

export const ListItem = styled(props => {
  const theme = useContext(DottedListContext);
  return (
    <Flex mb={3} alignItems="baseline" as="li">
      {props.style === "empty" ? (
        <EmptyDot fillColor={theme.color} as="span" />
      ) : (
        <FilledDot fillColor={theme.color} as="span" />
      )}
      <ListItemText
        width="90%"
        ml={3}
        dangerouslySetInnerHTML={
          props.text &&
          !props.children && {
            __html: replaceLinksSO(props.text)
          }
        }
      >
        {props.children}
      </ListItemText>
    </Flex>
  );
})`
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  margin-left: 20px;
`;

const Hr = styled.hr`
  margin-left: -20px;
`;

const DottedList = props => {
  return (
    <Ul>
      {props.listItems.map((li, index) => {
        return !/==================/g.test(li) ? (
          <ListItem key={index} text={li} style="empty" />
        ) : (
          <Hr key={index} />
        );
      })}
    </Ul>
  );
};

const renderListItems = props => {
  return props.listItems.map((li, index) => {
    if (Array.isArray(li)) {
      return [
        <ListItem key={li[0]} text={li[0]} />,
        <DottedList key={index} listItems={li.filter((_, idx) => idx !== 0)} />
      ];
    } else {
      return <ListItem key={li} text={li} />;
    }
  });
};

const DottedListContext = createContext({ color: "#b4003d" });

const DottedListWrapper = props => (
  <DottedListContext.Provider value={props}>
    <Flex
      flexDirection="column"
      width={["100%", props.halfWidth ? "50%" : "100%"]}
      px={[2, 0]}
    >
      {props.withTitleUrl ? (
        <Flex alignItems="center">
          <H4>
            <B>{props.title}</B>
          </H4>
          <Box as="a" ml={2} href={props.withTitleUrl}>
            <ExternalLinkIcon />
          </Box>
        </Flex>
      ) : (
        <H4>
          <B>{props.title}</B>
        </H4>
      )}
      <ul>
        {props.listItems &&
          props.listItems.length &&
          !props.children &&
          renderListItems(props)}
        {props.children}
      </ul>
    </Flex>
  </DottedListContext.Provider>
);

export default DottedListWrapper;
