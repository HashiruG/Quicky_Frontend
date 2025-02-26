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

const RegisterForm = () => {
  return (
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
              />
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
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
