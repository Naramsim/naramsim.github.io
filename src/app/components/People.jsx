import React from 'react';

class Person extends React.Component{
	render() {
		return (
			<div>
				{this.props.person.name}
				{this.props.person.ghLink}
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
		return (
			<div>
				{rowPeople}
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
				<PeopleGroup people={friends} />
				<PeopleGroup people={admired} />
			</div>
		);
	}
};

export default Peoples;