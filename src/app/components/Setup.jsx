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
				<div className='setup big'>
					<div className='l sectionHeader'>My working setup</div>
					<div className='techRow inline margAbove60'>
						{setup}
					</div>
				</div>
			</div>
		);
	}
};

export default SetUp;