import React from 'react';
import ReactDOM from 'react-dom';



/*~~~ TaskList ~~~*/
class TaskList extends React.Component {
		render() {
			return(
				<ul>
					{this.props.list}
				</ul>
			)
		}
}


/*~~~ Btn ~~~*/
class Btn extends React.Component {

		handleClick = ()=>{
			this.props.onAction(this.props.task)
		}

		render() {
			return(
				<button onClick={this.handleClick}>{this.props.task}</button>
			)
		}
}


/*~~~ App ~~~*/
class App extends React.Component {
		constructor(props){
			super(props)
			this.state = {
				list: []
			}
		}

		handleAction = (action)=>{
			if (action == "Add") {
				this.setState({
					list: this.state.list.concat("Task number " + (this.state.list.length+1))
				})
			}else if (action == "Remove") {
				this.setState({
					list: this.state.list.slice(0, this.state.list.length-1)
				})
			}else {
				this.setState({
					list: []
				})
			}
		}

		render() {
			let list = this.state.list.map((val, index)=>{
				return(
					<li key={index}>{val}</li>
				)
			})
			return(
				<div className = "mainContainer">
					<div className = "btnsContainer">
						<Btn task="Add" onAction={this.handleAction} className = "btnAdd" />
						<Btn task="Remove" onAction={this.handleAction} className = "btnRemove" />
						<Btn task="Clear" onAction={this.handleAction} className = "btnClear" />
					</div>
					<div className = "listContainer">
						<TaskList list={list}/>
					</div>
				</div>
			)
		}
}


document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(<App />, document.getElementById('app'));
});
