import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todos');
  this.route('contact');
  this.route('in-progress');
  this.route('completed');
});

export default Router;
