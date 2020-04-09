import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: [],
    };
  }

  addTodo = (e) => {
    e.preventDefault()
    console.log("added todo");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <form className="add-todo" onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Add To"
            name="todo"
            onChange={(e) => this.handleChange(e)}
            value={this.state.todo}
          />
        </form>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
