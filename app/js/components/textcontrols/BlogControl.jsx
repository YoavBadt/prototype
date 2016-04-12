import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'
import NumInput2 from '../NumInput2.jsx'

import {changeBlogWidth,changeBlogPosX} from '../../actions/blogPostStateActions'

class BlogPostControl extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();
    let B = state.blogPostState;
    let S = state.gridState;
    let Hjump = S.columnWidthPx + S.gutterWidthPx;
    let gridWidth = 1
    let style = {
      title : {
        lineHeight: 20+'px',
        height: 30,
        margin: 0,
        padding: 0
      },
      section : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end '
      }
    }
    return (
      <div>
        <div style={style.section}>
          <NumInput2
            name="Blog Width"
            label={B.width}
            plus={()=>store.dispatch(changeBlogWidth(B.width + Hjump))}
            minus={()=>store.dispatch(changeBlogWidth(B.width - Hjump))}
          />
          <NumInput2
            name="Blog Margin Left"
            label={B.PositionX}
            plus={()=>store.dispatch(changeBlogPosX(B.PositionX + Hjump))}
            minus={()=>store.dispatch(changeBlogPosX(B.PositionX - Hjump))}
          />
        </div>
      </div>
    )
  };
};

BlogPostControl.contextTypes = {
    store: React.PropTypes.object
  }

BlogPostControl = connect()(BlogPostControl)

export default BlogPostControl
