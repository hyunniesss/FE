import React, {useState} from 'react';

function App(){
    const [todo, setTodo] = useState("");
    const [todolist, setTodolist] = useState([]);
    const submitFunc = (e) => {
        e.preventDefault();
        if(e.target.value === ""){
            return;
        }
        setTodolist((todolist) =>[todo, ...todolist]);
        setTodo("");
        
    }
    const changeFunc = (e) => {
        setTodo(e.target.value);
    }
    const checkEvent = (i) => {
        let el = document.getElementById("li_"+i);
        console.log(el);
        // if(el.style.textDecorationLine === "line-through"){
        //     el.style.textDecorationLine='';
        // } else {
        //     el.style.textDecorationLine='line-through';
        // }
       // e.target.style.textDecorationLine === "line-through"
    }
    return (
        <div>
            <h3>TODO({todolist.length})</h3>
            <form onSubmit={submitFunc}>
                <input type="text" onChange={changeFunc} value={todo}/>
                <button type="button" onClick={submitFunc} >ADD LIST</button>
            </form>
            <hr />
            {todolist.map((data)=><li id={"li_"+data.id}><label><input type='checkbox' onClick={checkEvent(data.id)} value={data} />{data}</label></li>)}
        </div>
    );

}

export default App;