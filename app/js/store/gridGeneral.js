export const gridGeneral = (
  state={
    baseLineColor: 'blue',
    baseLineShow: true,
    baseLineVisibility: 0.5,
    baseUnitColor: 'black',
    baseUnitShow : false,
    baseUnitVisibility: 0.5,
    columnColor: 'blue',
    columnShow: true,
    columnVisibility: 0.5,
  },
  action
  )=>{
  switch (action.type) {
    case 'BASE_LINE_SHOW':
      return{
        ...state,
        baseLineShow: !action.payload
      };
    case 'BASE_UNIT_SHOW':
      return{
        ...state,
        baseUnitShow: !action.payload
      };
    case 'COLUMN_SHOW':
      return{
        ...state,
        columnShow: !action.payload
      };
    default:
      return state;
  };
};




