import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome on Mern Starter Blog Home site!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
