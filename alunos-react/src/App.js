import React, { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import logoCadastro from "./assets/microsoft.png";

function App() {
  const baseURL = "https://localhost:7225/api/Aluno";
  const [data, setData] = useState([]);

  const [alunoSelecionado, setAlunoSelecionado]=useState({
    id: '',
    nome: '',
    email: '',
    idade: ''
  })

  const handleChange = e =>{
    const {name, value} = e.target;

    setAlunoSelecionado({
      ...alunoSelecionado,[name]:value
    });
    console.log(alunoSelecionado);
  }
  const pedidosGET = async () => {
    await axios
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    pedidosGET();
  });

  return (
    <div className="aluno-container">
      <br />
      <h3>Cadastro de alunos</h3>
      <header>
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
          {data.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <button className="btn btn-primary">Editar</button>
                {""}
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal>
        <Modal.Header>Incluir alunos</Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Nome:</label>
            <br />
            <input type="text" name="nome" className="form-control" onChange={handleChange}/>
            <label>Email:</label>
            <br />
            <input type="text" name="email" className="form-control" onChange={handleChange}/>
            <label>Idade:</label>
            <br />
            <input type="text" name="idade" className="form-control" onChange={handleChange}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary">Incluir</button>{""}
          <button className="btn btn-danger">Cancelar</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
