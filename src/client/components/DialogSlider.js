import React from 'react';
import Slider from '@material-ui/lab/Slider';

const DialogSlider = (props) => {
  const { sound, onChangeSoundVolume } = props;

  const onChangeVolume = (event, value) => {
    onChangeSoundVolume(sound.id, value);
  };

  return <Slider value={sound.volume} onChange={onChangeVolume} />;
};

export default DialogSlider;
