
export const scaleCalculator = (baseFontSize,modularScale) => {
  let scale =[];
  for(let i=0; i < 7; i++){
    if(i === 0){
      scale.push(baseFontSize);
    }else{
      scale.push(Math.round(baseFontSize*(Math.pow(modularScale,i))))
    }
  }
  return scale
};

export const gridPositions = (columnNumber,columnWidth,gutterWidth) => {
  let screen = window.innerWidth;
  let stage = ( (columnNumber*columnWidth)+((columnNumber-1)*gutterWidth) );
  let margin = (screen - stage) / 2;
  let grid = [0,margin];
  for(let i=0; i < columnNumber; i++){
    grid.push( columnWidth )
    grid.push( gutterWidth )
    };
  let stuff = (2* columnNumber )+2;
  for(let i=2; i< stuff; i++){
    grid[i] = grid[i] + grid[i-1];
  }
  return grid;
};
