import React from 'react';
import classNames from 'classnames';
import Twemoji from 'react-twemoji';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: null
		};
	}
	imageLoaded() {
		this.setState({
			loaded: true
		});
	}
	render() {
		const css = {
			background: `url(${this.props.data.coverPicture}) no-repeat center center scroll #c5c5c5cc / cover`,
			backgroundSize: "cover"
		}
		const ghLink = `https://github.com/${this.props.data.githubUsername}`;
		const mainClasses = classNames({
				main: true,
				loaded: this.state.loaded
			});
		return (
			<div className={mainClasses} style={css}>
				<div>
					<div>
						<a href={ghLink}>
							<img 
								className='profilePicture delay05 defaultTiming' 
								src={this.props.data.profilePicture}
								onLoad={this.imageLoaded.bind(this)} 
								/>
						</a>
					</div>
					<div className='margAbove20 xl name delay1 defaultTiming'>
						<a href={ghLink}>{this.props.data.name}</a>
					</div>
				</div>
				<div className='width30 l description delay07 defaultTiming'>
					<Twemoji>{this.props.data.description}</Twemoji>
					<Twemoji className='m lightBlack'>🎓 {this.props.data.education}</Twemoji>
					<Twemoji className='m lightBlack'>👔 {this.props.data.work}</Twemoji>
				</div>
			</div>
		);
	}
};

export default Main;