import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice'
import { loadState, saveState } from './localStorage';

import throttle from 'lodash/throttle'

const preloadedState = loadState();

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    preloadedState,
}); 
store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));