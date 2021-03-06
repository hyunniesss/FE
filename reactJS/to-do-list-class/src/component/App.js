import React from 'react';
import AddContent from './AddContent';
import List from './List';
import Search from './Search';

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
            return false;
        }
        if(this.state.todoList.length === 20){
            this.setState({isError:true, errMsg:'목록은 최대 20개까지 가능합니다.'});
            return false;
        }
        let content = {
            todo: data,
            isComplete: false,
            isEditable: false,
            isChecked: false
        };
        this.setState({todoList: [content, ...this.state.todoList], isError: false, errMsg:''});
        return true;
    }
    chkTodo = (idx) => {
        let todoList = this.state.todoList;
        todoList[idx].isChecked = !todoList[idx].isChecked;
        // console.log/("setState isChecked, "+todoList[idx].isChecked);
        this.setState({todoList});
    }
    chngEditable = (idx) => {
        let todoList = this.state.todoList;
        todoList[idx].isEditable = !(todoList[idx].isEditable);
        this.setState({todoList});
    }
    
    removeTodo = (removeIdx) => {
        // this.state.todoList.splice(removeIdx, 1)
        let todoList = this.state.todoList.filter((value, index) => (removeIdx!==index));
        this.setState({todoList});
    }
    updTodo = (updIdx) => {
        let todoList = this.state.todoList;
        todoList[updIdx].todo = document.getElementById("li_" + updIdx).previousElementSibling.value
        this.setState({todoList});
        this.chngEditable(updIdx);
    }
    render(){
        return (
        <>
            <AddContent isError={this.state.isError} errMsg={this.state.errMsg} addTodo={this.addTodo}/>
            <Search />
            <List content={this.state.todoList} updTodo={this.updTodo} chkTodo={this.chkTodo} chngEditable={this.chngEditable} removeTodo={this.removeTodo}/>
        </>);
    }
}
export default App;