import React from 'react';
import inView from 'in-view';

class Tech extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		inView(`#${this.elem.id}`).once('enter', () => {this.elem.classList.add('viewed')})
	}
	render() {
		const techSrc = this.props.tech.icon.indexOf('://') === -1 ?
							`https://cdn.svgporn.com/logos/${this.props.tech.icon}.svg` : 
							this.props.tech.icon;
		const techName = this.props.tech.name;
		const techHref = `https://www.google.com/search?q=${this.props.tech.name}&btnI`;
		const techId = `t${new Date().getTime()}`;
		return (
			<div className='paddHori20 tech margVert30 delayChild defaultTiming' id={techId} ref={tech => this.elem = tech}>
				<a href={techHref}>
					<img className='techLogo' src={techSrc} alt={techName} />
				</a>
				<div className='m margAbove5'>{techName}</div>
			</div>
		);
	}
}

export default Tech;