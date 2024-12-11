import React, { useState } from 'react';  
import Entrada from './Entrada';  

const Modal = ({ show, onClose, onSubmit }) => {  
  const [formData, setFormData] = useState({  
    nombre: '',  
    dni: '',  
    direccion: '',  
    email: '',  
  });  

  const handleChange = (name, value) => {  
    setFormData({ ...formData, [name]: value });  
  };  

  const handleSubmit = () => {  
    const { nombre, dni, direccion, email } = formData;  
    if (!nombre || !dni || !direccion || !email) {  
      return alert('Todos los campos son obligatorios.');  
    }  
    onSubmit(formData); // Llama a la función onSubmit pasada como prop  
    setFormData({ nombre: '', dni: '', direccion: '', email: '' }); // Resetea el formulario  
    onClose(); // Cierra el modal  
  };  

  if (!show) return null; // No renderiza nada si `show` es falso  

  return (  
    <div className="modal show d-block" tabIndex="-1">  
      <div className="modal-dialog">  
        <div className="modal-content">  
          <div className="modal-header">  
            <h5 className="modal-title">Agregar Empleado</h5>  
            <button className="btn-close" onClick={onClose}></button>  
          </div>  
          <div className="modal-body">  
            <Entrada  
              label="Nombre"  
              type="text"  
              value={formData.nombre}  
              onChange={handleChange}  
              name="nombre"  
            />  
            <Entrada  
              label="DNI"  
              type="text"  
              value={formData.dni}  
              onChange={handleChange}  
              name="dni"  
            />  
            <Entrada  
              label="Dirección"  
              type="text"  
              value={formData.direccion}  
              onChange={handleChange}  
              name="direccion"  
            />  
            <Entrada  
              label="Email"  
              type="email"  
              value={formData.email}  
              onChange={handleChange}  
              name="email"  
            />  
          </div>  
          <div className="modal-footer">  
            <button className="btn btn-secondary" onClick={onClose}>  
              Cancelar  
            </button>  
            <button className="btn btn-primary" onClick={handleSubmit}>  
              Guardar  
            </button>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Modal;