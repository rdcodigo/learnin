import React from "react"
import { useDispatch } from "react-redux"
import Card from "./Card"
import {deleteItem, changeDone} from '../actions/listAction'

function DoneImg(props){
    if(props.done){
        return (
            <img className="deleteIcon" src="./assets/done.png"></img>
        )
    }else{
        return(
            <img className="deleteIcon" src="./assets/notDone.png"></img>
        )
    }
}

function ListItem(props){
    const dispatch = useDispatch()

    return(
        <li className={props.item.done? "doneItem":""}>
            <Card >
                <div>
                    <button onClick={()=>{dispatch(changeDone(props.item.id))}} className="deleteIconButton">
                        <DoneImg done={props.item.done}></DoneImg>
                    </button>
                    <div className="textItem">
                        {props.item.text}
                    </div>
                </div>
                <button onClick={()=>{dispatch(deleteItem(props.item.id))}} className="deleteIconButton">
                    <img className="deleteIcon" src="./assets/delete.png"></img>
                </button>
            </Card>
        </li>
    )
}

export default ListItem