import { useEffect, useReducer } from "react";
import {todoReducer} from './todoReducer'


const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const HandleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo,
        };

        dispatch(action);
    };

    const HandleDeleteTodo = (id) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id,
        });
    };

    const HandleToogleTodo = (id) => {
        dispatch({
            type: "[TODO] Toogle Todo",
            payload: id,
        });
    };

    const todosCount = () => {
        return todos.length;
    }

    const pendingTodosCount = () => {
        return todos.filter(todo => !todo.done).length
    }

    return {
        todos,
        HandleDeleteTodo,
        HandleNewTodo,
        HandleToogleTodo,
        todosCount, 
        pendingTodosCount,
    };
};
