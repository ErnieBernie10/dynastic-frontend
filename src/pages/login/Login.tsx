import React, {
  FC,
  FormEvent,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
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
import { LoginFormModel } from "../../models/Login";

type Props = {
  onSubmit: (user: LoginFormModel) => void;
};

const { StringType } = Schema.Types;

const Login: FC<Props> = ({ onSubmit }) => {
  const [form, setForm] = useState<LoginFormModel>({
    email: "",
    password: "",
  });

  const { t } = useTranslation("validation");
  const model = Schema.Model({
    password: StringType().isRequired("This field is required."),
    email: StringType()
      .isEmail(t("Invalid email"))
      .isRequired("This field is required."),
  });

  const submit = (checkStatus: boolean, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
  } 
  return (
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item colspan={12}>
        <Panel header={<h3>Login</h3>} bordered>
          <Form
            onSubmit={submit}
            onChange={(formValue) => setForm(formValue as LoginFormModel)}
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
