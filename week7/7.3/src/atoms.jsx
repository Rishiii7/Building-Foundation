import {atom, selector, atomFamily, selectorFamily} from 'recoil'
import { TODOS } from './todos';


export const todoAtomFamily = atomFamily({
    key: 'todoAtomFamily',
    default: (id) => {
        console.log(id);
        return TODOS.find( x => x.id === id);
    }
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

