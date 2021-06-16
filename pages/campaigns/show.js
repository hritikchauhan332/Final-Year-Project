import React, { Component } from "react";
import { Card, Grid, Button, Popup } from "semantic-ui-react";
import axios from "axios";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import SidebarComponent from "./SidebarComponent";
import ContributeModal from "./ContributeModal";
import { getItemCards } from "../helper/showHelper";
import { floatingButtonStyle } from "../helper/helper";
import TableComponent from "./TableComponent";

class CampaignShow extends Component {
  state = {
    visible: false,
    showModal: false,
    activeIndex: 0,
    showTable: false,
  };

  handleToggleModal = () => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
    }));
  };

  handleSidebarVisible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    const etherscanAddress =
      "https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=" +
      props.query.address +
      "&startblock=0&endblock=99999999&sort=asc&apikey=92DFXGGSPQWKX9GT5IDJCM3YM8FZ9XSM5S";
    const transcations = await axios.get(etherscanAddress);

    console.log(summary);

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      eventName: summary[5],
      targetAmount: summary[6],
      eventDescription: summary[7],
      transcationsList: transcations.data.result,
    };
  }

  renderCards() {
    return (
      <Card.Group
        items={getItemCards(this.props)}
        style={{ display: "flex" }}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        <SidebarComponent
          visible={this.state.visible}
          handleShowContributeModal={this.handleToggleModal}
          address={this.props.address}
        />
        <Layout>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "500",
              marginTop: "2rem",
              marginLeft: "2rem",
            }}
          >
            Campaign Details
          </div>
          <div
            style={{
              padding: "0rem 2rem 2rem 2rem",
              marginLeft: "6rem",
            }}
          >
            <Grid style={{ marginTop: "2rem" }}>
              <Grid.Row>
                <Grid.Column width={24}>{this.renderCards()}</Grid.Column>
              </Grid.Row>
            </Grid>
            <Popup
              trigger={
                <Button
                  onClick={this.handleSidebarVisible}
                  circular
                  icon={this.state.visible ? "minus" : "add"}
                  style={floatingButtonStyle}
                />
              }
              position="top center"
              content={this.state.visible ? "Less" : "More"}
              on={["hover"]}
              style={{
                backgroundColor: "#000080",
                color: "white",
              }}
            />
          </div>
        </Layout>
        <ContributeModal
          address={this.props.address}
          showModal={this.state.showModal}
          handleToggleModal={this.handleToggleModal}
        />
        <TableComponent transcationsList={this.props.transcationsList || []} />
      </React.Fragment>
    );
  }
}

export default CampaignShow;
