var React = require('react');

// The Search component 
var Search = React.createClass({

	getInitialState: function(){
		return {
			topic: "",
			startYear: "",
			endYear: ""
		}
	},

	// This function handleChange will respond to the user input 
	handleChange: function(event){

    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	// The function that handles the search submission  
	handleClick: function(){
		this.props.setTerm(this.state.topic, this.state.startYear, this.state.endYear);
	},

	// Render the function, allowing the component to be viewed by the user
	render: function(){

		return(

			<div className="panel panel-primary">
				<div className="panel-heading">
					<h2 className="panel-title text-center"><strong>Search</strong></h2>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>
								<input type="text" className="form-control text-center" id="topic" onChange= {this.handleChange} required/>
								<br />

								<h4 className=""><strong>Start Year</strong></h4>
								<input type="text" className="form-control text-center" id="startYear" onChange= {this.handleChange} required/>
								<br />

								<h4 className=""><strong>End Year</strong></h4>
								<input type="text" className="form-control text-center" id="endYear" onChange= {this.handleChange} required/>
								<br />
								
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
							</div>

						</form>
				</div>
			</div>
		)
	}
});

// Exports the Saved component so other files can utilize it
module.exports = Search;