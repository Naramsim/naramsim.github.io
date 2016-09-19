import React from 'react';

class Tech extends React.Component {
	render() {
		return (
			<div>
				{this.props.tech.name}
				{this.props.tech.icon}
			</div>
		);
	}
}

export default Tech;