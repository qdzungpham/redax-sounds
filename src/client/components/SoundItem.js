import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/lab/Slider';
import Sound from './Sound';
import Icon from '../icons';

const BASE_URL = 'https://qdzungpham.com/';

const SoundItem = ({
  sound, onToggleSound, onChangeSoundVolume, onResetIsPaused
}) => {
  const toggleSound = () => {
    onToggleSound(sound.id);
    if (!sound.isPlaying) onResetIsPaused();
  };
  const onChangeVolume = (event, value) => {
    onChangeSoundVolume(sound.id, value);
  };

  let status;

  if (sound.isPaused) {
    status = Sound.status.PAUSED;
  } else if (sound.isPlaying) {
    status = Sound.status.PLAYING;
  } else {
    status = Sound.status.STOPPED;
  }

  return (
    <div className={sound.isPlaying ? 'sound-item-playing' : 'sound-item'}>
      <div
        className={sound.isPlaying ? 'icon-playing' : 'icon'}
        onClick={toggleSound}
        onKeyPress={toggleSound}
        role="presentation"
      >
        <Icon name={sound.icon} width={50} />
      </div>
      <Sound src={BASE_URL + sound.audioUrl} playStatus={status} volume={sound.volume / 100} loop />

      <div className="slider">
        <Slider hidden={!sound.isPlaying} value={sound.volume} onChange={onChangeVolume} />
      </div>
    </div>
  );
};

SoundItem.propTypes = {
  sound: PropTypes.object.isRequired,
  onToggleSound: PropTypes.func.isRequired,
  onChangeSoundVolume: PropTypes.func.isRequired,
  onResetIsPaused: PropTypes.func.isRequired
};

export default SoundItem;
