import { useRef, useState } from 'react';
import TodoEditor from './TodoEditor';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default function Todo() {
  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const uid = useRef(1);
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    const todo = {
      id: uid.current++,
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, todo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.completed } : todo
      )
    );
  };
  const modifyTodo = (id: number, title: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  };
  return (
    <>
      <div className="todo">
        <TodoHeader />
        {/* 할 일 등록  */}
        <TodoEditor addTodo={addTodo} />
        {/* 할 일 목록  */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          modifyTodo={modifyTodo}
        />
      </div>
    </>
  );
}
