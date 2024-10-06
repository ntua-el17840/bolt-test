import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    google: any;
  }
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [googleSignInError, setGoogleSignInError] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: '84480911039-ob548jbtnm6k8ossm41lt99lajrt6ffr.apps.googleusercontent.com',
        callback: handleCredentialResponse
      });
      window.google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        { theme: "outline", size: "large" }
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = (response: any) => {
    console.log("Encoded JWT ID token: " + response.credential);
    navigate('/dashboard');
  };

  const handleFallbackLogin = () => {
    console.log("Fallback login used");
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to solveMyProblem</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div id="googleSignInDiv" className="mb-4"></div>
        {googleSignInError && (
          <p className="text-red-500 mb-4">
            Google Sign-In may not work in this environment. Please use the fallback option.
          </p>
        )}
        <button
          onClick={handleFallbackLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Fallback Login (for demo)
        </button>
        <p className="text-sm text-gray-600 mt-4">
          In a production environment, Google Sign-In would work normally. 
          The fallback option is provided for demonstration purposes.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;