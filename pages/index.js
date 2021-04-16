import React, { Component } from 'react';
import { Card,Button } from "semantic-ui-react";
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from "../routes";

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    renderCampaigns() {
        //const campaign = Campaign(props.query.address);
        //const summary =  campaign.methods.getSummary().call();

        const items = this.props.campaigns.map(address => {
            return {
                header: summary[5],
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            }
        });

        return <Card.Group items={items} />
    }

    render() {
        return (
                <Layout>
                    <div>
                        <h3>Open Campaigns</h3>
                        
                        <Link route="/campaigns/new">
                            <a>
                                <Button
                                content="Create Campaign"
                                icon="add circle"
                                primary
                                floated = "right"
                                />
                            </a>
                        </Link>
                        {this.renderCampaigns()}
                    </div>
                </Layout>
            );
    }
}

export default CampaignIndex;