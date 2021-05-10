import { Flex, Box } from "rebass";
import styled, { css } from "styled-components";
import { FilledDot } from "./ProductPage/DottedList";
import Text from "./Text";
import { format, parseISO } from "date-fns";
import DesktopOnly from "./DesktopOnly";

const Line = styled(Flex)`
  width: 100%;
  height: 4px;
  background-color: ${props => props.color};
  position: absolute;

  &:after {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 20px solid ${props => props.color};
    content: " ";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(100%, -50%);
  }
`;

const Wrapper = styled(Flex)`
  position: relative;
  width: 100%;

  align-items: center;
`;

const TextLabel = styled(Text)`
  position: absolute;

  top: -40px;
  left: 0;

  font-weight: bold;

  transform: rotate(-30deg);
  transform-origin: 0% 0%;

  min-width: 250px;
  text-align: left;
`;

const DateLabel = styled(Text)`
  position: absolute;

  bottom: -40px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50px;
  width: max-content;
`;

const DotWrapper = styled(props => {
  return (
    <Flex {...props}>
      <FilledDot
        fillColor={props.color}
        size={props.size || 35}
        innerText={"v" + props.data.version}
      />
      <TextLabel children={props.data.label} />
      <DateLabel children={format(parseISO(props.data.date), "MMM ''yy")} />
    </Flex>
  );
})`
  height: ${props => props.size + "px"};
  width: ${props => props.size + "px"};

  position: relative;
`;

const Timeline = props => {
  return (
    <DesktopOnly>
      <Wrapper my={6} pt={5}>
        <Line color={props.color} />
        <Flex width={9 / 10} justifyContent="space-between">
          {props.data.map((el, index) => {
            return (
              <DotWrapper size={35} data={el} color={props.color} key={index} />
            );
          })}
        </Flex>
      </Wrapper>
    </DesktopOnly>
  );
};

export default Timeline;
