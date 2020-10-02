import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../reducers';
import Dashboard from './Dashboard';

type Props = {

}

class DashboardContainer extends React.Component<ConnectedProps<typeof connector>> {

  render() {
    const { user } = this.props;
    return <Dashboard loggedUser={user} />
  }
  
}

const mapStateToProps = (state: RootState) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: Props) => {
  return {

  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(DashboardContainer);