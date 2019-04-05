import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as GitHubActions from '../actions/github'

class GithubData extends Component{
 constructor(props, context) {
    super(props, context);
 }
componentWillMount(){
	console.log('componentWillMount',this.props)
	this.props.actions.fetchGithubData();
}

render(){
	console.log('Render',this.props.gitHubData)

  return (
    <div>
      <div>
        Name: { this.props.gitHubData.login }
      </div>
      <br />
      <div>
        Avatar_url: { this.props.gitHubData.avatar_url }
      </div>
      <br />
      <div>
        events_url: { this.props.gitHubData.events_url }
      </div>
    </div>
  );
}
}



function mapStateToProps(state) {
console.log(state);
  return {
    gitHubData: state.mahaData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GitHubActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubData)

