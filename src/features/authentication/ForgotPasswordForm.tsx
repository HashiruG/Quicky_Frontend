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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ThumbsUp } from "lucide-react";

import api from "../../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [requestSuccess, setRequestSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setErrorMessage("");
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("auth/forgot-password", {
        username: userName,
      });
      if (response.status === 200) {
        setRequestSuccess(true);
        // redirect to login page
        setTimeout(() => {
          navigate("/");
        }, 7000);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setErrorMessage("No user found with the given username.");
      } else {
        setErrorMessage("An errored, please try again later.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          {requestSuccess && (
            <Alert className="py-5">
              <ThumbsUp className="h-10 w-10" />
              <AlertTitle className="ml-5">
                Password reset link has been sent to your email address. Check
                it out.
              </AlertTitle>
              <AlertDescription className="ml-5">
                This page will be redirected to login page shortly.
              </AlertDescription>
            </Alert>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="text-4xl">Forgot Password</CardTitle>
              <CardDescription>
                Enter your email to reset your password.
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
                    value={userName}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Reset password
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

export default ForgotPasswordForm;
