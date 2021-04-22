import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { button_primary } from "./palette";
import Campaign from "../ethereum/campaign";
import {
  headerContainerStyle,
  headerContainerTextStyle,
} from "./helper/helper";
import CampaignBasicCard from "./CampaignBasicCard";
import CreateCompaignModal from "./CreateCampaignModalContainer";

class CampaignIndex extends Component {
  state = {
    showModal: false,
  };

  handleToggleModal = () => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
    }));
  };
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

  renderCampaigns() {
    const { campaigns, campaignNames } = this.props;
    const items = campaigns.map((address) => {
      return (
        <CampaignBasicCard
          CampaignName={campaignNames[address]}
          address={address}
        />
      );
    });

    return <Card.Group>{items}</Card.Group>;
  }

  render() {
    return (
      <Layout>
        <div style={headerContainerStyle}>
          <p style={headerContainerTextStyle}>Open Campaigns</p>
          <Button
            content="New Campaign"
            icon="add circle"
            primary
            floated="right"
            style={{ backgroundColor: button_primary }}
            onClick={() => this.handleToggleModal()}
          />
        </div>
        {this.renderCampaigns()}
        <CreateCompaignModal
          showModal={this.state.showModal}
          handleToggleModal={this.handleToggleModal}
        />
      </Layout>
    );
  }
}

export default CampaignIndex;
