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
import {login} from "../../../services/authenticationService"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [passwordValidity, setPasswordValidity] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setLoginInput((prevValue) => {
      return {
        ...prevValue,
        email: e.target.value,
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

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (loginInput.password.trim().length < 6) {
      setPasswordValidity(false);
      return;
    }

    const token = await login(loginInput.email, loginInput.password);
    console.log(token);
    
    if (token !== "Invalid credentials!") {
      navigate("/offers"); 
    } else {
      console.log("Invalid credentials!");
      
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
                  value={loginInput.email}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/"
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
                    Password should atleast have six characters.
                  </p>
                )}
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
