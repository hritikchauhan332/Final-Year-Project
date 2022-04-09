import React, { Component } from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import Layout from "../../components/Layout";
import { button_primary } from "../palette";
import Campaign from "../../ethereum/campaign";
import {
  headerContainerStyle,
  headerContainerTextStyle,
} from "../helper/helper";
import CampaignBasicCard from "../CampaignBasicCard";
import CreateCompaignModal from "../CreateCampaignModalContainer";

class CampaignIndex extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.history.back();
    }
  }

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

  handleProfileButtonClick() {
    window.location.pathname = "/profile";
  }

  handleLogout() {
    window.location.pathname = "/logout";
  }

  render() {
    return (
      <Layout>
        <div style={headerContainerStyle}>
          <p style={headerContainerTextStyle}>Open Campaigns</p>
          <div>
            <Button
              circular
              icon="add circle"
              primary
              style={{ backgroundColor: button_primary, width: "10rem" }}
              onClick={() => this.handleToggleModal()}
              animated
            >
              <Button.Content hidden>
                <Icon name="add circle" />
              </Button.Content>
              <Button.Content visible>New Campaign</Button.Content>
            </Button>
            <Button
              primary
              circular
              style={{ backgroundColor: button_primary }}
              onClick={this.handleProfileButtonClick}
              animated
            >
              <Button.Content hidden>
                <Icon name="user circle" />
              </Button.Content>
              <Button.Content visible>Profile</Button.Content>
            </Button>
            <Button
              primary
              circular
              style={{ backgroundColor: button_primary }}
              onClick={this.handleLogout}
              animated
            >
              <Button.Content hidden>
                <Icon name="log out" />
              </Button.Content>
              <Button.Content visible>Logout</Button.Content>
            </Button>
          </div>
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
