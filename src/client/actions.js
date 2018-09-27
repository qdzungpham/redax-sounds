import {
  TOGGLE_PLAY,
  CHANGE_SOUND_VOLUME,
  TOGGLE_PAUSE,
  TOGGLE_PAUSE_MAIN_PLAYER,
  RESET_IS_PAUSED
} from './constants';

export const playSound = id => ({
  type: TOGGLE_PLAY,
  payload: id
});

export const changeSoundVolume = (id, value) => ({
  type: CHANGE_SOUND_VOLUME,
  payload: { id, value }
});

export const togglePauseSound = id => ({
  type: TOGGLE_PAUSE,
  payload: id
});

export const togglePauseMainPlayer = () => ({
  type: TOGGLE_PAUSE_MAIN_PLAYER
});

export const resetIsPaused = () => ({
  type: RESET_IS_PAUSED
});
