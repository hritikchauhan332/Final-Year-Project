import React, { Component } from "react";
import {
  Card,
  Grid,
  Button,
  Table,
  Icon,
  Popup,
  Accordion,
} from "semantic-ui-react";
import axios from "axios";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import SidebarComponent from "./SidebarComponent";
import { button_primary, getRandomColors, randomCardColors } from "../palette";
import ContributeModal from "./ContributeModal";

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

  handleViewRequests = () => {
    window.open(`/campaigns/${this.props.address}/requests`, "_blank");
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
      transcationsList: transcations.data.result,
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
      eventName,
      targetAmount,
    } = this.props;
    const cardStyle = {
      overflowWrap: "break-word",
      width: "20rem",
      height: "12rem",
      padding: "1rem",
    };
    const items = [
      {
        header: eventName,
        meta: "Name Of Compaign",
        description: (
          <p style={{ marginTop: "1rem" }}>
            It's the name of the current compaign
          </p>
        ),
        style: {
          ...cardStyle,
          backgroundColor: randomCardColors[0],
        },
      },
      {
        header: `${manager.substring(0, 16)}...`,
        meta: "Address of Manager",
        description: (
          <p style={{ marginTop: "1rem" }}>
            The manager created this campaign and can create requests to
            withdraw money
          </p>
        ),

        style: {
          ...cardStyle,
          backgroundColor: randomCardColors[1],
        },
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description: (
          <p style={{ marginTop: "1rem" }}>
            You must contribute at least this much wei to become an approver
          </p>
        ),
        style: {
          ...cardStyle,
          backgroundColor: randomCardColors[2],
        },
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description: (
          <p style={{ marginTop: "1rem" }}>
            A request tries to withdraw money from the contract. Requests must
            be approved by approvers
          </p>
        ),

        style: {
          ...cardStyle,
          backgroundColor: randomCardColors[3],
        },
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description: (
          <p style={{ marginTop: "1rem" }}>
            Number of people who have already donated to this campaign
          </p>
        ),
        style: {
          ...cardStyle,
          backgroundColor: randomCardColors[4],
        },
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description: (
          <p style={{ marginTop: "1rem" }}>
            The balance is how much money this campaign has left to spend.
          </p>
        ),
        style: {
          ...cardStyle,
          backgroundColor: randomCardColors[5],
        },
      },
      {
        header: targetAmount,
        meta: "Target Amount",
        description: (
          <p style={{ marginTop: "1rem" }}>
            It's the target amount which is needed to be raised.
          </p>
        ),
        style: {
          ...cardStyle,
          backgroundColor: randomCardColors[2],
        },
      },
    ];

    return (
      <Card.Group
        items={items}
        style={{ display: "flex", justifyContent: "center" }}
      />
    );
  }

  renderTableData() {
    return this.props.transcationsList.map((transcation) => {
      const { from, isError, timeStamp, value } = transcation;
      const sucess = parseInt(isError) ? "False" : "True";
      return (
        <Table.Row>
          <Table.Cell>{from}</Table.Cell>
          <Table.Cell>{sucess}</Table.Cell>
          <Table.Cell>{timeStamp}</Table.Cell>
          <Table.Cell>{value}</Table.Cell>
        </Table.Row>
      );
    });
  }
  handleClick = () => {
    this.setState({
      activeIndex: (this.state.activeIndex + 1) % 2,
    });
  };
  handleShowTable = () => {
    this.setState({
      showTable: !this.state.showTable,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SidebarComponent
          visible={this.state.visible}
          handleShowContributeModal={this.handleToggleModal}
          handleViewRequests={this.handleViewRequests}
          handleShowTable={this.handleShowTable}
        />
        <Layout>
          <div
            style={{
              padding: "1rem 2rem 2rem 2rem",
              marginLeft: this.state.visible ? "6rem" : "",
            }}
          >
            <h2>Campaign Details</h2>
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
                  style={{
                    position: "fixed",
                    right: "5%",
                    bottom: "10%",
                    zIndex: "1",
                    padding: "1.5rem",
                    backgroundColor: button_primary,
                    color: "white",
                  }}
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
        {this.state.showTable && (
          <Accordion
            style={
              this.state.visible
                ? { marginLeft: "12rem", width: "75%" }
                : { marginLeft: "10rem", width: "80%" }
            }
          >
            <Accordion.Title
              active={this.state.activeIndex === 0}
              index={0}
              onClick={this.handleClick}
              style={
                this.state.activeIndex !== 0 ? { paddingBottom: "2rem" } : {}
              }
            >
              <Icon name="dropdown" />
              Transaction Table
            </Accordion.Title>
            <Accordion.Content
              active={this.state.activeIndex === 0}
              style={{ paddingBottom: "2rem" }}
            >
              <Table inverted>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>From</Table.HeaderCell>
                    <Table.HeaderCell>Success</Table.HeaderCell>
                    <Table.HeaderCell>Timestamp</Table.HeaderCell>
                    <Table.HeaderCell>Amount Transfer(WEI)</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>{this.renderTableData()}</Table.Body>
              </Table>
            </Accordion.Content>
          </Accordion>
        )}
      </React.Fragment>
    );
  }
}

export default CampaignShow;
