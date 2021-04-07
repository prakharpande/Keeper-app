import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNotes from "./createNotes";
import CreateArea from "./CreateArea"
//import notes from "../notes";

export default function App(){
    let [notes,addNotes] = useState([]);
    function submitNotes(newNote){
        addNotes(function(prevValue){
            return [...prevValue,newNote];
        });
        //console.log(notes);
    }
    function delNotes(id){
        return addNotes(function(prevItems){
            return prevItems.filter(function(element,index){
                return id !== index;
            });
        });
    }
    return <div>
        <Header/>
        <div>
        <CreateArea makeNotes = {submitNotes} />
        {notes.map(function(props,index){
            return <CreateNotes key = {index}
            id = {index}
            title = {props.title}
            content = {props.content}
            deleteNotes = {delNotes}/>
        })}
        </div>
        <Footer/>
    </div>;
};