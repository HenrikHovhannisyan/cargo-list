import React, { useState } from "react";
import { Dropdown, Row, Table, Alert } from "react-bootstrap";

const CargoTable = ({ cargoList, updateStatus }) => {
  const [error, setError] = useState("");

  const statusColors = {
    "Ожидает отправки": "warning",
    "В пути": "primary",
    Доставлен: "success",
  };

  const handleStatusChange = (cargo, newStatus, updateStatus) => {
    const currentDate = new Date();
    const departureDate = new Date(cargo.departureDate);

    if (newStatus === "Доставлен" && departureDate > currentDate) {
      setError(
        "Невозможно установить статус 'Доставлен', дата отправления в будущем!"
      );
    } else {
      setError("");
      updateStatus(cargo.id, newStatus);
    }
  };

  return (
    <Row className="mt-2">
      <div className="table-responsive">
        {error && <Alert variant="danger">{error}</Alert>}{" "}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Название</th>
              <th>Статус</th>
              <th>Откуда</th>
              <th>Куда</th>
              <th>Дата отправления</th>
            </tr>
          </thead>
          <tbody>
            {cargoList
              .slice()
              .reverse()
              .map((cargo, index) => (
                <tr key={cargo.id}>
                  <td>{index + 1}</td>
                  <td>{cargo.name}</td>
                  <td>
                    <Dropdown
                      onSelect={(e) =>
                        handleStatusChange(cargo, e, updateStatus)
                      }
                    >
                      <Dropdown.Toggle
                        variant={statusColors[cargo.status] || "secondary"}
                        id="dropdown-basic"
                      >
                        {cargo.status}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="Ожидает отправки">
                          Ожидает отправки
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="В пути">В пути</Dropdown.Item>
                        <Dropdown.Item eventKey="Доставлен">
                          Доставлен
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td>{cargo.origin}</td>
                  <td>{cargo.destination}</td>
                  <td>{cargo.departureDate}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Row>
  );
};

export default CargoTable;
