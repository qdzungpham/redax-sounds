import React from 'react';

import RainLight from './RainLight';
import RainNormal from './RainNormal';
import RainThunders from './RainThunders';
import RainUnderUmbrella from './RainUnderUmbrella';
import RainOnRoof from './RainOnRoof';
import RainOnWindow from './RainOnWindow';
import RainOnLeaves from './RainOnLeaves';
import RainWater from './RainWater';
import RainOcean from './RainOcean';
import ForestBirds from './ForestBirds';
import ForestCreek from './ForestCreek';
import ForestFire from './ForestFire';
import ForestFrogs from './ForestFrogs';
import ForestGrasshoppers from './ForestGrasshoppers';
import ForestLeaves from './ForestLeaves';
import ForestWaterfall from './ForestWaterfall';
import ForestWind from './ForestWind';
import ForestForest from './ForestForest';
import MeditationBells from './MeditationBells';
import MeditationBowl from './MeditationBowl';
import MeditationFlute from './MeditationFlute';
import MeditationPiano from './MeditationPiano';
import MeditationStones from './MeditationStones';
import MeditationWindChimes from './MeditationWindChimes';

const Icon = (props) => {
  switch (props.name) {
    case 'rain_light':
      return <RainLight {...props} />;
    case 'rain_normal':
      return <RainNormal {...props} />;
    case 'rain_thunders':
      return <RainThunders {...props} />;
    case 'rain_under_umbrella':
      return <RainUnderUmbrella {...props} />;
    case 'rain_on_roof':
      return <RainOnRoof {...props} />;
    case 'rain_on_window':
      return <RainOnWindow {...props} />;
    case 'rain_on_leaves':
      return <RainOnLeaves {...props} />;
    case 'rain_water':
      return <RainWater {...props} />;
    case 'rain_ocean':
      return <RainOcean {...props} />;
    case 'forest_birds':
      return <ForestBirds {...props} />;
    case 'forest_creek':
      return <ForestCreek {...props} />;
    case 'forest_fire':
      return <ForestFire {...props} />;
    case 'forest_forest':
      return <ForestForest {...props} />;
    case 'forest_frogs':
      return <ForestFrogs {...props} />;
    case 'forest_grasshoppers':
      return <ForestGrasshoppers {...props} />;
    case 'forest_leaves':
      return <ForestLeaves {...props} />;
    case 'forest_waterfall':
      return <ForestWaterfall {...props} />;
    case 'forest_wind':
      return <ForestWind {...props} />;
    case 'meditation_bells':
      return <MeditationBells {...props} />;
    case 'meditation_bowl':
      return <MeditationBowl {...props} />;
    case 'meditation_flute':
      return <MeditationFlute {...props} />;
    case 'meditation_piano':
      return <MeditationPiano {...props} />;
    case 'meditation_stones':
      return <MeditationStones {...props} />;
    case 'meditation_wind_chimes':
      return <MeditationWindChimes {...props} />;
    default:
      return <div />;
  }
};

export default Icon;
