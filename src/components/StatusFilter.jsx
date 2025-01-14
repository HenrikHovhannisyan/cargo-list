import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const StatusFilter = ({ filterStatus, setFilterStatus }) => {
  return (
    <Row>
      <Col md={3}>
        <Form.Group>
          <Form.Label>Фильтр по статусу</Form.Label>
          <Form.Control
            as="select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">Все</option>
            <option value="Ожидает отправки">Ожидает отправки</option>
            <option value="В пути">В пути</option>
            <option value="Доставлен">Доставлен</option>
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default StatusFilter;
