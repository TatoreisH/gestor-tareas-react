import { useState, useEffect } from "react";
import "./index.css";

import TaskInput from "./componentes/TaskInput";
import TaskList from "./componentes/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (text === "") return;

    setTasks([
      ...tasks,
      { text: text, completed: false }
    ]);

    setText("");
  }

  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Gestor de Tareas</h1>

      <TaskInput
        text={text}
        setText={setText}
        addTask={addTask}
      />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;