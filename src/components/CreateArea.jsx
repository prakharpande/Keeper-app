import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  let [newNote,setNewNote] = useState({
    title : "",
    content : ""
  });
  function addNewNote(event){
    let newItem = event.target.value;
    let itemName = event.target.name;
    setNewNote(function(prevValue){
      return {
        ...prevValue,
        [itemName] : newItem
      }
    });
    //console.log(newNote);
  }
  let [isTypable, setTypable] = useState(false);
  function smoothTransition(){
    setTypable(true);
  }
  return (
    <div>
      <form className ="create-note" onSubmit = {function(e){
        props.makeNotes(newNote);
        setNewNote({
          title : "",
          content : ""
        });
        e.preventDefault();
      }}>
        {isTypable&&<input onChange = {addNewNote} name="title" placeholder="Title" value = {newNote.title}/>}
        
        <textarea onClick = {smoothTransition} onChange = {addNewNote} name="content" placeholder="Take a note..." rows={isTypable?3:1} value = {newNote.content}/>
        
        <Zoom in={isTypable}><Fab type = "submit"><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
