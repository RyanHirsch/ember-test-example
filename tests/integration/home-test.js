import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('An Integration test', {
    setup: function() {
        var globalTestSettings = Ember.Object.create({   
            timeout: 1 
        });
        App = startApp();
        App.register('global:settings', globalTestSettings, {instantiate: false});
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("Page contents", function() {
  visit('/').then(function() {
      ok(true);
  });
});
