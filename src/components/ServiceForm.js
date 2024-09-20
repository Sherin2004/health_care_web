// src/components/ServiceForm.js
import React, { useState, useEffect } from 'react';
import './ServiceForm.css';

const ServiceForm = ({ addService, editService, serviceToEdit }) => {
  const [form, setForm] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    if (serviceToEdit) {
      setForm(serviceToEdit);
    } else {
      setForm({ name: '', description: '', price: '' });
    }
  }, [serviceToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.description && form.price) {
      if (serviceToEdit) {
        editService(form);
      } else {
        addService(form);
      }
      setForm({ name: '', description: '', price: '' });
    }
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <h3>{serviceToEdit ? 'Edit Service' : 'Add Service'}</h3>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
      />
      <button type="submit">{serviceToEdit ? 'Update' : 'Add'} Service</button>
    </form>
  );
};

export default ServiceForm;
