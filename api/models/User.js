/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var gravatar = require('gravatar');

module.exports = {

	attributes: {

    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      required: true
    },

    gravatarImage: function(size) {
      size = size || 25;
      return gravatar.url(this.email, {s: size, r: 'pg', d: 'mm'}, true);
    },

    toJSON: function() {
      console.log('In toJSON', this);
      var user = this.toObject();
      user.avatar = this.gravatarImage();
      // Don't reveal user's password or email
      delete user.password;
      delete user.email;
      return user;
    }

	}

};
