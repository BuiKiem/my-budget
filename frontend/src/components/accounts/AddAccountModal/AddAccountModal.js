import React from "react";
import { Card, Modal, Slide } from "@material-ui/core";

export const AddAccountModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Slide in={open} direction="left">
        <Card>
          <h1>Modal Content</h1>
        </Card>
      </Slide>
    </Modal>
  );
};
