import React from 'react';
import './AddContent.css';

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
    resetTodo = () => {
        this.setState({todo:""});
    }
    render(){

        return (
            <div>
                <div className="addContainer">
                    <input type="text" id="inputTodo" value={this.state.todo} onChange={this.updTodo} placeholder="할 일을 작성해주세요."/>
                    <button className="btn" onClick={()=>{this.props.addTodo(this.state.todo);}}><i className="fa fa-plus"></i></button>
                </div>
                {this.props.isError ? <><span className="error">{this.props.errMsg}</span></> : <></>}
            </div>
        );
    }
}

export default AddContent;