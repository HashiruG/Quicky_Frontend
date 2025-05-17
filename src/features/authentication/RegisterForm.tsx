import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerService } from "../../services/authentication/api";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [registerInput, setRegisterInput] = useState({
    username: "",
    password: "",
  });
  const [passwordValidity, setPasswordValidity] = useState(true);
  const [emailValidity, setEmailValidity] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValidity(true);
    setErrorMessage("");
    setRegisterInput((prevValue) => {
      return {
        ...prevValue,
        username: e.target.value,
      };
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValidity(true);
    setErrorMessage("");
    setRegisterInput((prevValue) => {
      return {
        ...prevValue,
        password: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (registerInput.password.trim().length < 6) {
      setPasswordValidity(false);
      return;
    }

    if (!emailRegex.test(registerInput.username)) {
      setEmailValidity(false);
      return;
    }

    try {
      await registerService(registerInput);
      navigate("/");
    } catch (error) {
      if (error instanceof axios.AxiosError && error.response?.status === 409) {
        setErrorMessage("Email already exists. Please try another one.");
      }else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl">Register</CardTitle>
            <CardDescription>Enter your registration details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-8">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your email here"
                  required
                  value={registerInput.username}
                  onChange={handleEmailChange}
                />
                {!emailValidity && (
                  <p className="text-red-500">
                    Enter a valid email as the username.
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password here"
                  required
                  value={registerInput.password}
                  onChange={handlePasswordChange}
                />
                {!passwordValidity && (
                  <p className="text-red-500">
                    Password should at least have six characters.
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={!registerInput.username || !registerInput.password}
              >
                Register
              </Button>
              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
};

export default RegisterForm;
