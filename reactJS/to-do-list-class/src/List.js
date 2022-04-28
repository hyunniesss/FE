import React from 'react';
import './List.css';

class List extends React.PureComponent {
    render(){
        return (<>
        <ul>
            {
                this.props.content.map((item, index) =>{
                    return(
                        <li key={index}>
                            <input type="checkbox" checked={item.isChecked} onClick={() => this.props.chkTodo(index)}/>
                            { item.isEditable ? 
                                <input type="text" value={item.todo} onChange={()=>this.props.updTodo(index)}/>
                                : <span className={item.isComplete ? "complete" : ""}>{item.todo}</span> 
                            }
                            <button className="chngButton" onClick={()=>this.props.chngEditable(index)} disabled={item.isEditable} ><img src="../image/modify.png" alt=""/></button>
                        </li>
                    )
                })
            }
        </ul>
        </>);
    }
}

export default List;