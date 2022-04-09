import React, { useCallback, useMemo, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { button_primary } from "./palette";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [account, setAccount] = useState(undefined);

  const handleAccountChange = useCallback((event) => {
    setAccount(event.target.value);
  }, []);
  const handleFirstNameChange = useCallback((event) => {
    setFirstName(event.target.value);
  }, []);
  const handleLastNameChange = useCallback((event) => {
    setLastName(event.target.value);
  }, []);
  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const inputConfig = useMemo(
    () => [
      {
        key: "first_name",
        label: "First name",
        placeholder: "First name",
        value: firstName,
        onChange: handleFirstNameChange,
      },
      {
        key: "last_name",
        label: "Last name",
        placeholder: "Last name",
        value: lastName,
        onChange: handleLastNameChange,
      },
      {
        key: "email",
        label: "Email",
        placeholder: "email@abc.com",
        value: email,
        onChange: handleEmailChange,
      },
      {
        key: "password",
        label: "Password",
        placeholder: "**********",
        value: password,
        onChange: handlePasswordChange,
      },
      {
        key: "account",
        label: "Primary Account",
        placeholder: "xxxxxxxxx123",
        value: account,
        onChange: handleAccountChange,
      },
    ],
    [firstName, lastName, password, email, account]
  );

  const allSubmit = useMemo(() => {
    return !!firstName && !!lastName && !!email && !!password && !!account;
  }, [firstName, lastName, email, password, account]);

  const handleSubmit = useCallback(() => {
    localStorage.setItem(
      "user",
      JSON.stringify({ firstName, lastName, email, password, account })
    );
    if (allSubmit) {
      window.location.pathname = "/";
    }
  }, [allSubmit]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#D3D3D3",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ marginTop: "5%" }}>
        <div
          style={{
            width: "24rem",
            height: "32rem",
            backgroundColor: "white",
            padding: "3rem",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Sign Up
          </div>
          <Form onSubmit={handleSubmit}>
            {inputConfig.map((config) => (
              <div>
                <label key={config.key}>{config.label}</label>
                <input
                  style={{
                    marginBottom: "1rem",
                    width: "95%",
                    padding: "0.75rem",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    border: "1px solid #d3d3d3",
                    borderRadius: "0.25rem",
                  }}
                  key={config.key}
                  name={config.key}
                  placeholder={config.placeholder}
                  value={config.value}
                  onChange={config.onChange}
                  required
                />
              </div>
            ))}
            <Button
              type="submit"
              primary
              disabled={!allSubmit}
              style={{
                padding: "0.75rem",
                width: "6rem",
                backgroundColor: button_primary,
                color: "white",
                border: "0px",
                borderRadius: "1rem",
                width: "100%",
                marginTop: "0.5rem",
                cursor: "pointer",
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
