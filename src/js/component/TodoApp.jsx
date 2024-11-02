import React, { useState } from 'react';
import './TodoApp.css';


const TodoApp = () => {
  const [tarea, setTarea] = useState([]);
  const [NuevaTarea, setNuevaTarea] = useState('');

  const handleAgregarTarea = (e) => {
    if (e.key === 'Enter' && NuevaTarea.trim()) {
      setTarea([...tarea, NuevaTarea]);
      setNuevaTarea('');
    }
  };

  const handleBorrarTarea = (index) => {
    const updatedTarea = tarea.filter((tarea, tareaIndex) => tareaIndex !== index);
    setTarea(updatedTarea);
  };

  return (
    <div className="todo-app">

      <h1 className="mt-1 pt-1 text-secondary text-center">todos</h1>
      <div className="container contenedor-card">

      <div className="paper d-flex flex-column justify-content-center align-items-start">
      <input
        type="text"
        value={NuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        onKeyDown={handleAgregarTarea}
        placeholder="Añadir tarea..."
      />
      <hr />
      <ul className="d-flex flex-column justify-content-between">
        {tarea.length === 0 ? (
            <>
          <li className="pb-2">No hay tareas, añadir tareas</li>
          <hr /></>
        ) : (
          tarea.map((element, index) => (
            <>
           
                <li key={index} className="tarea-item">
                    ✍{element} <span  className="Borrar-icono" onClick={() => handleBorrarTarea(index)}><i class="fas fa-trash"></i></span>
               </li> 
               <hr />
             </>
          ))
        )}
      </ul>
      
      <p className="footer">{tarea.length} Articulo{
      tarea.length !== 1 ? 's' : ''} Restantes</p>
      </div>
    </div>
    </div>
  );
};

export default TodoApp;
