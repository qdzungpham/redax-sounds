import {
  TOGGLE_PLAY,
  CHANGE_SOUND_VOLUME,
  TOGGLE_PAUSE,
  TOGGLE_PAUSE_MAIN_PLAYER,
  RESET_IS_PAUSED,
  CHANGE_SYSTEM_VOLUME,
  TOGGLE_SOUND_MANAGER_DIALOG,
  TOGGLE_TIMER_DIALOG,
  ENABLE_TIMER
} from './constants';

export const toggleSound = id => ({
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

export const changeSystemVolume = value => ({
  type: CHANGE_SYSTEM_VOLUME,
  payload: value
});

export const toggleTimerDialog = value => ({
  type: TOGGLE_TIMER_DIALOG,
  payload: value
});

export const toggleSoundManageDialog = value => ({
  type: TOGGLE_SOUND_MANAGER_DIALOG,
  payload: value
});

export const enableTimer = minutes => ({
  type: ENABLE_TIMER,
  payload: minutes
});
