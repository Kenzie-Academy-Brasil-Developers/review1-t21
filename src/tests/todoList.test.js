import { describe, it, expect } from "vitest";
import { todoList } from "..";

const todoData = { title: "Título", content: "Conteúdo" };

const verifyTodo = (todo) => {
   const date = new Date();
   const year = date.getFullYear();

   expect(todo).toBeDefined();
   expect(todo.id).toBeTypeOf("number");
   expect(todo.id).toBe(1);
   expect(todo.title).toBeTypeOf("string");
   expect(todo.title).toBe(todoData.title);
   expect(todo.content).toBeTypeOf("string");
   expect(todo.content).toBe(todoData.content);
   expect(String(todo.createdAt)).toContain(year);
   expect(String(todo.updatedAt)).toContain(year);
};

describe("todoList class", () => {
   it("should be able to create a todo successfully", () => {
      const newTodo = todoList.createTodos(todoData);
      verifyProduct(newTodo);
   });

   it("should be able to get todo list successfully", () => {
      const todos = todoList.getTodos();
      expect(todos).toHaveLength(1);
      verifyTodo(todos[0]);
   });

   it("should be able to get one todo by id", () => {
      const todo = todoList.getOneTodo(1);
      expect(todo).toBeDefined();
      verifyTodo(todo);
   });

   it("should be able to update todo successfully", () => {
      const date = new Date();
      const year = date.getFullYear();

      const newTodoData = { title: "Título atualizado", content: "Conteúdo atualizado" };
      const updatedTodo = todoList.updateTodo(1, newTodoData);

      expect(updatedTodo).toBeDefined();
      expect(updatedTodo.id).toBeTypeOf("number");
      expect(updatedTodo.id).toBe(1);
      expect(updatedTodo.title).toBeTypeOf("string");
      expect(updatedTodo.title).toBe(newProductData.title);
      expect(updatedTodo.content).toBeTypeOf("string");
      expect(updatedTodo.content).toBe(newProductData.content);  
      expect(String(updatedTodo.updatedAt)).toContain(year);
   });

   it("should be able to delete todo successfully", () => {
      const deleteTodo = todoList.deleteTodo(1);

      expect(deleteTodo).toBeTypeOf("object");
      expect(deleteTodo.message).toBe("Todo successfully deleted.");

      const todos = todoList.getTodos();
      expect(todos).toHaveLength(0);
   })
});
