import {
  SOUND_LIST,
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

const setAllIsPausedFalse = (state) => {
  const stateArray = Object.values(state);

  return stateArray.map(item => ({
    ...item,
    isPaused: false
  }));
};

const initialSoundPlayers = {
  ...SOUND_LIST
};

export const soundPlayersReducer = (state = initialSoundPlayers, action) => {
  switch (action.type) {
    case TOGGLE_PLAY:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          isPlaying: !state[action.payload].isPlaying
        }
      };
    case CHANGE_SOUND_VOLUME:
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], volume: action.payload.value }
      };
    case TOGGLE_PAUSE:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          isPaused: !state[action.payload].isPaused
        }
      };
    case RESET_IS_PAUSED:
      return setAllIsPausedFalse(state);
    default:
      return state;
  }
};

export const s = () => {};

const initialMainPlayer = {
  soundsPlaying: [],
  numSoundsPlaying: 0,
  isPlaying: false,
  isPaused: false,
  isSoundMangerDialogOpen: false,
  isTimerDialogOpen: false,
  systemVolume: 100,
  timer: 0
};

export const mainPlayerReducer = (state = initialMainPlayer, action) => {
  const { soundsPlaying } = state;
  const index = soundsPlaying.indexOf(action.payload);
  let isPlaying = false;
  switch (action.type) {
    case TOGGLE_PLAY:
      if (index > -1) {
        soundsPlaying.splice(index, 1);
      } else {
        soundsPlaying.push(action.payload);
      }
      if (soundsPlaying.length > 0) isPlaying = true;
      return {
        ...state,
        soundsPlaying,
        numSoundsPlaying: soundsPlaying.length,
        isPlaying
      };
    case TOGGLE_PAUSE_MAIN_PLAYER:
      return {
        ...state,
        isPaused: !state.isPaused
      };
    case RESET_IS_PAUSED:
      return {
        ...state,
        isPaused: false
      };
    case TOGGLE_SOUND_MANAGER_DIALOG:
      return {
        ...state,
        isSoundMangerDialogOpen: action.payload
      };
    case CHANGE_SYSTEM_VOLUME:
      return {
        ...state,
        systemVolume: action.payload
      };
    case TOGGLE_TIMER_DIALOG:
      return {
        ...state,
        isTimerDialogOpen: action.payload
      };
    case ENABLE_TIMER:
      return {
        ...state,
        timer: action.payload
      };
    default:
      return state;
  }
};
