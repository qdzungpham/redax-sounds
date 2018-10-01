import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/lab/Slider';

const DialogSlider = (props) => {
  const { sound, onChangeSoundVolume } = props;

  const onChangeVolume = (event, value) => {
    onChangeSoundVolume(sound.id, value);
  };

  return <Slider value={sound.volume} onChange={onChangeVolume} />;
};

DialogSlider.propTypes = {
  sound: PropTypes.object.isRequired,
  onChangeSoundVolume: PropTypes.func.isRequired
};

export default DialogSlider;
