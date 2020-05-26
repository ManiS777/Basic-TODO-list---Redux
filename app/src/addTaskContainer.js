import * as React from "react";
import { connect } from 'react-redux';
import { addTodo } from './action/index'
import { removeTodo } from './action/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from "./app";
// const App=()=>(
//     <div>
//         <h1>Hello World asqwed</h1>
//     </div>
// )
class AppContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            task:"",
        }
        this.inputChange=this.inputChange.bind(this);
        this.handleAddButton=this.handleAddButton.bind(this);
        this.displayList=this.displayList.bind(this);
        this.removeTask=this.removeTask.bind(this);
    }
    
    inputChange(e){
        this.setState({task:e.target.value})
    }
    handleAddButton(){
        // this.setState({taskArray:this.state.taskArray.concat(this.state.task)},()=>{
        //     this.setState({task:""})
        // })
        this.setState({task:""})
        console.log("in handleaddbutton function", this.props)
        this.props.handleAction(this.state.task);
        this.displayList();

    }
    displayList(){
        
        const listItems = this.props.todos.map((item,index) =>
        <li key={index}><Link to={`/taskDetails/${item}`}>{item} </Link><FontAwesomeIcon icon={faTimes} 
                                onClick={()=>this.removeTask(index)} color="green"/></li>
      );
      return (
         
          <div>
              <App listItems={listItems}/>
          </div>
        
      );
    }
    removeTask(i){
        // var arr=this.state.taskArray.splice(i,1)
        //     this.setState({taskArray:this.state.taskArray})
        this.props.handleRemove(i);

    }
    render(){
        return(
            <div>
                <div>
                <h1>Hello </h1>
                <label>
                    Enter a task 
                    <input type="text" name="task" value={this.state.task} onChange={this.inputChange}/>
                </label>
                 <button type="button" onClick={this.handleAddButton}>Add Task</button>
                 </div>
                 {this.displayList()}
            
            </div>

        )
    }
}
const mapStateToProps = ({todos}, ownProps) => {
    return({
       todos
     });
    };
const mapDispatchToProps = (dispatch, ownProps) => {
	return({
        handleAction: task => dispatch(addTodo(task)),
        handleRemove:task => dispatch(removeTodo(task))
	});
};
export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);