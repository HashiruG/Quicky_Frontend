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
import {passwordResetService} from "../../services/authentication/api";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewPasswordForm = () => {
  const [searchParams] = useSearchParams();
  const [errorMessage, setErrorMessage] = useState("");
  const token = searchParams.get("token");
  const passwordResetRequest = { token: token, newPassword: "" };
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState({
    newPassword: "",
    newPasswordReEnter: "",
  });

  const [passwordValidation, setPasswordValidation] = useState({
    passwordLength: true,
    passwordMatch: true,
  });

  const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");

    setPasswordValidation((prevValue) => {
      return { ...prevValue, passwordLength: true };
    });

    setNewPassword((prevValue) => {
      return { ...prevValue, newPassword: e.target.value };
    });
  };

  const handlePasswordReEnter = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValidation((prevValue) => {
      return { ...prevValue, passwordMatch: true };
    });

    setNewPassword((prevValue) => {
      return { ...prevValue, newPasswordReEnter: e.target.value };
    });
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword.newPassword.trim().length < 6) {
      setPasswordValidation((prevValue) => {
        return { ...prevValue, passwordLength: false };
      });

      return;
    }

    if (newPassword.newPassword !== newPassword.newPasswordReEnter) {
      setPasswordValidation({ passwordLength: true, passwordMatch: false });
      console.log(newPassword);

      return;
    }

    passwordResetRequest.newPassword = newPassword.newPassword;

    try {
      await passwordResetService(passwordResetRequest);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred. Please try again later.");
    }
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
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default NewPasswordForm;
