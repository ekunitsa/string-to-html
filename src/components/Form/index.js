import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const Form = ({onChangeText}) => {
  const [obj, setObj] = useState({__html: ''});

  useEffect(() => {
    onChangeText(obj); //eslint-disable-next-line
  }, [obj])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setObj((prevState) => ({...prevState, [name]: value }));
  }

  return <textarea value={obj.__html} name="__html" onChange={(e) => handleChange(e)} placeholder="Write HTML here..." />
};

Form.propTypes = {
  onChangeText: PropTypes.func.isRequired
}

export default Form;
