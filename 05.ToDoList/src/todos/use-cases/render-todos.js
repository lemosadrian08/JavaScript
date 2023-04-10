import { Todo } from "../models/todo.model"
import { createTodoHTML } from "./create-todo-html"

let element 

/**
 * 
 * @param {String} elmentId 
 * @param {Todo} todos 
 */

export const renderTodos = ( elmentId, todos = [] ) => {


    if (!element) element = document.querySelector( elmentId )

    if (!element)  throw new Error (`Element ${ elmentId} not found`)
    
    element.innerHTML=''

    todos.forEach( todo => {
        element.append( createTodoHTML(todo) )
    })

} 