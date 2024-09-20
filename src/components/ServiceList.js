// src/components/ServiceList.js
import React from 'react';
import './ServiceList.css';

const ServiceList = ({ services, handleEdit, handleDelete }) => {
  return (
    <div className="service-list">
      <h2>Healthcare Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={service.id} className="service-item">
            <div>
              <strong>{service.name}</strong>: {service.description} - ${service.price}
            </div>
            <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
