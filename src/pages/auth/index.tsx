import { SignIn, SignUp } from "@clerk/clerk-react";

export const Auth = () => {
  return (
    <div className="auth-container">
      <SignIn path="/auth" routing="path" signUpUrl="/sign-up" />
      <SignUp path="/sign-up" routing="path" signInUrl="/auth" />
    </div>
  );
};
