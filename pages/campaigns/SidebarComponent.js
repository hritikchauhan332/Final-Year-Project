import React, { Component } from "react";
import { Button, Icon, Menu, Sidebar } from "semantic-ui-react";

class SidebarComponent extends Component {
  render() {
    const {
      visible,
      handleShowContributeModal,
      handleViewRequests,
      handleShowTable,
    } = this.props;

    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as="a" onClick={handleShowContributeModal}>
          <Icon name="asl" />
          Contribute
        </Menu.Item>
        <Menu.Item as="a" onClick={handleViewRequests}>
          <Icon name="eye" />
          View Requests
        </Menu.Item>
        <Menu.Item as="a" onClick={handleShowTable}>
          <Icon name="money" />
          Transactions
        </Menu.Item>
      </Sidebar>
    );
  }
}

export default SidebarComponent;
