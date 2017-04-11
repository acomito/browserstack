import { Template } from 'meteor/templating';
import { Votes } from '../collections/Votes';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  //old counter variable: this.counter = new ReactiveVar(0);
  //Meteor.subscribe('Votes.allVotes')
});

Template.hello.helpers({
  counter() {
    // OLD RETURN: return Template.instance().counter.get();
    return Votes.find().fetch();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    // old function that ran: instance.counter.set(instance.counter.get() + 1);
    Meteor.call('Votes.addVote')

  },
});
