import Ember from 'ember';

var settings = Ember.Object.create({
    timeout: 1000
});

export function initialize(container, application) {
   if(!application.testing) {
        application.register('global:settings', settings, {instantiate: false});
    }
    application.inject('service:clock', 'globalSettings', 'global:settings');
}

export default {
  name: 'global-settings',
  initialize: initialize
};
