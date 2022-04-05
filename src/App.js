import React, { useState }  from 'react'
import { AgGridReact } from 'ag-grid-react';

import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function App() {
  const [todo, setTodo] = useState({nimi: '', kategoria: '', julkaisuvuosi: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    setTodos([...todos, todo]);
    setTodo({nimi: '', kategoria: '', julkaisuvuosi: ''});
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  const columns = [
    { field: 'nimi', sortable: true, filter: true },
    { field: 'kategoria', sortable: true, filter: true },
    { field: 'julkaisuvuosi', sortable: true, filter: true },
  ]

  return (
    <div className="App">
      <input name="nimi" value={todo.nimi} onChange={inputChanged}/>
      <input name="kategoria" value={todo.kategoria} onChange={inputChanged}/>
      <input name="julkaisuvuosi" value={todo.julkaisuvuosi} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <div className="ag-theme-material" style={{height: 400, width: 600, margin: 'auto'}}>
        <AgGridReact
          rowData={todos}
          columnDefs={columns}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
