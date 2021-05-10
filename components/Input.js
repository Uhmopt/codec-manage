import { Flex, Box } from "rebass";
import styled, { css } from "styled-components";
import {
  Label,
  Input,
  Select as RSelect,
  Textarea as RTextarea,
  Checkbox as RCheckbox
} from "@rebass/forms";

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const _Input = styled(props => (
  <Input
    mt={4}
    {...props}
    ref={
      props.register &&
      props.register({
        required: props.required,
        pattern: props.name === "email" && emailPattern
      })
    }
  />
))`
  border: none !important;
  border-bottom: 1px solid ${props => (props.error ? "#b4003d" : "#000")} !important;
  outline: none;
  font-family: "Source Sans Pro", sans-serif;
`;

export default _Input;

const SearchInput = props => {
  return (
    <Box {...props}>
      <_Input
        mt={0}
        value={props.value}
        onKeyPress={e => {
          const keycode = e.keyCode ? e.keyCode : e.which;
          if (keycode == "13") {
            props.submit(e.target.value);
          }
        }}
        onChange={e => props.changeQuery(e.target.value)}
        height="100%"
        id="search_input"
        name="search_input"
        type="searchQuery"
        placeholder="Enter your search query"
      />
    </Box>
  );
};

const Select = props => {
  const id = props.id || "select_input";
  return (
    <Flex
      flexDirection="column"
      css={css`
        align-items: center;
        width: 100%;
      `}
    >
      {props.label && (
        <Label
          width="auto"
          mr={4}
          htmlFor={id}
          alignSelf="flex-start"
          mb={2}
          color={"#666"}
        >
          {props.label}
        </Label>
      )}
      <Box
        css={css`
          width: 100%;
        `}
      >
        <RSelect
          {...props}
          id={id}
          name={props.name || id}
          sx={{
            borderRadius: 0,
            border: "none",
            borderBottom: "1px solid",
            fontFamily: "'Source Sans Pro', sans-serif"
          }}
          required={!!props.required}
        >
          {props.options.map((option, index) => (
            <option
              value={typeof option.value === "string" ? option.value : option}
              key={index}
            >
              {option.txt || option}
            </option>
          ))}
        </RSelect>
      </Box>
    </Flex>
  );
};

const Textarea = styled(props => (
  <RTextarea
    mt={4}
    {...props}
    ref={props.register && props.register({ required: props.required })}
  />
))`
  border: none !important;
  border-bottom: 1px solid ${props => (props.error ? "#b4003d" : "#000")} !important;
  outline: none;

  font-family: "Source Sans Pro", sans-serif;
`;

const Checkbox = styled(props => {
  return (
    <Label
      pt={2}
      css={{ width: "100%", alignItems: "center" }}
      fontSize={props.small ? [1] : "inherit"}
    >
      <RCheckbox id={props.id} name={props.name} />
      {props.label}
    </Label>
  );
})``;

export { SearchInput, Select, Textarea, Checkbox };
