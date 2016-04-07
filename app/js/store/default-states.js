import {scaleCalculator, gridPositions} from './lib';

state = {
    screenFake: 1920,
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
    baseUnitVisibility: 0.5,
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
  }

export default {
  state_320 : {
    ...defaultState,
    screenFake: 320,
    baseFontSize: 14,
    baseUnit: 20,
    baseLineHeight: 20,
    columnNumber:2,
    columnWidth: 120,
    gutterWidth: 20,
    stage: 1,
    margin: 1
    },
  state_720 : {
    ...defaultState,
    screenFake: 720,
    baseFontSize: 16,
    baseUnit: 24,
    baseLineHeight: 24,
    columnNumber:6,
    columnWidth: 116,
    gutterWidth: 24,
    stage: 1,
    margin: 1
    },
  state_1440 : {
    ...defaultState,
    screenFake: 1440,
    baseFontSize: 18,
    baseUnit: 28,
    baseLineHeight: 28,
    columnNumber:8,
    columnWidth: 140,
    gutterWidth: 28,
    stage: 1,
    margin: 1
    },
  state_1920 : {
    ...defaultState,
    screenFake: 1920,
    baseFontSize: 20,
    baseUnit: 30,
    baseLineHeight: 30,
    columnNumber:12,
    columnWidth: 150,
    gutterWidth: 30,
    stage: 1,
    margin: 1
    }
};
