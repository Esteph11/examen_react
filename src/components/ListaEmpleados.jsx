import React, { useState } from 'react';  
import Swal from 'sweetalert2';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import Entrada from './Entrada';  

const API_URL = 'https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado';  

const ListaEmpleados = () => {  
  const [empleados, setEmpleados] = useState([]);  
  const [modalOpen, setModalOpen] = useState(false);  

  const fetchEmpleados = useCallback(async () => {  
    try {  
      const response = await axios.get(API_URL);  
      setEmpleados(response.data);  
    } catch (error) {  
      Swal.fire('Error', 'No se pudo cargar la lista de empleados', 'error');  
    }  
  }, []);  

  useEffect(() => {  
    fetchEmpleados();  
  }, [fetchEmpleados]);  

  const agregarEmpleado = async (empleado) => {  
    try {  
      await axios.post(API_URL, empleado);  
      Swal.fire('Éxito', 'Empleado agregado correctamente', 'success');  
      fetchEmpleados();  
    } catch (error) {  
      Swal.fire('Error', 'No se pudo agregar el empleado', 'error');  
    }  
  };  

  return (  
    <div>  
      <button className="btn btn-primary mb-3" onClick={() => setModalOpen(true)}>  
        <i className="fas fa-plus"></i> Agregar Empleado  
      </button>  
      <table className="table table-bordered">  
        <thead>  
          <tr>  
            <th>Nombre</th>  
            <th>DNI</th>  
            <th>Dirección</th>  
            <th>Email</th>  
          </tr>  
        </thead>  
        <tbody>  
          {empleados.map((empleado) => (  
            <tr key={empleado.id}>  
              <td>{empleado.nombre}</td>  
              <td>{empleado.dni}</td>  
              <td>{empleado.direccion}</td>  
              <td>{empleado.email}</td>  
            </tr>  
          ))}  
        </tbody>  
      </table>  
      <Modal  
        show={modalOpen}  
        onClose={() => setModalOpen(false)}  
        onSubmit={agregarEmpleado}  
      />  
    </div>  
  );  
};  

export default ListaEmpleados;