import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

	let arr = [];	// przechowuje aktualną listę zadań

	 class App extends React.Component{		// tworzy przyciski, przekazuje dane do listy zadań
		 constructor(props){
			  super(props);
			  this.state = {
					num: 0,
			  };
		 }

		addTask = () => {
        	this.setState({
            num: ++this.state.num,		// modyfikuje stan: zwiększa ilość zadań
        	})
			arr.push("Task number " + this.state.num)		// dodaje zadanie do listy
    	}

	 	removeTask = () => {
			if (this.state.num >= 1) {
				this.setState({
					num: --this.state.num,		// modyfikuje stan: zmniejsza ilość zadań
			 	})
			}
			arr.pop();		// usuwa ostatnie zadanie z listy
		}

	  	clearTask = () => {
		  this.setState({		// modyfikuje stan: zmniejsza ilość zadań do 0
			 	num: 0,
			})
			arr.length = 0;	// usuwa wszystkie zadania z listy
		}


 	    render(){
 	        return (
				  <div className = "mainContainer">
					  <div className = "btnsContainer">
						  	<button className = "btnAdd" onClick={this.addTask}>Add</button>
						 	<button className = "btnRemove" onClick={this.removeTask}>Remove</button>
						 	<button className = "btnClear" onClick={this.clearTask}>Clear</button>
					  </div>
					  <Container tasks = {this.state.num}/>
				  </div>
			  )
 	    }
 	}


	class Container extends React.Component{		// tworzy listę zadań

		list = () =>{
			return (
				arr.map((elem, index)=>{
					return(
						<li key={index}>{elem}</li>
					)
				})
			)
		}

		render(){
			return (
				 <div className = "listContainer">
				 	<ul>
				 		{this.list()}
				 	</ul>
				 </div>
			)
		}
  }





	ReactDOM.render(
	    <App />,
	    document.getElementById('app')
	);
});
