import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import "./App.css";
import { addNewTodo, fetchTodos } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addNewTodo( text ));
    setText("");
  };

  const toggleTodoComplete = (todoId) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== todoId) return todo;
    //     return {
    //       ...todo,
    //       completed: !todo.completed,
    //     };
    //   })
    // );
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occurred: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
