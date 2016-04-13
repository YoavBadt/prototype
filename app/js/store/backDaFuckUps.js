let state_320 = {
    fakeScreen: 320,
    baseFontSize: 16,
    modularScale: 1.2,
    baseLineHeight: 24,
    baseLineDivisions: 1,
    lines: lineCalculator(16,1.2,24,1),
    scale: scaleCalculator(16,1.2),
    baseUnit: 24,
    baseUnitOffset: 16,
    baseUnitDivisions: 1,
    columns: 1,
    columnWidth: 5,
    columnWidthPx: 288,
    gutterWidth: 1,
    gutterWidthPx: 24,
    stage: stageCalculator(320,1,288,24).stage,
    margin: stageCalculator(320,1,288,24).margin
};

let state_720 = {
    fakeScreen: 720,
    baseFontSize: 16,
    modularScale: 1.32,
    baseLineHeight: 24,
    baseLineDivisions: 1,
    lines: lineCalculator(16,1.32,24,1),
    scale: scaleCalculator(16,1.32),
    baseUnit: 24,
    baseUnitOffset: 0,
    baseUnitDivisions: 1,
    columns: 4,
    columnWidth: 5.75,
    columnWidthPx: 138,
    gutterWidth: 1,
    gutterWidthPx: 24,
    stage: stageCalculator(720,4,138,24).stage,
    margin: stageCalculator(720,4,138,24).margin
};

let state_1440 = {
    fakeScreen: 1440,
    baseFontSize: 18,
    modularScale: 1.22,
    baseLineHeight: 26,
    baseLineDivisions: 1,
    lines: lineCalculator(18,1.22,26,1),
    scale: scaleCalculator(18,1.22),
    baseUnit: 26,
    baseUnitOffset: 5,
    baseUnitDivisions: 1,
    columns: 8,
    columnWidth: 5,
    columnWidthPx: 130,
    gutterWidth: 1,
    gutterWidthPx: 26,
    stage: stageCalculator(1440,8,130,26).stage,
    margin: stageCalculator(1440,8,130,26).margin
};

let state_1920 = {
    fakeScreen: 1920,
    baseFontSize: 22,
    modularScale: 1.285,
    baseLineHeight: 32,
    baseLineDivisions: 2,
    lines: lineCalculator(22,1.285,32,2),
    scale: scaleCalculator(22,1.285),
    baseUnit: 32,
    baseUnitOffset: 8,
    baseUnitDivisions: 1,
    columns: 12,
    columnWidth: 4,
    columnWidthPx: 128,
    gutterWidth: 0.5,
    gutterWidthPx: 16,
    stage: stageCalculator(1920,12,128,16).stage,
    margin: stageCalculator(1920,12,128,16).margin
};
