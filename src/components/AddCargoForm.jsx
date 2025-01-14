import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { validateCargo } from "../utils/validation";
import { locations } from "../data/locations";

const AddCargoForm = ({ addCargo }) => {
  const [cargo, setCargo] = useState({
    name: "",
    origin: "",
    destination: "",
    departureDate: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setCargo({
      ...cargo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMessage = validateCargo(cargo);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError("");
    addCargo(cargo);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}{" "}
      <Form.Group>
        <Form.Label>Название груза</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={cargo.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Откуда</Form.Label>
        <Form.Select
          name="origin"
          value={cargo.origin}
          onChange={handleInputChange}
        >
          <option value="">Выберите город</option>
          {locations.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Куда</Form.Label>
        <Form.Select
          name="destination"
          value={cargo.destination}
          onChange={handleInputChange}
        >
          <option value="">Выберите город</option>
          {locations.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Дата отправления</Form.Label>
        <Form.Control
          type="date"
          name="departureDate"
          value={cargo.departureDate}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Добавить груз
      </Button>
    </Form>
  );
};

export default AddCargoForm;
