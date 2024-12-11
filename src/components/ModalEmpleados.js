import React from 'react';  
import Entrada from './Entrada';  

const ModalEmpleado = ({ onClose, onAdd, empleado, handleChange, title }) => {  
    const handleSubmit = (e) => {  
        e.preventDefault();  
        if (validar(onAdd, onClose)) {  
            // La validación y la lógica de agregar se manejan en useEmpleado  
        }  
    };  

    return (  
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">  
            <div className="modal-dialog" role="document">  
                <div className="modal-content">  
                    <div className="modal-header">  
                        <h5 className="modal-title">{title}</h5>  
                        <button type="button" className="close" onClick={onClose}>  
                            &times;  
                        </button>  
                    </div>  
                    <form onSubmit={handleSubmit}>  
                        <div className="modal-body">  
                            <Entrada label="Nombre" type="text" name="nombre" value={empleado.nombre} onChange={handleChange} />  
                            <Entrada label="DNI" type="text" name="dni" value={empleado.dni} onChange={handleChange} />  
                            <Entrada label="Dirección" type="text" name="direccion" value={empleado.direccion} onChange={handleChange} />  
                            <Entrada label="Email" type="email" name="email" value={empleado.email} onChange={handleChange} />  
                        </div>  
                        <div className="modal-footer">  
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>  
                            <button type="submit" className="btn btn-primary">Agregar</button>  
                        </div>  
                    </form>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default ModalEmpleado;  
