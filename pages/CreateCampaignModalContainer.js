import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import CampaignNew from "./campaigns/new";

class CreateCompaignModal extends Component {
  render() {
    const { showModal, handleToggleModal } = this.props;
    return (
      <Modal
        open={showModal}
        closeIcon
        onClose={handleToggleModal}
        style={{ width: "36rem" }}
      >
        <CampaignNew handleToggleModal={handleToggleModal} />
      </Modal>
    );
  }
}

export default CreateCompaignModal;
