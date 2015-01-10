export function initialize(container, application) {
    application.inject('controller', 'clockService', 'service:clock');
}

export default {
  name: 'clock-service',
  initialize: initialize
};
