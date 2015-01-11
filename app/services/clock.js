// services/clock.js
import Ember from 'ember';

export default Ember.Object.extend({
    pulse: Ember.computed.oneWay('_seconds').readOnly(),
    minutePulse: Ember.computed.oneWay('_minutes').readOnly(),
    tick: function () {
        var clock = this;
        var duration = this.get('globalSettings.timeout');
        function _tick() {
            var seconds = clock.get('_seconds');
            var minutes = clock.get('_minutes');
            if (typeof seconds === 'number') {
                clock.set('_seconds', seconds + 1);
                if(Math.floor((seconds + 1) / 60) > minutes) {
                    clock.set('_minutes', minutes + 1);
                }
            }
        }
        setTimeout(Ember.run.bind(_tick), duration);
        // Ember.run.later(_tick, duration);
    }.observes('_seconds').on('init'),
    _seconds: 0,
    _minutes: 0
});

