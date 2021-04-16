import React, { Component } from "react";
import { Card, Grid, Button, Table} from 'semantic-ui-react';
import axios from "axios";
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        const etherscanAddress = 'https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=' + props.query.address + '&startblock=0&endblock=99999999&sort=asc&apikey=92DFXGGSPQWKX9GT5IDJCM3YM8FZ9XSM5S'
        const transcations = await axios.get(etherscanAddress)

        console.log(summary);

        return{
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
            eventName: summary[5],
            targetAmount: summary[6],
            transcationsList: transcations.data.result
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
          } = this.props;
      
          const items = [
            {
              header: manager,
              meta: 'Address of Manager',
              description:
                'The manager created this campaign and can create requests to withdraw money',
              style: { overflowWrap: 'break-word' }
            },
            {
              header: minimumContribution,
              meta: 'Minimum Contribution (wei)',
              description:
                'You must contribute at least this much wei to become an approver'
            },
            {
              header: requestsCount,
              meta: 'Number of Requests',
              description:
                'A request tries to withdraw money from the contract. Requests must be approved by approvers'
            },
            {
              header: approversCount,
              meta: 'Number of Approvers',
              description:
                'Number of people who have already donated to this campaign'
            },
            {
              header: web3.utils.fromWei(balance, 'ether'),
              meta: 'Campaign Balance (ether)',
              description:
                'The balance is how much money this campaign has left to spend.'
            }
          ];
      
          return <Card.Group items={items} />; 
    }

    renderTableData() {
        return this.props.transcationsList.map((transcation) => {
            const { from, isError, timeStamp, value} = transcation
            const sucess = parseInt(isError)?'False':'True'
            return (
               <Table.Row>
                   <Table.Cell>{ from }</Table.Cell>
                   <Table.Cell>{sucess}</Table.Cell>
                   <Table.Cell>{ timeStamp }</Table.Cell>
                   <Table.Cell>{ value }</Table.Cell>
               </Table.Row>
            )
         })
    }

    render() {

        //console.log(this.props.transcationsList)

        return (
            <Layout>
                <h3>Campaign Show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                            
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <h3>Transactions for this Contract</h3>

                <Table inverted>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>From</Table.HeaderCell>
                        <Table.HeaderCell>Success</Table.HeaderCell>
                        <Table.HeaderCell>Timestamp</Table.HeaderCell>
                        <Table.HeaderCell>Amount Transfer(WEI)</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderTableData()}
                    </Table.Body>
                </Table>
            </Layout>
        )
    }
}

export default CampaignShow;