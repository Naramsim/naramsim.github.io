import React from 'react';

import Tech from './Tech.jsx';

class SetUp extends React.Component {
	render() {
		let setup = [];
		if (this.props.setup) {
			setup = this.props.setup.map((software) => {
				return (
					<Tech tech={software} key={software.name} />
				);
			});
		}
		return (
			<div className='rect'>
				<div className='techs'>
					{setup}
				</div>
			</div>
		);
	}
};

export default SetUp;