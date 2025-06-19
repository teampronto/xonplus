
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  useEffect(() => {
    // Redirect to the external blog
    window.location.href = "https://blog.xposedornot.com/";
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | xonPlus</title>
        <meta name="description" content="Latest security insights, updates and articles about data breaches and credential protection." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-white mb-4">Redirecting to xonPlus Blog...</h1>
          <p className="text-slate-300">
            If you are not automatically redirected, 
            <a 
              href="https://blog.xposedornot.com/" 
              className="text-blue-400 hover:text-blue-300 ml-1"
              target="_blank" 
              rel="noopener noreferrer"
            >
              click here
            </a>.
          </p>
        </div>
      </div>
    </>
  );
}
