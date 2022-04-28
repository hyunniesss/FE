import React, {useState} from 'react';

function App(){
    const [todo, setTodo] = useState("");
    const [todolist, setTodolist] = useState([]);
    const submitFunc = (e) => {
        e.preventDefault();
        if(todo === ""){
            return;
        }
        setTodolist((todolist) =>[todo, ...todolist]);
        setTodo("");
        
    }
    const changeFunc = (e) => {
        setTodo(e.target.value);
    }
    const checkEvent = (idx) => {
        // const el = document.getElementById("li_" + idx);
        // if(el.style.textDecorationLine === "line-through"){
        //     el.style.setProperty('textDecorationLine', '');
        // } else {
        //     el.style.setProperty('textDecorationLine','line-through');
        // }
    }
    return (
        <div>
            <h3>TODO({todolist.length})</h3>
            <form onSubmit={submitFunc}>
                <input type="text" onChange={changeFunc} value={todo}/>
                <button type="button" onClick={submitFunc} >ADD LIST</button>
            </form>
            <hr />
            {todolist.map((data, index)=><li key={index} id={"li_"+index}><input type='checkbox' id={"chk_"+index} onClick={checkEvent(index)} value={data} /><label HtmlFor={"chk_"+index}>{data}</label></li>)}
        </div>
    );

}

export default App;