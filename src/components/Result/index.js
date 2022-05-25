import React from 'react';
import PropTypes from 'prop-types';

const Result = ({obj}) => {
  return <div dangerouslySetInnerHTML={obj} />;
};

Result.propTypes = {
  obj: PropTypes.object.isRequired
}

export default Result;