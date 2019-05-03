import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cakes');
  this.route('prices');
  this.route('contact');
  this.route('home');
});

export default Router;
