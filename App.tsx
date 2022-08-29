import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div>
      <h1>{props.msg}</h1>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    msg: state.msg,
    num: state.num,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // const action = {type: ''}
    increase: (who) => dispatch({ type: 'increase', who }),
    decrease: (who) => dispatch({ type: 'decrease', who }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
