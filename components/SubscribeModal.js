import React from "react";
import { Link } from "rebass";
import NextLink from "next/link";
import styled from "styled-components";
import ConditionalWrap from "conditional-wrap";

const ModalDialog = styled("div")`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  opacity: 0;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: none;
  &:target {
    opacity: 1;
    pointer-events: auto;
  }
  .close {
    opacity: 0;
    pointer-events: none;
  }

  .validate {
    width: 600px;
    position: relative;
    margin: 10% auto;
    padding: 5px 20px 13px 20px;
    border-radius: 10px;
    color: white;
    background: #3867d6;
    background: -moz-linear-gradient(#3867d6, #af43bc);
    background: -webkit-linear-gradient(#3867d6, #af43bc);
    background: -o-linear-gradient(#3867d6, #af43bc);
		@media (max-width: 700px) {
			width: calc(100% - 100px);
		}

    h2 {
      font-size: 2rem;
      text-align: center;
      padding: 25px;
    }

    .indicates-required {
      padding: 10px;
    }

    .mc-field-group {
      display: flex;
      flex-flow: column;
      padding: 10px 10px 5px 10px;

      label {
        font-size: 1.2rem;
        padding: 5px;
      }

      #subscribe_alert {
        color: #ffeb3b;
        text-align: center;
				display: none;
      }

      input {
        padding: 10px;
        margin: 5px;
        border-radius: 20px 20px 5px 20px;
        background: #fff7;
        border: 0;

        &:focus-visible {
          border: 0;
        }
      }
    }

    .clear {
      display: flex;
      justify-content: flex-end;
      padding: 10px 15px 15px 15px;

      input {
        padding: 10px;
        border-radius: 20px 5px 20px 20px;
        border: 0;
        background-color: #2196f3;
        color: white;
        font-weight: 700;
        cursor: pointer;
        box-shadow: black 0px 0px 10px 0px;

        &:hover {
          box-shadow: black 3px 3px 15px 0px;
        }
      }
    }
  }
`;

const CloseButton = styled("a")`
  background: #606061;
  color: #ffffff;
  line-height: 25px;
  position: absolute;
  right: -12px;
  text-align: center;
  top: -10px;
  width: 24px;
  text-decoration: none;
  font-weight: bold;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  -moz-box-shadow: 1px 1px 3px #000;
  -webkit-box-shadow: 1px 1px 3px #000;
  box-shadow: 1px 1px 3px #000;
  &:hover {
    background: #00d9ff;
  }
`;

const SubscribeModal = (props) => {
  return (
    <ModalDialog id="subscribe_modal">
      <form
        action="https://autokroma.us17.list-manage.com/subscribe/post?u=1da24c3edad543181b6cb75f8&amp;id=7a5f235bce"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <CloseButton id="close_subscribe_modal" href="#close" title="Close">
          X
        </CloseButton>
        <div id="mc_embed_signup_scroll">
          <h2>Autokroma Plugins for Adobe CC Newsletter</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> Subscribe to our newsletter to
            be kept up to date of new plugins features and new articles !
          </div>
          <div className="mc-field-group">
            <label for="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <p id="subscribe_alert">Please input a valid email address.</p>
            <input
              type="email"
              value=""
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </ModalDialog>
  );
};

export default SubscribeModal;
