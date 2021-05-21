import React, { Component } from "react";
import { Form, Button, Input, Message, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Link, Router } from "../../routes";
import { button_primary, name_color } from "../palette";

class CampaignNew extends Component {
  state = {
    eventName: "",
    minimumContribution: "",
    target: "",
    eventDescription: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(
          this.state.minimumContribution,
          this.state.target,
          this.state.eventName,
          this.state.eventDescription
        )
        .send({
          from: accounts[0],
        });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.props.handleToggleModal();
    this.setState({ loading: false });
  };

  render() {
    return (
      <div style={{ padding: "2rem" }}>
        <h3 style={{ color: name_color }}>Create New Campaign</h3>

        <Form
          onSubmit={this.onSubmit}
          error={!!this.state.errorMessage}
          style={{ padding: "1rem" }}
        >
          <Form.Field>
            <label>Event Name</label>
            <Input
              icon="user"
              iconPosition="left"
              value={this.state.eventName}
              onChange={(event) =>
                this.setState({ eventName: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Event Description</label>
            <Input
              icon="user"
              iconPosition="left"
              value={this.state.eventDescription}
              onChange={(event) =>
                this.setState({ eventDescription: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Minimum Contribution (Wei)</label>
            <Input
              icon="money bill alternate outline"
              iconPosition="left"
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Target Amount (Wei)</label>
            <Input
              icon="target"
              iconPosition="left"
              value={this.state.target}
              onChange={(event) =>
                this.setState({ target: event.target.value })
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button
            loading={this.state.loading}
            primary
            style={{ backgroundColor: button_primary }}
          >
            Create!
          </Button>
        </Form>
      </div>
    );
  }
}

export default CampaignNew;
