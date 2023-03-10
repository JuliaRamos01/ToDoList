import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";

class ToDo extends Component {
  state = {
    tarefa: "",
    listaDeTarefas: []
  };

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  handleClick = () => {
    if (this.state.tarefa === "") {
      return;
    }
    this.setState({
      listaDeTarefas: this.state.listaDeTarefas.concat({
        tarefa: this.state.tarefa,
        id: Math.random()
      }),
      tarefa: ""
    });
  };

  delete = (id) => {
    this.setState({
      listaDeTarefas: this.state.listaDeTarefas.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <>
        <div className="toDoContainer">
          <div className="blurContainer">
          <header>
            <div className-="title">
            <h1>🌤️Tarefas do dia </h1>
            </div>
          </header>

          <div className="inputTarefas">
            <input
              placeholder="Digite sua tarefa"
              onChange={this.handleChange}
              value={this.state.tarefa}
            />

            <button className="buttonAdd" onClick={this.handleClick}>
              {" "}
              + {" "}
            </button>
          </div>

          <div className="listaTarefas">
            <ul>
              {this.state.listaDeTarefas.map((item) => (
                <li>
                  {" "}
                  {item.tarefa}
                  <button
                    className="buttonRemove"
                    onClick={() => {
                      this.delete(item.id);
                    }}
                  >
                  x {""}
                  </button>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ToDo;
