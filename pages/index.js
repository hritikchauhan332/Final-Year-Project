import React, { useCallback, useState } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import { button_primary } from "./palette";

const LoginPage = () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [error, setError] = useState({
    email: false,
    password: false,
    notLoggedIn: false,
  });
  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const handleSubmit = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      setError((prev) => ({
        ...prev,
        notLoggedIn: true,
      }));
      return;
    }
    const { email: userEmail, password: userPassword } = userData;
    if (email === userEmail && password === userPassword) {
      localStorage.setItem("loggedIn", "true");
      window.location.pathname = "/dashboard";
    } else {
      let newError = { email: false, password: false };
      if (!!email && email !== userEmail) newError.email = true;
      if (!!password && password !== userPassword) newError.password = true;
      setError(newError);
    }
  };

  const handleSignUpRedirect = useCallback(() => {
    window.location.pathname = "/signup";
  }, []);

  const handleFocusChange = () => {
    setError({ email: false, password: false });
  };

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
            height: "24rem",
            backgroundColor: "white",
            padding: "2rem",
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
            Login
          </div>
          {error.notLoggedIn && (
            <Message
              error
              header="User Not Registered !"
              style={{ color: "red", marginBottom: "1rem" }}
            />
          )}
          <Form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label key="email">Email</label>
              <input
                onFocus={handleFocusChange}
                style={{
                  marginBottom: !error.email ? "1rem" : "0.25rem",
                  width: "95%",
                  padding: "0.75rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  border: "1px solid #d3d3d3",
                  borderRadius: "0.25rem",
                }}
                fluid
                type="email"
                name="email"
                placeholder="email@abc.com"
                value={email}
                required
                onChange={handleEmailChange}
              />
              {error.email && (
                <Message error header="Wrong Email!" style={{ color: "red" }} />
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1rem",
              }}
            >
              <label key="password">Password</label>
              <input
                onFocus={handleFocusChange}
                style={{
                  width: "95%",
                  marginBottom: !error.password ? "1rem" : "0.25rem",
                  padding: "0.75rem ",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  border: "1px solid #d3d3d3",
                  borderRadius: "0.25rem",
                }}
                fluid
                name="password"
                placeholder="***********"
                value={password}
                required
                onChange={handlePasswordChange}
              />
              {error.password && (
                <Message
                  error
                  header="Password did not match!"
                  style={{ color: "red" }}
                />
              )}
            </div>
            <p>
              Forget Password ?{" "}
              <span
                style={{ color: button_primary, cursor: "pointer" }}
                onClick={handleSignUpRedirect}
              >
                Sign Up
              </span>
            </p>
            <Button
              type="submit"
              style={{
                padding: "0.75rem",
                width: "6rem",
                backgroundColor: button_primary,
                color: "white",
                border: "0px",
                borderRadius: "1rem",
                width: "100%",
                marginTop: "1rem",
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

export default LoginPage;
