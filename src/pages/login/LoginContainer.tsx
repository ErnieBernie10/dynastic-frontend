import React from "react";
import Login from "./Login";
import { RootState } from "../../reducers";
import { connect, ConnectedProps } from "react-redux";
import { LoginFormModel } from "../../models/Login";
import { login } from "../../actions";
import { Layout } from "../../layout/Layout";
import { push } from "connected-react-router";
import { Dispatch } from "redux";

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

  async onSubmit(form: LoginFormModel) {
    await this.props.login(form).payload;
    this.props.push('/dashboard');
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
const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => {
  return {
    login: (body: LoginFormModel) => dispatch(login(body)),
    push: (path: string) => dispatch(push(path))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(LoginContainer);
