import React, { useState, useEffect} from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import logoCadastro from "./assets/microsoft.png";

function App() {
  const baseURL="https://localhost:7225/api/Aluno";
  const [data, setData]=useState([]);

  const pedidosGET = async()=> {
    await axios.get(baseURL)
          .then(response => {
            setData(response.data);
          }).catch(error=>{
            console.log(error);
          })
  }

  useEffect(()=>{
    pedidosGET();
  })

  return (
    <div className="App">
      <br />
      <h3>Cadastro de alunos</h3>
      <header className="App-header">
        <img src={logoCadastro} alt="Cadastro" />
        <button className="btn btn-success">Incluir novo aluno</button>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody>
          {data.map(aluno=>(
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <button className="btn btn-primary">Editar</button>{""}
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
