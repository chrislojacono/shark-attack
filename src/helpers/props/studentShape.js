import PropTypes from 'prop-types';

const studentShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isDead: PropTypes.bool.isRequired,
});

export default studentShape;
