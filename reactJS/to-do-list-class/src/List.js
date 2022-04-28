import React from 'react';
import './List.css';

class List extends React.PureComponent {
    render(){
        return (<>
        <ul>
            {
                this.props.content.map((item, index) =>{
                    console.log(index," : ",item.isEditable);
                    return(
                        <li key={index}>
                            { item.isEditable ? 
                                (<><input type="text" value={item.todo} onChange={()=>this.props.updTodo(index, item.todo)}/>
                                <button className="btnedit" onClick={()=>this.props.chngEditable(index)}>OK</button></> )
                                : (<><span onClick={() => this.props.chkTodo(index)} className={item.isComplete ? "completed" : ""}>{item.todo}</span>
                                <button className="btn" onClick={()=>this.props.chngEditable(index)}><i className="fa fa-edit"></i></button></>)
                            }
                            <button className="btn" onClick={()=>this.props.removeTodo(index)}><i className="fa fa-trash"></i></button>
                            
                        </li>
                    )
                })
            }
        </ul>
        </>);
    }
}

export default List;