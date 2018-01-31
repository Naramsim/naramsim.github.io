import React from 'react';
import inView from 'in-view';

class Person extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		inView(`#${this.elem.id}`).once('enter', () => {this.elem.classList.add('viewed')})
	}
	render() {
		const ghLink = `https://github.com/${this.props.person.ghLink}`;
		const pictureSrc = `https://github.com/${this.props.person.ghLink}.png?size=80`;
		const personId = `p${new Date().getTime()}`;
		return (
			<div className='paddHori10 person margVert30 delayChild defaultTiming' id={personId} ref={person => this.elem = person}>
				<a href={ghLink}>
					<img className='profilePictureMicro' src={pictureSrc} />
				</a>
				<div className='margAbove10'>{this.props.person.name}</div>
			</div>
		);
	}
};

class PeopleGroup extends React.Component{
	render() {
		const rowPeople = this.props.people.map((person) => {
			return (
				<Person person={person} key={person.name} />
			);
		});
		const description = this.props.type === 'friends' ? 
							'Friends with whom I code' : 
							'Contributors I admire'
		return (
			<div className='peoples mid'>
				<div className='l sectionHeader'>{description}</div>
				<div className='margAbove60 inline people'>{rowPeople}</div>
			</div>
		);
	}
};

class Peoples extends React.Component{
	render() {
		let friends = [];
		let admired = []; 
		if (this.props.people) {
			friends = this.props.people.githubFriends;
			admired = this.props.people.githubAdmired;
		}
		return (
			<div className='rect'>
				<PeopleGroup people={friends} type='friends'/>
				<PeopleGroup people={admired} type='admired'/>
			</div>
		);
	}
};

export default Peoples;