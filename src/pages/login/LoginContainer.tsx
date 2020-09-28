import React from "react";
import Login from "./Login";
import { RootState } from "../../reducers";
import { connect, ConnectedProps } from "react-redux";
import { LoginFormModel } from "../../models/Login";
import { login } from "../../actions";
import { Layout } from "../../layout/Layout";

type Props = {};

class LoginContainer extends React.Component<
  ConnectedProps<typeof connector>,
  {
    formValue: {};
    formError: {};
  }
> {
  constructor(props: ConnectedProps<typeof connector>) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(form: LoginFormModel) {
    this.props.login(form);
  }

  render() {
    return (
      <Layout>
        <Login onSubmit={this.onSubmit} />
      </Layout>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: Props) => {
  return {
    login: (body: LoginFormModel) => dispatch(login(body)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(LoginContainer);
