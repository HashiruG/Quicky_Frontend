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

const ForgotPasswordForm = () => {

    const [email, setEmail] = useState("");

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //backend connection
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
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
                    value={email}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Reset password
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
