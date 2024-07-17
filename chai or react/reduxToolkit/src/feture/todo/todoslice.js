import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { Input } from "postcss";
import { useState } from "react";

const initialState = {
    todos: [
    ],

}


const todoslice = createSlice({

    name: "todos",
    initialState,
    reducers: {

        addTodo: (state, action) => {
            let todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
            // console.log(todo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },

        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            // console.log( todoToUpdate);
            if (todoToUpdate) {
                todoToUpdate.text = text;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoslice.actions

export default todoslice.reducer



