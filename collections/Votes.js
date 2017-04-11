import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Votes = new Mongo.Collection('Votes');


Votes.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Votes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


Votes.schema = new SimpleSchema({
  number: {
    type: String,
  },
});

Votes.attachSchema(Votes.schema);