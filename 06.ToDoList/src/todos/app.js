import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderPending, renderTodos } from './use-cases';

const ElementIDs = {
    ClearCompleted: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filter',
    PendingCountLabel: '#pending-count'

}

/**
 * @param { String } elementId
 */

export const App = (elementId) => {
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app)
/*         displayTodos(); */
    })()

    const displayTodos=()=>{
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() )
        renderTodos(ElementIDs.TodoList, todos)
        updatePendingCount()
    }

    const updatePendingCount =()=>{
        renderPending(ElementIDs.PendingCountLabel)
    }

    (()=>{
        const app = document.createElement('div')
        app.innerHTML=html
        document.querySelector(elementId).append(app)
        displayTodos()
    })

    //References HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput)
    const todoListUL = document.querySelector( ElementIDs.TodoList)
    const clearCompletedButton= document.querySelector(ElementIDs.ClearCompleted)
    const filtersLIs = document.querySelectorAll(ElementIDs.TodoFilters)
    
    //Listeners


};