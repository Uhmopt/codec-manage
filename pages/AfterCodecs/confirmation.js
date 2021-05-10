const BundleImage = require("assets/images/_AC/AfterCodecsLogo.png");
const AdobeAE = require("assets/images/AdobeAE_color.png");
const AdobeAME = require("assets/images/AdobeAME_color.png");
const AdobePPro = require("assets/images/AdobePPro_color.png");

const RenderTotalPriceBlock = () => {
  return (
    <table
      border="0"
      cellPadding="0"
      cellSpacing="0"
      style={{ width: "100%", maxWidth: "800px" }}
      width="600"
    >
      <tbody>
        <tr>
          <td
            height="56"
            style={{
              height: "56px",
              minHeight: "56px",
              lineHeight: "56px"
            }}
          >
            &nbsp;
          </td>
        </tr>
        <tr>
          <td align="center">
            <table border="0" cellPadding="0" cellSpacing="0" width="100%">
              <tbody>
                <tr>
                  <td valign="top">
                    <table
                      align="right"
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      dir="ltr"
                      style={{
                        minWidth: "100%",
                        maxWidth: "100%",
                        width: "-webkit-calc(360000px - 60000%)",
                        width: "calc(360000px - 60000%)"
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "12px",
                              minWidth: "12px",
                              maxWidth: "12px"
                            }}
                            width="12"
                          >
                            &nbsp;
                          </td>
                          <td
                            align="center"
                            style={{
                              paddingLeft: "3px",
                              paddingRight: "3px"
                            }}
                          >
                            <table
                              align="left"
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                              style={{ width: "100%" }}
                            >
                              <tbody>
                                <tr>
                                  <td align="left">
                                    <h3
                                      style={{
                                        margin: "0",
                                        fontFamily:
                                          "Arial,Helvetica,sans-serif",
                                        fontSize: "19px",
                                        lineHeight: "28px",
                                        fontWeight: "700",
                                        color: "#4b4b4b"
                                      }}
                                    >
                                      Total:
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="right"
                                    style={{ paddingTop: "16px" }}
                                  >
                                    <p
                                      style={{
                                        margin: "0",
                                        fontFamily:
                                          "Arial,Helvetica,sans-serif",
                                        fontSize: "16px",
                                        lineHeight: "26px",
                                        fontWeight: "400",
                                        color: "#777777",
                                        wordBreak: "break-all",
                                        width: "100%",
                                        textAlign: "right"
                                      }}
                                    >
                                      Price: 350$
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="right"
                                    style={{ paddingTop: "16px" }}
                                  >
                                    <p
                                      style={{
                                        margin: "0",
                                        fontFamily:
                                          "Arial,Helvetica,sans-serif",
                                        fontSize: "16px",
                                        lineHeight: "26px",
                                        fontWeight: "400",
                                        color: "#777777",
                                        wordBreak: "break-all",
                                        width: "100%",
                                        textAlign: "right"
                                      }}
                                    >
                                      VAT: 20$
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="right"
                                    style={{ paddingTop: "16px" }}
                                  >
                                    <p
                                      style={{
                                        margin: "0",
                                        fontFamily:
                                          "Arial,Helvetica,sans-serif",
                                        fontSize: "16px",
                                        lineHeight: "26px",
                                        fontWeight: "400",
                                        color: "#777777",
                                        wordBreak: "break-all",
                                        width: "100%",
                                        textAlign: "right"
                                      }}
                                    >
                                      Total: 370$
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            style={{
                              width: "12px",
                              minWidth: "12px",
                              maxWidth: "12px"
                            }}
                            width="12"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td
            height="40"
            style={{
              height: "40px",
              minHeight: "40px",
              lineHeight: "40px",
              fontSize: "1px",
              borderBottom: "2px solid #f2f2f2"
            }}
          >
            &nbsp;
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const RenderImageBlock = () => {
  return (
    <span>
      <table
        role="module"
        border="0"
        align="center"
        cellPadding="0"
        cellSpacing="0"
        width="100%"
        style={{ tableLayout: "fixed" }}
      >
        <tbody>
          <tr>
            <td
              style={{
                fontSize: "20px",
                lineHeight: "25px",
                backgroundColor: "#a2d4f5",
                padding: "10px"
              }}
              valign="top"
              align="center"
              role="module-content"
            >
              Autokroma purchase confirmation
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td
              style={{
                fontSize: "6px",
                lineHeight: "10px",
                backgroundColor: "#a2d4f5",
                padding: "0px 0px 0px 0px"
              }}
              valign="top"
              align="center"
              role="module-content"
            >
              <img
                width="600"
                height=""
                src="https://www.autokroma.com/_next/static/images/background-ae78881f5314d2add5c64c2c77ed0b81.jpg"
                alt=""
                border="0"
                style={{
                  display: "block",
                  color: "#000",
                  textDecoration: "none",
                  fontFamily: "Helvetica,arial,sans-serif",
                  fontSize: "16px",
                  objectFit: "cover",
                  width: "100%!important",
                  height: "200px!important",
                  margin: "0 auto"
                }}
                className="CToWUd"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </span>
  );
};

const RenderContentBlock = () => {
  return (
    <table
      role="module"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      width="100%"
      style={{ tableLayout: "fixed" }}
    >
      <tbody>
        <tr>
          <td
            role="module-content"
            valign="top"
            height="100%"
            style={{ padding: "34px 23px 34px 23px" }}
            bgcolor="#ffffff"
          >
            <div>
              <div>
                <p style={{ textAlign: "center" }}>
                  Thank you for purchasing, <b>Username!</b>
                </p>
                <p style={{ textAlign: "center", marginTop: "16px" }}>
                  Bundles you purchased:
                </p>
                {RenderProduct()}
                {RenderProduct()}
                {RenderTotalPriceBlock()}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const RenderFooterBlock = () => {
  return (
    <span className="im">
      <table
        role="module"
        border="0"
        cellPadding="0"
        cellSpacing="0"
        width="100%"
        style={{ tableLayout: "fixed" }}
      ></table>
      <table
        role="module"
        border="0"
        cellPadding="0"
        cellSpacing="0"
        width="100%"
        style={{ tableLayout: "fixed" }}
      >
        <tbody>
          <tr>
            <td
              role="module-content"
              style={{ padding: "0px 0px 3px 0px" }}
              bgcolor="#ffffff"
            ></td>
          </tr>
        </tbody>
      </table>
      <table
        role="module"
        border="0"
        cellPadding="0"
        cellSpacing="0"
        width="100%"
        style={{ tableLayout: "fixed" }}
      >
        <tbody>
          <tr>
            <td
              role="module-content"
              style={{ padding: "0px 0px 3px 0px" }}
              bgcolor="#ffffff"
            ></td>
          </tr>
        </tbody>
      </table>
      <table
        border="0"
        cellPadding="0"
        cellSpacing="0"
        align="center"
        width="100%"
        role="module"
      >
        <tbody>
          <tr>
            <td style={{ padding: "5px 34px 17px 34px" }} bgcolor="#FFFFFF">
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align="center"
                width="100%"
              >
                <tbody>
                  <tr role="module-content">
                    <td align="center" valign="top" width="50%" height="100%">
                      <table
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        width="100%"
                        height="100%"
                      >
                        <tbody>
                          <tr>
                            <td
                              role="column-one"
                              height="100%"
                              style={{ height: "100%" }}
                            >
                              <table
                                role="module"
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                width="100%"
                                style={{ tableLayout: "fixed" }}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      role="module-content"
                                      valign="top"
                                      height="100%"
                                      style={{ padding: "0px 0px 0px 0px" }}
                                      bgcolor="#FFFFFF"
                                    >
                                      <div
                                        style={{
                                          fontSize: "10px",
                                          lineHeight: "150%",
                                          margin: "0px"
                                        }}
                                      >
                                        <span style={{ color: "#000000" }}>
                                          You recieved this letter because you
                                          bought some of Autokroma plugins
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td align="center" valign="top" width="50%" height="100%">
                      <table
                        border="0"
                        cellPadding="0"
                        cellSpacing="0"
                        width="100%"
                        height="100%"
                      >
                        <tbody>
                          <tr>
                            <td
                              role="column-two"
                              height="100%"
                              style={{ height: "100%" }}
                            >
                              <table
                                role="module"
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                width="100%"
                                style={{ tableLayout: "fixed" }}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      valign="top"
                                      style={{
                                        padding: "0px 0px 0px 0px",
                                        fontSize: "6px",
                                        lineHeight: "10px"
                                      }}
                                    >
                                      <table align="right">
                                        <tbody>
                                          <tr>
                                            <td style={{ padding: "0px 5px" }}>
                                              <a
                                                role="social-icon-link"
                                                alt="Facebook"
                                                title="Facebook "
                                                style={{
                                                  borderRadius: "4px",
                                                  display: "inline-block",
                                                  backgroundColor: "#3b579d"
                                                }}
                                                target="_blank"
                                              >
                                                <img
                                                  role="social-icon"
                                                  alt="Facebook"
                                                  title="Facebook "
                                                  height="30"
                                                  width="30"
                                                  src="https://ci4.googleusercontent.com/proxy/K1eMvXT1j0-5WuAYzEYqtvFJMgW9CbX-EiTADXY3a_KswGhH6_Pi_oaE2m0rPYdsHLuGsLZX5DXOWczTu9DXcOdkWBqkH3rl5eMY8XNsZuV0Wt1feIaGxafEwWAiSmfW=s0-d-e1-ft#https://marketing-image-production.s3.amazonaws.com/social/white/facebook.png"
                                                  className="CToWUd"
                                                />
                                              </a>
                                            </td>

                                            <td style={{ padding: "0px 5px" }}>
                                              <a
                                                role="social-icon-link"
                                                alt="Instagram"
                                                title="Instagram "
                                                style={{
                                                  borderRadius: "4px",
                                                  display: "inline-block",
                                                  backgroundColor: "#7f4b30"
                                                }}
                                                target="_blank"
                                              >
                                                <img
                                                  role="social-icon"
                                                  alt="Instagram"
                                                  title="Instagram "
                                                  height="30"
                                                  width="30"
                                                  src="https://ci5.googleusercontent.com/proxy/aYk65NXdnsjn71MwWmMEzLTAsgrrPL0TtRcS6hpKKaX7S7nbBOtybDMjyZQH3zjhQKIpQaf2SRyZuqJSkribAQoSVjeEL_Zau4DxEt4J3wpMY178joJAUqp7Slp3FqKXGA=s0-d-e1-ft#https://marketing-image-production.s3.amazonaws.com/social/white/instagram.png"
                                                  className="CToWUd"
                                                />
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </span>
  );
};

const RenderProduct = () => {
  return (
    <table
      border="0"
      cellPadding="0"
      cellSpacing="0"
      style={{ width: "100%", maxWidth: "800px" }}
      width="600"
    >
      <tbody>
        <tr>
          <td
            height="56"
            style={{
              height: "56px",
              minHeight: "56px",
              lineHeight: "56px"
            }}
          >
            &nbsp;
          </td>
        </tr>
        <tr>
          <td align="center">
            <table border="0" cellPadding="0" cellSpacing="0" width="100%">
              <tbody>
                <tr>
                  <td valign="top">
                    <table
                      align="left"
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        minWidth: "100%",
                        width: "31%",
                        maxWidth: "100%",
                        minWidth: "-webkit-calc(31%)",
                        minWidth: "calc(31%)",
                        width: "-webkit-calc(360000px - 60000%)",
                        width: "calc(360000px - 60000%)"
                      }}
                      width="186"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            style={{
                              paddingBottom: "24px",
                              paddingTop: "24px"
                            }}
                          >
                            <a target="_blank">
                              <img
                                height="auto"
                                src={BundleImage}
                                style={{
                                  display: "block",
                                  border: "0px",
                                  textDecoration: "none",
                                  borderStyle: "none",
                                  color: "#555555",
                                  borderWidth: "0"
                                }}
                                width="155"
                              />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="center"
                            style={{
                              paddingBottom: "24px"
                            }}
                          >
                            <img
                              height="auto"
                              src={AdobeAE}
                              style={{
                                border: "0px",
                                margin: "0 8px",
                                textDecoration: "none",
                                borderStyle: "none",
                                color: "#555555",
                                borderWidth: "0"
                              }}
                              width="24"
                            />
                            <img
                              height="auto"
                              src={AdobeAME}
                              style={{
                                border: "0px",
                                margin: "0 8px",
                                textDecoration: "none",
                                borderStyle: "none",
                                color: "#555555",
                                borderWidth: "0"
                              }}
                              width="24"
                            />
                            <img
                              height="auto"
                              src={AdobePPro}
                              style={{
                                border: "0px",
                                margin: "0 8px",
                                textDecoration: "none",
                                borderStyle: "none",
                                color: "#555555",
                                borderWidth: "0"
                              }}
                              width="24"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p
                              style={{
                                fontSize: "16px",
                                width: "100%",
                                textAlign: "center"
                              }}
                            >
                              Price: $299.00
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table
                      align="right"
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      dir="ltr"
                      style={{
                        minWidth: "100%",
                        width: "69%",
                        maxWidth: "100%",
                        minWidth: "-webkit-calc(69%)",
                        minWidth: "calc(69%)",
                        width: "-webkit-calc(360000px - 60000%)",
                        width: "calc(360000px - 60000%)"
                      }}
                      width="414"
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "12px",
                              minWidth: "12px",
                              maxWidth: "12px"
                            }}
                            width="12"
                          >
                            &nbsp;
                          </td>
                          <td
                            align="center"
                            style={{
                              paddingLeft: "3px",
                              paddingRight: "3px"
                            }}
                          >
                            <table
                              align="left"
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                            >
                              <tbody>
                                <tr>
                                  <td align="left">
                                    <h3
                                      style={{
                                        margin: "0",
                                        fontFamily:
                                          "Arial,Helvetica,sans-serif",
                                        fontSize: "19px",
                                        lineHeight: "28px",
                                        fontWeight: "700",
                                        color: "#4b4b4b"
                                      }}
                                    >
                                      AfterCodecs Full Adobe Suite (After
                                      Effects, Premiere Pro & Media Encoder) -
                                      25% OFF !
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="left"
                                    style={{ paddingTop: "16px" }}
                                  >
                                    <p
                                      style={{
                                        margin: "0",
                                        fontFamily:
                                          "Arial,Helvetica,sans-serif",
                                        fontSize: "16px",
                                        lineHeight: "26px",
                                        fontWeight: "400",
                                        color: "#777777",
                                        wordBreak: "break-all"
                                      }}
                                    >
                                      (B)v1;AfterCodecs_AfterEffects;AutokromaFS;Quantity:1;yahenmail_gmail_com;=mCE#C@P4cAvWDH;i:Y27U4Z}1BB]};-qR6hF:4sS(E)(B)v1;AfterCodecs_MediaEncoder;AutokromaFS;Quantity:1;yahenmail_gmail_com;}U$*i$!5vK"^?%-;Q|Aty:vBes##rG;Q8sZ/g^X:t(E)(B)v1;AfterCodecs_PremierePro;AutokromaFS;Quantity:1;yahenmail_gmail_com;7i?A}?9L0_:rS@D;e6U.3Q0Vy-==PJ;_I#h@ulfK$(E)
                                    </p>
                                    <p style={{ marginTop: "8px" }}>
                                      <a
                                        style={{
                                          cursor: "pointer",
                                          textDecoration: "underline"
                                        }}
                                      >
                                        Copy License key
                                      </a>
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            style={{
                              width: "12px",
                              minWidth: "12px",
                              maxWidth: "12px"
                            }}
                            width="12"
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td
            height="40"
            style={{
              height: "40px",
              minHeight: "40px",
              lineHeight: "40px",
              fontSize: "1px",
              borderBottom: "2px solid #f2f2f2"
            }}
          >
            &nbsp;
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Confirmation = props => {
  return (
    <div
      style={{
        minWidth: "100%",
        margin: "0",
        padding: "0",
        fontSize: "15px",
        fontFamily: "helvetica,arial,sans-serif",
        color: "#626262",
        backgroundColor: "#f4f4f4"
      }}
    >
      <center>
        <div>
          <table
            cellPadding="0"
            cellSpacing="0"
            border="0"
            width="100%"
            bgcolor="#F4F4F4"
          >
            <tbody>
              <tr>
                <td valgin="top" bgcolor="#F4F4F4" width="100%">
                  <table
                    width="100%"
                    role="content-container"
                    align="center"
                    cellPadding="0"
                    cellSpacing="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <td width="100%">
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <table
                                    width="100%"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    border="0"
                                    style={{
                                      width: "100%",
                                      maxWidth: "800px",
                                      margin: "0 auto"
                                    }}
                                    align="center"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          role="modules-container"
                                          style={{
                                            padding: "0px 0px 0px 0px",
                                            color: "#000000",
                                            textAlign: "center"
                                          }}
                                          bgcolor="#F4F4F4"
                                          width="100%"
                                          align="center"
                                        >
                                          {RenderImageBlock()}
                                          {RenderContentBlock()}
                                          {RenderFooterBlock()}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
};

export default Confirmation;
