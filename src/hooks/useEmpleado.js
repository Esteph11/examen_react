
import { useState } from 'react';  
import Swal from 'sweetalert2';  

const useEmpleado = () => {  
    const [empleado, setEmpleado] = useState({ nombre: '', dni: '', direccion: '', email: '' });  

    const handleChange = (e) => {  
        setEmpleado({ ...empleado, [e.target.name]: e.target.value });  
    };  

    const resetEmpleado = () => {  
        setEmpleado({ nombre: '', dni: '', direccion: '', email: '' });  
    };  

    const validar = (onAdd, onClose) => {  
        // Validaciones simples  
        if (!empleado.nombre || !empleado.dni || !empleado.direccion || !empleado.email) {  
            Swal.fire('Error', 'Todos los campos son obligatorios', 'error');  
            return false;  
        }  
        onAdd(empleado);  
        resetEmpleado(); // Limpiar el formulario  
        onClose();  
        return true;  
    };  

    return { empleado, handleChange, validar, resetEmpleado };  
};  

export default useEmpleado;  
