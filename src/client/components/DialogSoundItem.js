import React from 'react';
import Slider from '@material-ui/lab/Slider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Icon from '../icons';

const DialogSoundItem = (props) => {
  const { sound, onChangeSoundVolume, onToggleSound } = props;

  const toggleSound = () => {
    onToggleSound(sound.id);
  };

  const onChangeVolume = (event, value) => {
    onChangeSoundVolume(sound.id, value);
  };

  return (
    <ListItem>
      <ListItemIcon>
        <Icon name={sound.icon} width={24} />
      </ListItemIcon>
      <div className="slider-dialog">
        <Slider value={sound.volume} onChange={onChangeVolume} />
      </div>
      <ListItemSecondaryAction>
        <IconButton onClick={toggleSound} aria-label="Timer">
          <i className="material-icons md-24">close</i>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default DialogSoundItem;
