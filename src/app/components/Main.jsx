import React from 'react';
import ReactDom from 'react-dom'

const Main = React.createClass({
	render() {
		return (
			<div>Ale</div>
		);
	}
});

ReactDom.render(<Main />, document.getElementById('full'))
