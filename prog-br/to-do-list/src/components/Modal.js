import React from "react"
import Card from "./Card"

function Modal(props){

    return (
        <div onClick={props.onHideModal} className={props.showModal? "modal": "hideModal"}>
            <Card className="cardModal">
            {props.children}
            </Card>
        </div>
    )
}

export default Modal