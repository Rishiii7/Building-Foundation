import {atom, selector, atomFamily, selectorFamily} from 'recoil'
import { TODOS } from './todos';
import axios from 'axios'


export const todoAtomFamily = atomFamily({
    key: 'todoAtomFamily',
    default: selectorFamily({
        key: 'todoSelectorFamily',
        get: (id) => async () => {
            const todo = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            // console.log(todo)
            return todo.data.todo;
        }
    })
});


// export const todoSelectorFamily = selectorFamily({
//     key: 'todoSelectorFamily',
//     get: (id) => ({get}) => {
//         // console.log(TODOS[0]);
//         // const todoId = get(todoAtomFamily);
//         console.log(id)
//         const todo = TODOS.find( (todo) => { return todo.id === id});

//         // console.log(`todo is ${todo}`);

//         return todo;
//     }
// })

