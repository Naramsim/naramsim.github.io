import React from 'react';

import Peoples from './People.jsx';
import ShowCase from './ShowCase.jsx';
import Techs from './Techs.jsx';
import SetUp from './SetUp.jsx';

class Scrolled extends React.Component {
	render() {
		return (
			<div className='scrolled'>
				<ShowCase repos={this.props.items.showcase} />
				<Peoples people={this.props.items.people} />
				<Techs techs={this.props.items.techs} />
				<SetUp setup={this.props.items.WorkSetup} />
			</div>
		);
	}
};

export default Scrolled;