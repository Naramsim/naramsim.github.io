import React from 'react';

import Tech from './Tech.jsx';

class TechGroup extends React.Component {
	render() {
		const rowTech = this.props.type.map((tech) => {
			return (
				<Tech tech={tech} key={tech.name} />
			);
		});
		return (
			<div className='techs'>
				{rowTech}
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
				<TechGroup type={proficient} />
				<TechGroup type={enjoyed} />
				<TechGroup type={toLearn} />
			</div>
		);
	}
};

export default Techs;