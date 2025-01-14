import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CargoTable from "./components/CargoTable";
import AddCargoModal from "./components/AddCargoModal";
import StatusFilter from "./components/StatusFilter";
import "bootstrap/dist/css/bootstrap.min.css";
import { list } from "./data/cargo-list";

const App = () => {
  const [cargoList, setCargoList] = useState(list);
  const [filterStatus, setFilterStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const addCargo = (cargo) => {
    setCargoList([
      ...cargoList,
      {
        ...cargo,
        id: `CARGO${cargoList.length + 1}`,
        status: "Ожидает отправки",
      },
    ]);
    setShowModal(false);
  };

  const updateStatus = (id, status) => {
    setCargoList(
      cargoList.map((cargo) => (cargo.id === id ? { ...cargo, status } : cargo))
    );
  };

  const filteredList = filterStatus
    ? cargoList.filter((cargo) => cargo.status === filterStatus)
    : cargoList;

  return (
    <div className="container">
      <h1>Отслеживание грузов</h1>
      <div className="row ">
        <div className="col-6">
          <Button variant="success" onClick={() => setShowModal(true)}>
            Добавить груз
          </Button>
        </div>
        <div className="col-6">
          <StatusFilter
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </div>
      </div>
      <CargoTable cargoList={filteredList} updateStatus={updateStatus} />

      <AddCargoModal
        showModal={showModal}
        setShowModal={setShowModal}
        addCargo={addCargo}
      />
    </div>
  );
};

export default App;
