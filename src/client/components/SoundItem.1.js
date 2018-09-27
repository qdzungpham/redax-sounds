import React from 'react';
import Sound from 'react-sound';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';
import { Howl, Howler } from 'howler';
import Icon from '../icons';

const BASE_URL = 'https://qdzungpham.com/';

Howler;

const SoundItem = (props) => {
  const { sound, onPlaySound, onChangeSoundVolume } = props;

  const onPlay = () => {
    onPlaySound(sound.id);
  };
  const onChangeVolume = (event, value) => {
    onChangeSoundVolume(sound.id, value);
  };
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
