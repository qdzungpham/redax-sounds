const initialSoundPlayers = {
  0: {
    id: 0,
    name: 'Light Rain',
    isPlaying: false,
    volume: 50,
    audioUrl: 'rain_light.ogg',
    icon: 'rainLight'
  },
  1: {
    id: 1,
    name: 'Normal Rain',
    isPlaying: false,
    volume: 50,
    audioUrl: 'rain_normal.ogg',
    icon: 'rainNormal'
  },
  2: {
    id: 2,
    name: 'Thunders',
    isPlaying: false,
    volume: 50,
    audioUrl: 'rain_thunders.ogg',
    icon: 'rainThunders'
  }
};

const selectedId = [1, 2];
// console.log(
//   selectedId.map(id => ({
//     ...initialSoundPlayers[id],
//     isPlaying: true
//   }))
// );
const s = [];

selectedId.forEach((id) => {
  s.push({
    ...initialSoundPlayers[id],
    isPlaying: true
  });
});

// console.log(s);

const a = Object.values(initialSoundPlayers);

const b = a.map(item => ({
  ...item,
  isPlaying: true
}));
console.log(initialSoundPlayers);
// console.log(Object.assign({}, b));
// console.log(Object.assign({}, a));
