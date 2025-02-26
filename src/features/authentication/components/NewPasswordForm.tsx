import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const NewPasswordForm = () => {
  const [newPassword, setNewPassword] = useState({
    newPassword: "",
    newPasswordReEnter: "",
  });
  const [passwordValidation, setPasswordValidation] = useState({
    passwordLength: true,
    passwordMatch: true,
  });

  const handlePasswordChange = (e) => {
    setNewPassword((prevValue) => {
      return { ...prevValue, newPassword: e.target.value };
    });
  };

  const handlePasswordReEnter = (e) => {
    setNewPassword((prevValue) => {
      return { ...prevValue, newPasswordValidation: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword.newPassword.trim().length < 6) {
      setPasswordValidation((prevValue) => {
        return { ...prevValue, passwordLength: false };
      });

      return;
    }

    if (newPassword.newPassword !== newPassword.newPasswordReEnter) {
      setPasswordValidation({passwordLength:true, passwordMatch: false})
    
      return;
    }

    //backend logic
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Reset the Password</CardTitle>
              <CardDescription>Enter the new password</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8">
                <div className="grid gap-2">
                  <Label htmlFor="password">New Password</Label>
                  <Input
                    id="password-1"
                    type="password"
                    placeholder="Enter your new password here"
                    required
                    onChange={handlePasswordChange}
                  />
                  {!passwordValidation.passwordLength && (
                    <p className="text-red-500">
                      Password should atleast have six characters.
                    </p>
                  )}

                  <Label htmlFor="password">Re Enter New Password</Label>
                  <Input
                    id="password-2"
                    type="password"
                    placeholder="Re enter your new password here"
                    required
                    onChange={handlePasswordReEnter}
                  />
                  {!passwordValidation.passwordMatch && (
                    <p className="text-red-500">
                      Entered passwords do not match.
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default NewPasswordForm;
