import {scaleCalculator, gridPositions} from './lib';

const defaultState = {
    baseFontSize: 16,
    modularScale: 1.125,
    scale: scaleCalculator(16,1.125),
    baseLineHeight: 24,
    baseLineDivisions: 1,
    baseLineShow : true,
    baseLineColor: 'red',
    baseUnit: 24,
    baseUnitDivisions: 2,
    baseUnitOffset: 0,
    baseUnitShow : true,
    baseUnitColor: 'black',
    gridPositions: gridPositions(12,120,24),
    columnNumber: 12,
    columnWidth: 120,
    columnColor: 'blue',
    gutterWidth: 24,
    screen : 1,
    stage: 1704,
    marginLeft: 108,
    marginRight: 108
  };

export default {
  'state_320':  { ...defaultState, columnNumber:1, columnWidth: 120, screenFake: 320 },
  'state_720':  { ...defaultState, columnNumber:6, columnWidth: 120, screenFake: 720 },
  'state_1440': { ...defaultState, columnNumber:8, columnWidth: 120, screenFake: 1440 },
  'state_1920': { ...defaultState, columnNumber:12, columnWidth: 120, screenFake: 1920 },
};
