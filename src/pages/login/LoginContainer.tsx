import React, { RefObject } from 'react';
import Login from './Login';

type Props = {

}

class LoginContainer extends React.Component<Props, {
  formValue: {},
  formError: {}
}> {
  form!: React.RefObject<HTMLFormElement>;

  constructor(props: Props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e: any) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return <Login onSubmit={this.onSubmit}/>
  }
}

export default LoginContainer