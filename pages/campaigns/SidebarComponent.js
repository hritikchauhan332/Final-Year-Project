import React, { Component } from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "../../routes";

class SidebarComponent extends Component {
  render() {
    const { visible, handleShowContributeModal, address } = this.props;

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
        <Link route={`/campaigns/${address}/requests`}>
          <Menu.Item as="a" onClick={() => {}}>
            <Icon name="eye" />
            View Requests
          </Menu.Item>
        </Link>
      </Sidebar>
    );
  }
}

export default SidebarComponent;
