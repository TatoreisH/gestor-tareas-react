function TaskInput({ text, setText, addTask }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Escribí una tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Agregar</button>
    </div>
  );
}

export default TaskInput;