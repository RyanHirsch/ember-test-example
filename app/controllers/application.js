import Ember from 'ember';

export default Ember.Controller.extend({
    seconds: Ember.computed.oneWay('clockService.pulse').readOnly(),
    minutes: Ember.computed.oneWay('clockService.minutePulse').readOnly()
});
