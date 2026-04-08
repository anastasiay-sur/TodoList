import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";
import { Filters } from "./components/Filters";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
}


