import { createSlice, nanoid } from "@reduxjs/toolkit";

const innitialState = {
    todos: [],
    updateingTodo: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: innitialState,
    reducers: {
        addTodo: (state, action) => {
            const todoItm = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todoItm)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(obj => obj.id == action.payload.id ? { ...obj, text: action.payload.text } : obj)
            state.updateingTodo = []
        },
        getUpdaingTodo: (state, action) => {
            state.updateingTodo = state.todos.filter((todo) => todo.id == action.payload)
        },
    }
})
export const { addTodo, removeTodo, updateTodo, getUpdaingTodo } = todoSlice.actions

export default todoSlice.reducer