'use strict';

module.exports = function(app) {
  app.controller('DemoController', function() {
    this.posts = [{
      title: 'First Post',
      contents: 'What\'s the buzz?',
      mutable: true
    }, {
      title: 'Second Post',
      contents: 'Tell me what\'s happening'
    }, {
      title: 'Third Post',
      contents: 'What\'s the buzz',
      mutable: true
    }];
    this.title = 'Awesome Title';
    this.contents = 'Hello World';
  });
};