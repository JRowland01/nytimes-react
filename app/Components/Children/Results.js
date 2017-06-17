var React = require('react');

// The Results component which allows the results to appear
var Results = React.createClass({

	getInitialState: function(){
		return {
			title: "",
			date: "",
			url: "",
			results: []
		}
	},

	clickToSave: function(result){
		this.props.saveArticle(result.headline.main, result.pub_date, result.web_url);
	},

	componentWillReceiveProps: function(nextProps){
		var that = this;
		var myResults = nextProps.results.map(function(search, i){
			var boundClick = that.clickToSave.bind(that, search);
			return <div className="list-group-item" key={i}><a href={search.web_url} target="_blank">{search.headline.main}</a><br />{search.pub_date}<br /><button type="button" className="btn btn-primary" style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Save</button></div>
		});

		this.setState({results: myResults});
	},
	
	// Render the function, allowing the component to be viewed by the user
	render: function(){
		return(

			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title text-center"><strong>Results</strong></h3>
				</div>
				<div className="panel-body">
						{this.state.results}
				</div>
			</div>

		)
	}
});

// Exports the Saved component so other files can utilize it
module.exports = Results;