import React, { FC, FormEvent, useState, useEffect, createRef, RefObject, Suspense } from "react";
import { useTranslation } from 'react-i18next';
import {
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button,
  Schema,
} from "rsuite";
import Loading from "../../components/Loading";

interface FormState {
  email: string;
  password: string;
}

type Props = {
  onSubmit: (checkStatus: boolean, event: FormEvent<HTMLFormElement>) => void;
};

const { StringType } = Schema.Types;



const Login: FC<Props> = ({ onSubmit }) => {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });

  const { t } = useTranslation('validation');
  const model = Schema.Model({
    password: StringType().isRequired('This field is required.'),
    email: StringType()
      .isEmail(t('Invalid email'))
      .isRequired('This field is required.')
  });
  return (
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={12}>
          <Panel header={<h3>Login</h3>} bordered>
            <Form
              onSubmit={onSubmit}
              onChange={(formValue) => setForm(formValue as FormState)}
              formValue={form}
              model={model}
              checkTrigger="blur"
            >
              <FormGroup>
                <ControlLabel>Email address</ControlLabel>
                <FormControl name="email" type="email" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl name="password" type="password" />
              </FormGroup>
              <FormGroup>
                <ButtonToolbar>
                  <Button appearance="primary" type="submit">
                    Sign in
                  </Button>
                  <Button appearance="link">Forgot password?</Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
  );
};

export default Login;
