import React from 'react';

import Tech from './Tech.jsx';

class TechGroup extends React.Component {
	render() {
		const rowTech = this.props.type.map((tech) => {
			return (
				<Tech tech={tech} key={tech.name} />
			);
		});
		const classes = `techs ${this.props.size}`;
		return (
			<div className={classes}>
				<div className='l sectionHeader'>{this.props.description}</div>
				<div className='techRow inline margAbove60'>
					{rowTech}
				</div>
			</div>
		);
	}
	
}

class Techs extends React.Component {
	render() {
		let proficient = [];
		let enjoyed = [];
		let toLearn = [];
		if (this.props.techs) {
			proficient = this.props.techs.techsProficient;
			enjoyed = this.props.techs.techsEnjoyed;
			toLearn = this.props.techs.techsToLearn;
		}
		return (
			<div className='rect'>
				<TechGroup type={proficient} description='Techs in which I am expert' size='big' />
				<TechGroup type={enjoyed} description='Techs I loved' size='mid' />
				<TechGroup type={toLearn} description='Techs I would like to learn' size='mid' />
			</div>
		);
	}
};

export default Techs;