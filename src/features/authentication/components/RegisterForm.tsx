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
import React, { useState } from "react";

const RegisterForm = () => {
  const [registerInputs, setRegisterInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function validateEmail(email: string) {
    const emailRegex = /^[a-z][^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function validatePassword(password: string) {
    const capitalLetterRegex = /[A-Z]/;
    const symbolRegex = /[\W_]/;

    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (!capitalLetterRegex.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!symbolRegex.test(password)) {
      return "Password must contain at least one symbol";
    }
    return "";
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    setRegisterInputs((preRegisterInputs) => ({
      ...preRegisterInputs,
      email,
    }));

    if (!validateEmail(email)) {
      setErrors((preErrors) => ({
        ...preErrors,
        email: "Invalid email format",
      }));
    } else {
      setErrors((preErrors) => ({
        ...preErrors,
        email: "",
      }));
    }
  }
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    setRegisterInputs((preRegisterInputs) => ({
      ...preRegisterInputs,
      password,
    }));

    const passwordError = validatePassword(password);
    setErrors((prev) => ({ ...prev, password: passwordError }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!registerInputs.email || !registerInputs.password) {
      alert("Please fill in all fields.");
      return;
    }
    if (errors.email || errors.password) {
      alert("Please fix the errors before submitting.");
      return;
    }
  }

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
                  type="email"
                  placeholder="Enter your email here"
                  required
                  value={registerInputs.email}
                  onChange={handleEmailChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
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
                  value={registerInputs.password}
                  onChange={handlePasswordChange}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={!!errors.email || !!errors.password}
              >
                Register
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
};

export default RegisterForm;
