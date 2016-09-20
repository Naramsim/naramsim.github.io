import React from 'react';

class Main extends React.Component {
	render() {
		const css = {
			backgroundImage: `url(${this.props.data.coverPicture})`
		}
		const ghLink = `https://github.com/${this.props.data.githubUsername}`;
		return (
			<div className='main' style={css}>
				<div>
					<div>
						<a href={ghLink}>
							<img className='profilePicture' src={this.props.data.profilePicture} />
						</a>
					</div>
					<div className='margAbove20 xl name'>
						<a href={ghLink}>{this.props.data.name}</a>
					</div>
				</div>
				<div className='width30 l description'>
					{this.props.data.description}
				</div>
			</div>
		);
	}
};

export default Main;