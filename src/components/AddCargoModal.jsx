import React from "react";
import { Button, Modal } from "react-bootstrap";
import AddCargoForm from "./AddCargoForm";

const AddCargoModal = ({ showModal, setShowModal, addCargo }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить новый груз</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddCargoForm addCargo={addCargo} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCargoModal;
