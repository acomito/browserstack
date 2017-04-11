import { Votes } from '../collections/Votes'


Meteor.methods({
	'Votes.addVote': function(){
		console.log('addVote ran');
		let vote = { number: '1'}
		Votes.insert(vote);
	}
});