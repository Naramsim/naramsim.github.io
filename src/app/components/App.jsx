import React from 'react';
import ReactDom from 'react-dom';
import Axios from 'axios';

import 'reset-css/reset.css';
import '../../style/common.css';

import Main from './Main.jsx';
import Scrolled from './Scrolled.jsx';

const App = React.createClass({
	loadData: function() {
		const _this = this;
		Axios.get(this.props.source).then((result) => {
			const data = result.data;
			_this.setState({
				data: data
			});
		});
	},
	getInitialState: function() {
		return {
			data: []
		};
	},
	componentDidMount: function() {
		this.loadData();
	},
	render() {
		return (
			<div>
				<Main data={this.state.data} />
				<Scrolled items={this.state.data} />
			</div>
		);
	}
});

ReactDom.render(
	<App source='https://jsonblob.com/api/jsonblob/57e0230fe4b0dc55a4f6f345'/>, 
	document.getElementById('app')
);
