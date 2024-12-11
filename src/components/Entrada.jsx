import 'bootstrap/dist/css/bootstrap.min.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';  
import { useEffect } from "react"
import useEmpleado from '../hooks/useEmpleado'

const Empleado  = () => {
    const {
      getEmpleados, 
      openModal,
      validar,
      deleteEmpleado,
      empleados,
      titleModal,
      nombre,
        setNombre,
        dni,
        setDni,
        direccion,
        setDireccion,
        email,
        setEmail,
    } = useEmpleado()
    
    useEffect(() => {
        getEmpleados()
    }, [])

    return (  
        <div className="container-fluid">  
            <div className="row mt-3">  
                <div className="col-md-4 offset-md-4">  
                    <div className="d-grid mx-auto">  
                        <button onClick={() => openModal(1)}  
                            className="btn btn-primary"  
                            data-bs-toggle="modal"  
                            data-bs-target="#modalEmpleados">  
                            <i className="fa-solid fa-circle-plus" /> Añadir  
                        </button>  
                    </div>  
                </div>  
            </div>  

            <div className="row mt-3">  
                <div className="col-12 col-lg-8 offset-lg-2">  
                    <div className="table-responsive">  
                        <table className="table table-bordered">  
                            <thead>  
                                <tr>  
                                    <th>#</th>  
                                    <th>Empleado</th>  
                                    <th>DNI</th>  
                                    <th>Dirección</th>  
                                    <th>Email</th>  
                                    <th>Acciones</th>  
                                </tr>  
                            </thead>  
                            <tbody className="table-group-divider">  
                                {  
                                    empleados.map((empleado, i) => (  
                                        <tr key={empleado.id}>  
                                            <td>{i + 1}</td>  
                                            <td>{empleado.nombre}</td>  
                                            <td>{empleado.dni}</td>  
                                            <td>{empleado.direccion}</td>  
                                            <td>{empleado.email}</td>  
                                            <td>  
                                                <button onClick={() => openModal(2, empleado.id, empleado.nombre, empleado.dni, empleado.direccion, empleado.email)} className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalEmpleados'>  
                                                    <i className='fa-solid fa-edit' />  
                                                </button>  
                                                <button onClick={() => deleteEmpleado(empleado.id)} className='btn btn-danger'>  
                                                    <i className='fa-solid fa-trash' />  
                                                </button>  
                                            </td>  
                                        </tr>  
                                    ))  
                                }  
                            </tbody>  
                        </table>  
                    </div>  
                </div>  
            </div>  

            <div id="modalEmpleados" className="modal fade" aria-hidden="true" tabIndex="-1">  
                <div className="modal-dialog">  
                    <div className="modal-content">  
                        <div className="modal-header">  
                            <label className="h5">{titleModal}</label>  
                            <button  
                                className="btn-close"  
                                data-bs-dismiss="modal"  
                                aria-label="close"  
                            />  
                        </div>  
                        <div className="modal-body">  
                            <div className="input-group mb-3">  
                                <span className="input-group-text"><i className="fa-solid fa-user" /></span>  
                                <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />  
                            </div>  

                            <div className="input-group mb-3">  
                                <span className="input-group-text"><i className="fa-solid fa-id-card" /></span>  
                                <input type="text" className="form-control" placeholder="DNI" value={dni} onChange={(e) => setDni(e.target.value)} />  
                            </div>  

                            <div className="input-group mb-3">  
                                <span className="input-group-text"><i className="fa-solid fa-home" /></span>  
                                <input type="text" className="form-control" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />  
                            </div>  

                            <div className="input-group mb-3">  
                                <span className="input-group-text"><i className="fa-solid fa-envelope" /></span>  
                                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />  
                            </div>  
                        </div>  

                        <div className="modal-footer">  
                            <button className="btn btn-success" onClick={validar}>  
                                <i className="fa-solid fa-floppy-disk" /> Guardar  
                            </button>  
                            <button id="btnCerrarModal" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
}  

export default Empleado;  
