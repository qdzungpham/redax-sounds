import React from 'react';
import Sound from 'react-sound';
import Slider from '@material-ui/lab/Slider';
import Icon from '../icons';

const BASE_URL = 'https://qdzungpham.com/';

const SoundItem = ({
  sound, onPlaySound, onChangeSoundVolume, onResetIsPaused
}) => {
  const onPlay = () => {
    onPlaySound(sound.id);
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
        onClick={onPlay}
        onKeyPress={onPlay}
        role="presentation"
      >
        <Icon name={sound.icon} width={50} />
      </div>
      <Sound url={BASE_URL + sound.audioUrl} playStatus={status} volume={sound.volume} loop />

      <div className="slider">
        <Slider
          className="slider"
          hidden={!sound.isPlaying}
          value={sound.volume}
          onChange={onChangeVolume}
        />
      </div>
    </div>
  );
};

export default SoundItem;
