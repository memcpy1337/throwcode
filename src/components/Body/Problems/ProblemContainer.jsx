import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProblemsThunkCreator } from '../../../redux/reducers/problemsPage';
import Problems from './Problems';

class ProblemContainer extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProblems();
  }
  render() {
    return (
      <Problems problems={this.props.problems} isFetchingProblems={this.props.isFetchingProblems} />
    )
  }

}


let mapStateToProps = (state) => {
  return {
    isFetchingProblems: state.problemsPage.isFetchingProblems,
    problems: state.problemsPage.problems,
  }
}

export default connect(mapStateToProps, {getProblems: getProblemsThunkCreator})(ProblemContainer);