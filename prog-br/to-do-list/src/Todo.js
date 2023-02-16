import React, { useState } from "react"
import './Todo.css'
import List from './components/List'
import TodoForm from './components/TodoForm'
import Modal from "./components/Modal"

import{createStore} from 'redux'
import { Provider } from "react-redux"
import listReducer from "./reducers/listReducer"

const SAVED_ITEMS = "savedItems"
const store= createStore(listReducer, loadState())

function persistState(state){
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function loadState(){
    const actualState = localStorage.getItem(SAVED_ITEMS)
    if(actualState){
        return JSON.parse(actualState)
    }else{
        return []
    }
}

store.subscribe(
    ()=>{
        persistState(store.getState())
    }
)

function Todo(){

    const [showModal, setShowModal] = useState(false)

    function onHideModal(event){
        let target = event.target
        console.log(target)
        if(target.className === "modal" || target.className === "todoAddButton"){
            setShowModal(false)
        }
    }

    return (
        <div className="container">
            <Provider store={store}>
                <header className="header">
                    <h1 className="title">
                        To do...
                    </h1>
                    <button onClick={()=>{setShowModal(true)}} className="headButton">
                        +
                    </button>
                </header>
                <List></List>

                <Modal showModal={showModal} onHideModal={onHideModal} >
                    <TodoForm onHideModal={onHideModal}></TodoForm>
                </Modal>
            </Provider>
        </div>
    )
}

export default Todo