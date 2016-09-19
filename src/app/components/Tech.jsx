import React from 'react';

class Tech extends React.Component {
	render() {
		const techSrc = `http://svgporn.com/logos/${this.props.tech.icon}.svg`;
		const techName = this.props.tech.name;
		return (
			<div>
				<img className='techLogo' src={techSrc} alt={techName} />
				<div className='m paddHori10'>{techName}</div>
			</div>
		);
	}
}

export default Tech;