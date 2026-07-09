const handleComplete = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: true }
        : todo
    )
  );
};