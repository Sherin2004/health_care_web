// src/App.js
import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import './App.css';

const App = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Consultation', description: 'General health checkup', price: 50 },
    { id: 2, name: 'X-Ray', description: 'Full body scan', price: 100 }
  ]);

  const [serviceToEdit, setServiceToEdit] = useState(null);

  const addService = (service) => {
    setServices([...services, { ...service, id: services.length + 1 }]);
  };

  const handleEdit = (index) => {
    setServiceToEdit(services[index]);
  };

  const editService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setServiceToEdit(null);
  };

  const handleDelete = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <ServiceForm addService={addService} editService={editService} serviceToEdit={serviceToEdit} />
      <ServiceList services={services} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
