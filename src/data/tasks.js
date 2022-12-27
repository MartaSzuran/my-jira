import { nanoid } from 'nanoid';

const tasks = [
    { id: nanoid(), title: "add search feature", author: "Alice", description: "Change filter function", type: 'toDo'},
    { id: nanoid(), title: "create edition", author: "John", description: "Work with inputs inside the modal", type: 'done'},
    { id: nanoid(), title: "change layout", author: "Jan", description: "Change main page layout", type: 'inProgress'},
    { id: nanoid(), title: "WORK HARDER", author: "John", description: "Read React docs in spare time!!", type: 'toDo'},
    { id: nanoid(), title: "Cook dinner for Family", author: "John", description: "curry and chicken", type: 'inProgress'},
    { id: nanoid(), title: "Buy a dog ...", author: "Marta", description: "Border coli my love", type: 'done'},
]

export default tasks;