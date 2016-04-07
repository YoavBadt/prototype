import React from 'react';
import { connect } from 'react-redux';

import { screenFakeChange } from '../../actions/screenFake.js'

const Link = ({ active,children,onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a  href='#' onClick={ e => { e.preventDefault(); onClick(); } }>
      {children}
    </a>
  );
};

const mapStateToProps = ( state, ownProps ) => {
  return {
    active:
      ownProps.filter ===
      state.gridStore.screenFake
  };
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    onClick: () => {dispatch(screenFakeChange(ownProps.filter));
    }
  };
};

const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link);

class ScreenSizeControl extends React.Component {
  render() {
    let style = {
      main:{
        boxSizing: 'border-box',
        borderBottom: '1px solid red',
      },
      section : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      },
      button:{
        margin:0,
        background:'white',
        border:'none',
        width: 60,
        height: 40,
        color: 'red',
        fontFamily: 'monospace'
      },
      vr:{
        margin:0,
        padding:0,
        border: 0,
        width:1,
        height: 40,
        background: 'red',

      }
    }
    return(
      <div style={style.main}>
        <div style={style.section}>
          <FilterLink filter={320} style={style.button}>
          320
          </FilterLink>
          <hr style={style.vr}/>
          <FilterLink filter={720} style={style.button}>
          720
          </FilterLink>
          <hr style={style.vr}/>
          <FilterLink filter={1440} style={style.button}>
          1440
          </FilterLink>
          <hr style={style.vr}/>
          <FilterLink filter={1920} style={style.button}>
          1920
          </FilterLink>
        </div>
      </div>
    )
  }
};
export default ScreenSizeControl
// export default () => (
//   <p>
//     {' '}
//     <FilterLink filter={320}>
//       320
//     </FilterLink>
//     {', '}
//     <FilterLink filter={720}>
//       720
//     </FilterLink>
//     {', '}
//     <FilterLink filter={1440}>
//       1440
//     </FilterLink>
//     <FilterLink filter={1920}>
//       1920
//     </FilterLink>
//   </p>
// );

// class ScreenSizeControl extends React.Component {
//   componentDidMount() {
//     const { store } = this.context;
//     this.unsubscribe = store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//   render() {
//     const props = this.props;
//     const { store } = this.context;
//     const state = store.getState();
//     let style = {
//       main:{
//         boxSizing: 'border-box',
//         borderBottom: '1px solid red',
//       },
//       section : {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'flex-start'
//       },
//       button:{
//         margin:0,
//         background:'white',
//         border:'none',
//         width:220/4 -1,
//         height: 40,
//         color: 'red',
//         fontFamily: 'monospace'
//       },
//       vr:{
//         margin:0,
//         padding:0,
//         border: 0,
//         width:1,
//         height: 40,
//         background: 'red',

//       }
//     }
//     return (
//       <div style={style.main}>
//         <div style={style.section}>
//         <button
//           style={style.button}
//           value={320} 
//           onClick={(e) => store.dispatch(screenFakeChange(e.target.value))}
//         >
//         320
//         </button>
//         <hr style={style.vr}/>
//         <button 
//           style={style.button}
//           value="720" 
//           onClick={(e) => store.dispatch(screenFakeChange(e.target.value))}
//         >
//         720
//         </button>
//         <hr style={style.vr}/>  
//         <button 
//           style={style.button}
//           value="1440" 
//           onClick={(e) => store.dispatch(screenFakeChange(e.target.value))}
//         >
//         1440
//         </button>
//         <hr style={style.vr}/>
//         <button 
//           style={style.button}
//           value="1920" 
//           onClick={(e) => store.dispatch(screenFakeChange(e.target.value))}
//         >
//         1920
//         </button>
//         </div>
//       </div>
//     )
//   };
// };

// ScreenSizeControl.contextTypes = {
//     store: React.PropTypes.object
//   }

// ScreenSizeControl = connect()(ScreenSizeControl)

// export default ScreenSizeControl
