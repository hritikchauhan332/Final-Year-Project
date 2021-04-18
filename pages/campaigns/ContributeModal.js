import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import ContributeForm from "../../components/ContributeForm";

class ContributeModal extends Component {
  render() {
    const { showModal, handleToggleModal, address } = this.props;
    return (
      <Modal
        open={showModal}
        closeIcon
        onClose={handleToggleModal}
        style={{ width: "36rem" }}
      >
        <ContributeForm address={address} />
      </Modal>
    );
  }
}

export default ContributeModal;
