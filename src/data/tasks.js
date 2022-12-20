import { nanoid } from 'nanoid';

const tasks = [
    { id: nanoid(), title: "task1", author: "John", description: "Do main page layout", type: 'toDo'},
    { id: nanoid(), title: "task2", author: "John", description: "Do main page layout", type: 'done'},
    { id: nanoid(), title: "task3", author: "John", description: "Do main page layout", type: 'inProgress'},
    { id: nanoid(), title: "task4", author: "John", description: "Do main page layout", type: 'toDo'},
    { id: nanoid(), title: "task5", author: "John", description: "Do main page layout", type: 'inProgress'},
    { id: nanoid(), title: "task6", author: "John", description: "Do main page layout", type: 'done'},
]

export default tasks;