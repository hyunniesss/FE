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
                <div>
                    <input type="text" id="inputTodo" value={this.state.todo} onChange={this.updTodo}/>
                    <button type="button" onClick={()=>{this.props.addTodo(this.state.todo); this.resetTodo()}}>
                        <img src="../image/plus.png" alt="추가" />
                    </button>
                </div>
                {this.props.isError ? <><span className="error">{this.props.errMsg}</span></> : <></>}
            </div>
        );
    }
}

export default AddContent;