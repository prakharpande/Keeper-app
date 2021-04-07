import React from "react";
import Note from "./Note";

function CreateNotes(props,index){
    return <Note
        key = {props.id}
        id = {props.id}
        title = {props.title}
        content = {props.content}
        deleteNotes = {props.deleteNotes}
    />
}
export default CreateNotes;