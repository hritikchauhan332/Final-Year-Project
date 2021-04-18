import React, { Component } from "react";
import {
  dimmerStyle,
  defaultFlex,
  labelStyle,
  textStyle,
  iconStyle,
  buttonStyle,
  cardContentStyle,
  buttonContainerStyle,
  popupStyle,
} from "./helper/helper";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  Button,
  Card,
  CardContent,
  Dimmer,
  Icon,
  Label,
  Popup,
} from "semantic-ui-react";
import { getRandomColors, randomAvatarColors } from "./palette";

class ContainerBasicCard extends Component {
  state = {
    active: false,
  };
  handleOpen = () => {
    this.setState({ active: true }, () => {
      setTimeout(this.handleClose, 1000);
    });
  };
  handleClose = () => this.setState({ active: false });

  getIntials(name) {
    const splits = name.split(" ");
    if (splits.length === 1) return splits[0].toUpperCase().charAt(0);
    if (splits.length > 1) {
      const char1 = splits[0].toUpperCase().charAt(0);
      const char2 = splits[1].toUpperCase().charAt(0);
      return `${char1}${char2}`;
    }
  }

  render() {
    const { CampaignName, address } = this.props;
    const themeColor = getRandomColors(randomAvatarColors);
    return (
      <Card fluid style={{ border: `1px solid ${themeColor}` }}>
        <CardContent style={cardContentStyle}>
          <Dimmer
            active={this.state.active}
            onClickOutside={this.handleClose}
            page
          >
            <div style={dimmerStyle}>
              <Icon
                name="clipboard check"
                style={{ fontSize: "3rem", marginBottom: "1rem" }}
              />
              Address Copied To Clipboard!
            </div>
          </Dimmer>
          <div style={defaultFlex}>
            <Label
              horizontal
              style={{
                ...labelStyle,
                backgroundColor: themeColor,
              }}
            >
              {this.getIntials(CampaignName)}
            </Label>
            <p style={textStyle}>{CampaignName}</p>
          </div>
          <div style={buttonContainerStyle}>
            <Button
              style={{ ...buttonStyle, border: `1.5px solid ${themeColor}` }}
              onClick={() => {
                window.open(`/campaigns/${address}`, "_blank");
              }}
            >
              <Icon name="eye" style={iconStyle} />
            </Button>
            <Popup
              trigger={
                <CopyToClipboard text={address}>
                  <Button
                    style={{
                      ...buttonStyle,
                      border: `1.5px solid ${themeColor}`,
                    }}
                    onClick={this.handleOpen}
                  >
                    <Icon name="copy" style={iconStyle} />
                  </Button>
                </CopyToClipboard>
              }
              position="bottom center"
              content="Click To Copy Campaign Address"
              on={["hover"]}
              style={{
                backgroundColor: themeColor,
                ...popupStyle,
              }}
            />
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default ContainerBasicCard;
