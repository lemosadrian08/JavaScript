import { Todo } from "../todos/models/todo.model"


export const Filters = {
    All: 'all',
    Compleded: 'Completed',
    Pending: 'Pending'
}


const state = {
    todos: [
        new Todo('pIEDRA AZUL'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo')
    ],
    filter:Filters.All
}




const getTodos = (filter=Filters.All)=>{
    switch (filter) {
        case Filters.All:
            return [...state.todos]
        case Filters.Compleded:
            return state.todos.filter( todo => todo.done )
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done )
        default:
            throw new Error (`Option ${filter} is not valid`)
    }
}


const addTodo =(description)=>{
    if(!description) throw new Error ('Description is required')
    state.todos.push(new Todo(description))
}

const toggleTodo = (todoId) =>{
    state.todos = state.todos.map(todo => {
        if(todo.id===todoId){
            todo.done = !todo.done
        }
        return todo
    })
}

const deleteTodo =(todoId)=>{
    state.todos= state.todos.filter( todo => todo.id !== todoId)
}

const deleteCompleted = () =>{
    state.todos = state.todos.filter( todo => !todo.done)
}


const setFilter = (newFilter= Filters.All)=>{
    if(!Object.keys(Filters).includes(newFilter)) throw new Error ('newFilter is required')
    state.filter=newFilter
}

const getCurrentFilter =()=>{
    return state.filter
}


export default {
    getTodos,
/*     initStore,
    loadStore, */
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
}