export interface ITodo{
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IErrorMessage{
    message: string;
}

export type TCreateTodoData = Pick<ITodo, "title" | "content">;
export type TUpdateTodoData = Partial<TCreateTodoData>;