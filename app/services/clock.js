// services/clock.js
import Ember from 'ember';

export default Ember.Object.extend({
    pulse: Ember.computed.oneWay('_seconds').readOnly(),
    minutePulse: Ember.computed.oneWay('_minutes').readOnly(),
    tick: function () {
        var clock = this;
        Ember.run.later(function () {
            var seconds = clock.get('_seconds');
            var minutes = clock.get('_minutes');
            if (typeof seconds === 'number') {
                clock.set('_seconds', seconds + 1);
                if(Math.floor((seconds + 1) / 60) > minutes) {
                    clock.set('_minutes', minutes + 1);
                }
            }
        }, this.get('globalSettings.timeout'));
    }.observes('_seconds').on('init'),
    _seconds: 0,
    _minutes: 0
});

