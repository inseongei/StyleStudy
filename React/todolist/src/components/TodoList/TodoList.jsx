import React, { useState, useEffect } from "react";
import AddTodo from "../AddtTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  // 데이터를 읽어올 때 (로컬 스토리지, 파일읽기 , 네트워크 등)  함수가 호출되어서 다시 읽어와진다.
  // 내부적으로는 읽어오는 값을 쓰지 않고 가지고 온 값을 사용함
  // state에서 함수를 호출하는 경우라면 () => fn()로 해야함
  // 함수가 호출되어서 반환되는 값이 초기값으로 설정되는게 아니라 콜백 함수는 내부적으로 가지고 있는 상태가 있다면
  // 초기값이 필요하지 않으니깐 함수를 호출하지 않는다.
  const [todos, setTodos] = useState(() => readTodos());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    return () => {};
  }, [todos]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

function readTodos() {
  console.log("readTodos");
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
