// var Bookshelf = require('bookshelf');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/shortly');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Yaaay!  Connection established.  Exciting!');
});

var linkSchema = mongoose.Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
});

var userSchema = mongoose.Schema({
  username: String,
  password: String
});

userSchema.methods.encryptPassword = function() {
};

userSchema.methods.checkPassword = function() {
};

linkSchema.methods.shortenUrl = function() {
};

var Link = mongoose.model('Link', linkSchema);
var User = mongoose.model('User', userSchema);

module.exports.Link = Link;
module.exports.User = User;

///////////////////////////////////////////////////
//GETTING STARTED TUTORIAL
// linksSchema.methods.shorten = function () {
//   this.url = this.url.substr(0, 5);
//   console.log('shortened url: ', this.url);
// }

// var Link = mongoose.model('Link', linksSchema);

// var link1 = new Link({url: 'http://www.google.com'});
// console.log('link1 url: ', link1.url);
// link1.shorten();

// link1.save(function (err, link1) {
//   if (err) return console.error(err);
//   console.log('link1 has been saved: ', link1.url);
// });

// Link.find( {url: /^h/ }, function (err, links) {
//   if (err) return console.error(err);
//   console.log(links);
// });
////////////////////////////////////////////////////

// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });


