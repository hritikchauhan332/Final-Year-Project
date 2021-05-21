import React from "react";
import { randomCardColors } from "../palette";
import web3 from "../../ethereum/web3";
export const getItemCards = (props) => {
  const cardStyle = {
    overflowWrap: "break-word",
    width: "20rem",
    height: "12rem",
    padding: "1rem",
  };

  const {
    balance,
    manager,
    minimumContribution,
    requestsCount,
    approversCount,
    eventName,
    targetAmount,
    eventDescription,
  } = props;

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
      header: "Description",
      meta: "Event Description",
      description: (
        <p style={{ marginTop: "1rem" }}>
          {eventDescription}
        </p>
      ),
      style: {
        ...cardStyle,
        backgroundColor: randomCardColors[4],
      },
    },
    {
      header: `${manager.substring(0, 16)}...`,
      meta: "Address of Manager",
      description: (
        <p style={{ marginTop: "1rem" }}>
          The manager created this campaign and can create requests to withdraw
          money
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
          A request tries to withdraw money from the contract. Requests must be
          approved by approvers
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
      meta: "Target Amount (Wei)",
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
  return items;
};
