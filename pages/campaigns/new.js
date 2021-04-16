import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Link, Router } from '../../routes';


class CampaignNew extends Component {
  state = {
    eventName: '',
    minimumContribution: '',
    target: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution, this.state.target, this.state.eventName)
        .send({
          from: accounts[0]
        });

        Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Event Name</label>
              <Input
                value={this.state.eventName}
                onChange={event =>
                  this.setState({ eventName: event.target.value })}
              />
            <br></br>
            <label>Minimum Contribution</label>
              <Input
                label="wei"
                labelPosition="right"
                value={this.state.minimumContribution}
                onChange={event =>
                  this.setState({ minimumContribution: event.target.value })}
              />

            <label>Target</label>
              <Input
                label="target"
                labelPosition="right"
                value={this.state.target}
                onChange={event =>
                  this.setState({ target: event.target.value })}
              />
            
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;