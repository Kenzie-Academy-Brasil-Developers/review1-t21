import { IErrorMessage, ITodo, TCreateTodoData, TUpdateTodoData } from "./interfaces/todo.interface";

interface ITodoList{
    createTodo(data: TCreateTodoData): ITodo,
    getTodos(): ITodo[]
    getOneTodo(id: number): ITodo | string;
    updateTodo(id: number, data: TUpdateTodoData): ITodo | string
    deleteTodo(id: number): IErrorMessage | string
}

class TodoList implements ITodoList{
    private todoList: ITodo[] = [];
    private id = 1;

    createTodo(data: TCreateTodoData): ITodo {
        const now = new Date();

        const newTodo: ITodo = {
            id: this.id,
            ...data,
            createdAt: now,
            updatedAt: now
        }

        this.todoList.push(newTodo);

        this.id++;

        return newTodo;
    }

    getTodos(): ITodo[] {
        return this.todoList;
    }
    
    getOneTodo(id: number): ITodo | string {
        const todo = this.todoList.find(todo => todo.id === id);

        if(!todo){
            return "Todo not found.";
        }

        return todo;
    }

    updateTodo(id: number, data: Partial<TCreateTodoData>): ITodo | string {  
        const currentTodo = this.todoList.find(todo => todo.id === id);

        if(!currentTodo){
            return "Todo not found."
        }

        const now = new Date();

        const updateTodo: ITodo = { ...currentTodo, ...data, updatedAt: now };

        const index = this.todoList.findIndex(todo => todo.id === id);

        this.todoList.splice(index, 1, updateTodo);

        return updateTodo;
    }

    deleteTodo(id: number): IErrorMessage | string {
        const index = this.todoList.findIndex(todo => todo.id === id);

        if(index === -1){
            return "Todo not found."
        }

        this.todoList.splice(index, 1);

        return { message: "Todo successfully deleted."};
    }
}

export const todoList = new TodoList();