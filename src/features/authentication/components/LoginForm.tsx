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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [loginInput, setLoginInput] = useState({ username: "", password: "" });
  const [passwordValidity, setPasswordValidity] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setLoginInput((prevValue) => {
      return {
        ...prevValue,
        username: e.target.value,
      };
    });
  };

  const handlePasswordChange = (e) => {
    setLoginInput((prevValue) => {
      return {
        ...prevValue,
        password: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginInput.password.trim().length < 6) {
      setPasswordValidity(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/login", loginInput);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);

        navigate("/dashboard/dashboard/today-best");
      }
    } catch (error) {
      setErrorMessage("Invalid credentials. Please try again.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl">Login</CardTitle>
            <CardDescription>
              Enter your account credentials to login
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-8">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email here"
                  required
                  onChange={handleEmailChange}
                  value={loginInput.username}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password here"
                  required
                  onChange={handlePasswordChange}
                  value={loginInput.password}
                />
                {!passwordValidity && (
                  <p className="text-red-500">
                    Password should at least have six characters.
                  </p>
                )}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
};

export default LoginForm;
