import React from 'react';
import '../css/List.css';
const Item= ({item, index, props}) => {
    return (
        <>
            { item.isEditable ? 
            (
            <input 
                type="text"  
                defaultValue={item.todo} 
            />
            ) : (
            <span 
                onClick={() =>  props.chkTodo(index)} 
                className={item.isChecked ? "complete" : ""}
             >
                {item.todo}
            </span>
            )}
            <button 
                className="btn"
                id={"li_" + index} 
                onClick={()=> item.isEditable ? props.updTodo(index) :props.chngEditable(index)}
                disabled={item.isChecked ? "disabled" : ""}
            >
                {item.isEditable ? 'OK' : <i className="fa fa-edit" />}
            </button>
        </>
    )
}
class List extends React.Component {
    render(){
        return (<>
        <ul>
            {
                this.props.content.map((item, index) =>{
                    return(
                        <li key={`${item.todo}-${index}`}>
                            <Item item={item} index={index} props={this.props}/>
                          
                            <button 
                                className="btn" 
                                onClick={()=>this.props.removeTodo(index)}
                            >
                                <i className="fa fa-trash" />
                            </button>
                        </li>
                    )
                })
            }
        </ul>
        </>);
    }
}

export default List;