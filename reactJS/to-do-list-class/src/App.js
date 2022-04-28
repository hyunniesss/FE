import React from 'react';
import AddContent from './AddContent';
import List from './List';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoList: [],
            isError: false,
            errMsg: ''
        }
    }
    addTodo = (data) => {
        if(data.trim() === ""){
            document.getElementById("inputTodo").focus();
            this.setState({isError: true, errMsg: '할 일을 작성해주세요.'});
            return;
        }
        if(this.state.todoList.length === 20){
            this.setState({isError:true, errMsg:'목록은 최대 20개까지 가능합니다.'});
            return;
        }
        let content = {
            todo: data,
            isComplete: false,
            isEditable: false,
            isChecked: false
        };
        this.setState({todoList: [content, ...this.state.todoList]});
        this.setState({isError: false, errMsg:''});
    }
    chkTodo = (idx) => {
        let todoList = this.state.todoList;
        todoList[idx].isChecked = !todoList[idx].isChecked;
        this.setState({todoList});
    }
    chngEditable = (idx) => {
        let todoList = this.state.todoList;
        todoList[idx].isEditable = !todoList[idx].isEditable;
        this.setState({todoList});
    }  
    render(){
        return (<>
            <AddContent isError={this.state.isError} errMsg={this.state.errMsg} addTodo={this.addTodo}/>
            <List content={this.state.todoList} chkTodo={this.chkTodo} chngEditable={this.chngEditable}/>
        </>);
    }
}
export default App;