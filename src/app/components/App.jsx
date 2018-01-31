import React from 'react';
import ReactDom from 'react-dom';
import Axios from 'axios';
import inView from 'in-view';
import createReactClass from 'create-react-class';

import 'reset-css/reset.css';
import '../../style/common.css';
import '../../style/components.css';
import '../../style/desktop.css';
import '../../style/mobile.css';
import '../../style/transitions.css';
import '../../style/initialState.css';
import '../../style/finalState.css';

import Main from './Main.jsx';
import Scrolled from './Scrolled.jsx';

inView.offset(100);

const App = createReactClass({
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
	<App source='./user.json'/>, 
	document.getElementById('app')
);
