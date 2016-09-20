import React from 'react';
import Twemoji from 'react-twemoji';

import Tech from './Tech.jsx';

class Repo extends React.Component {
	render() {
		const techs = this.props.info.techs.map((tech) => {
			return (
				<Tech tech={tech} key={tech.name} />
			);
		});
		const link = `https://github.com/${this.props.info.link}`;
		return (
			<div className='showcase mid'>
				<div className='l repoName'>
					<a href={link}>{this.props.info.name}</a>
				</div>
				<Twemoji className='grayed margAbove20 repoDescription'>
					{this.props.info.description}
				</Twemoji>
				<div className='techRow margAbove20 inline'>
					{techs}
				</div>
			</div>
		);
	}
}

class ShowCase extends React.Component {
	render() {
		let repos = [];
		if (this.props.repos) {
			repos = this.props.repos.map((repo) => {
				return (
					<Repo info={repo} key={repo.name} />
				);
			});
		}
		return (
			<div className='rect'>
				{repos}
			</div>
		);
	}
};

export default ShowCase;