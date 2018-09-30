import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Slider from '@material-ui/lab/Slider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import { Howler } from 'howler';
import DialogSoundItem from './DialogSoundItem';

const SoundManagerDialog = (props) => {
  const {
    onToggleSoundMangerDialog,
    sounds,
    soundsPlaying,
    onChangeSoundVolume,
    onToggleSound,
    systemVolume,
    onChangeSystemVolume,
    ...other
  } = props;

  const handleClose = () => {
    onToggleSoundMangerDialog(false);
  };

  const changeSystemVolume = (event, value) => {
    Howler.volume(value / 100);
    onChangeSystemVolume(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="sound-manager" {...other}>
      <div>
        <List>
          {soundsPlaying.length === 0 ? (
            <Typography variant="subheading" gutterBottom>
              No sounds selected
            </Typography>
          ) : (
            soundsPlaying.map(id => (
              <DialogSoundItem
                key={id}
                sound={sounds[id]}
                onChangeSoundVolume={onChangeSoundVolume}
                onToggleSound={onToggleSound}
              />
            ))
          )}
        </List>
        <Divider />
        <List>
          <Typography variant="subheading" gutterBottom>
            System Volume
          </Typography>
          <ListItem>
            <ListItemIcon>
              <i className="material-icons md-24">volume_up</i>
            </ListItemIcon>
            <div className="slider-system">
              <Slider value={systemVolume} onChange={changeSystemVolume} />
            </div>
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
};

export default SoundManagerDialog;
