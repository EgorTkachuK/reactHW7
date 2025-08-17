import { Component } from "react";



export class TaskList extends Component {
  state = {
    tasks: [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
      { id: 3, title: "Task 3" }
    ]
  };

  
  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }));
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="task-cover">
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title}
              <button onClick={() => this.deleteTask(task.id)} className="delete-button">
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
