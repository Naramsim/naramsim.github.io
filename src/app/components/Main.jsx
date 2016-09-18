import React from 'react';
import ReactDom from 'react-dom';
import Axios from 'axios';

const Main = React.createClass({
	getInitialState: function() {
		return {
			username: '',
			email: '',
			location: '',
		};
	},
	componentDidMount: function() {
		const _this = this;
		this.serverRequest = Axios.get(this.props.source).then((result) => {
			console.log(result)
			var user = result.data;
			_this.setState({
				username: user.name,
				email: user.email,
				location: user.location,
			});
		});
	},
	componentWillUnmount: function() {
		this.serverRequest.abort();
	},
	render() {
		return (
			<div>
				<div>{this.state.username}</div>
				<div>{this.state.email}</div>
				<div>{this.state.location}</div>
			</div>
		);
	}
});

ReactDom.render(
	<Main source='https://api.github.com/users/naramsim'/>, 
	document.getElementById('full')
);
