import React from "react";
import { Card, Modal } from "@material-ui/core";

export const AddAccountModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Card>
        <h1>Modal Content</h1>
      </Card>
    </Modal>
  );
};
