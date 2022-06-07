import React from 'react';
import '../css/AddContent.css';

class AddContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo: ""
        };
    }
    updTodo = (e) =>{
        this.setState({todo:e.target.value});
    }
    add = (todo) => {
       const reVal = this.props.addTodo(todo);
        if (reVal) {
            this.setState({todo:""});    
        }
    }
    addTodo = (e) => {
        if(e.keyCode === 13){
            this.add(this.state.todo);
        }
    }
    render(){

        return (
            <div>
                <div className="addContainer">
                    <input type="text" id="inputTodo" value={this.state.todo} onKeyUp={this.addTodo} onChange={this.updTodo} placeholder="할 일을 작성해주세요."/>
                    <button className="btn" onClick={()=>{this.add(this.state.todo);}}><i className="fa fa-plus"></i></button>
                </div>
                {this.props.isError ? <><span className="error">{this.props.errMsg}</span></> : <></>}
            </div>
        );
    }
}

export default AddContent;