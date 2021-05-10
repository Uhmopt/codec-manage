import styled from "styled-components";
import Image from "../Image";

const getSrc = iconName => {
  switch (iconName) {
    default:
      return require(`assets/images/${iconName}.png`);
  }
};

const Icon = styled(Image).attrs(({ iconName }) => ({
  src: getSrc(iconName)
}))`
  height: 30px;
`;

export default Icon;
