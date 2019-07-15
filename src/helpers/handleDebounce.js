import _ from 'lodash'

const handleDebounce = (handler, time) => _.flowRight(
  _.debounce(handler, time),
  _.property('target')
);

export default handleDebounce;