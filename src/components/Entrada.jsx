import React from 'react';  

const Entrada = ({ label, type, value, onChange, name }) => {  
  return (  
    <div className="mb-3">  
      <label className="form-label">{label}</label>  
      <input  
        type={type}  
        className="form-control"  
        value={value}  
        onChange={(e) => onChange(name, e.target.value)}  
        name={name}  
      />  
    </div>  
  );  
};  

export default Entrada;  
