import { SignIn } from "@clerk/clerk-react";
import { memo } from "react";

const Login = memo(() => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to your GamBlock account</p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <SignIn 
            appearance={{
              variables: {
                colorPrimary: "#3b82f6",
                borderRadius: "8px",
                fontFamily: '"Inter", sans-serif'
              }
            }}
            redirectUrl="/"
            signUpUrl="/register"
          />
        </div>
      </div>
    </div>
  );
});

Login.displayName = 'Login';

export default Login;
