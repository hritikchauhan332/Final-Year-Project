import React, { Component } from "react";
import {
  Card,
  Button,
  CardContent,
  Icon,
  Label,
  Dimmer,
} from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import { button_primary } from "./palette";
import Campaign from "../ethereum/campaign";
import CopyToClipboard from "react-copy-to-clipboard";

class CampaignIndex extends Component {
  static async getSummary(item) {
    const campaign = Campaign(item);
    return await campaign.methods.getSummary().call();
  }

  static async getData(campaigns) {
    return Promise.all(
      campaigns.map((curCampaign) => this.getSummary(curCampaign))
    );
  }

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    let data = await this.getData(campaigns);
    let campaignNames = {};
    data.map((curdata, index) => {
      campaignNames = {
        ...campaignNames,
        [campaigns[index]]: curdata[5],
      };
    });
    return { campaigns, campaignNames };
  }

  getIntials(name) {
    const splits = name.split(" ");
    if (splits.length === 1) return splits[0].toUpperCase().charAt(0);
    if (splits.length > 1) {
      const char1 = splits[0].toUpperCase().charAt(0);
      const char2 = splits[1].toUpperCase().charAt(0);
      return `${char1}${char2}`;
    }
  }

  renderCampaigns() {
    const { campaigns, campaignNames } = this.props;
    const buttonStyle = {
      width: "2rem",
      height: "1.9rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "0.5rem",
      backgroundColor: "white",
      border: `1.5px solid ${button_primary}`,
    };
    const iconStyle = {
      marginLeft: "0.45rem",
      color: "black",
    };
    const textStyle = {
      fontSize: "1.35rem",
      marginBottom: "0",
      fontWeight: "800",
      marginLeft: "0.5rem",
    };
    const items = campaigns.map((address) => {
      return (
        <Card fluid color="blue">
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Label
                horizontal
                style={{
                  width: "1rem",
                  height: "2.5rem",
                  borderRadius: "100%",
                  backgroundColor: "#1034A6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                {this.getIntials(campaignNames[address])}
              </Label>
              <p style={textStyle}>{campaignNames[address]}</p>
            </div>
            <div
              style={{
                position: "absolute",
                right: "0",
                marginRight: "2rem",
                display: "flex",
              }}
            >
              <Button
                style={buttonStyle}
                onClick={() => {
                  window.open(`/campaigns/${address}`, "_blank");
                }}
              >
                <Icon name="eye" style={iconStyle} />
              </Button>
              <CopyToClipboard text={address}>
                <Button style={buttonStyle} onClick={this.handleOpen}>
                  <Icon name="copy" style={iconStyle} />
                </Button>
              </CopyToClipboard>
            </div>
          </CardContent>
        </Card>
      );
    });

    return <Card.Group>{items}</Card.Group>;
  }

  render() {
    return (
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              textTransform: "capitalize",
              marginBottom: "0px",
            }}
          >
            Open Campaigns
          </p>
          <Link route="/campaigns/new">
            <a>
              <Button
                content="New Campaign"
                icon="add circle"
                primary
                floated="right"
                style={{ backgroundColor: button_primary }}
              />
            </a>
          </Link>
        </div>
        {this.renderCampaigns()}
      </Layout>
    );
  }
}

export default CampaignIndex;
