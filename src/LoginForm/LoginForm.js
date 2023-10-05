import "./LoginForm.css";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

const LoginForm = () => {
  return (
    <Panel backgroundColor="blue">
        <Input
          label="Username: "
          type="text"
          inputId="username"
          isRequired = {true}
        ></Input>
        <Input
          label="Password: "
          type="password"
          inputId="password"
          isRequired = {true}
        ></Input>
        <Input
          label="Remember Me"
          type="checkbox"
          inputId="remember"
          isRequired = {false}
        ></Input>
        <Button
        text="Submit"
      />
    </Panel>

  );
};

export default LoginForm;
