
import React from "react";
import "./index.css";
import logo from "../public/voxa-logo-black.png";

function App() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <img src={logo} alt="Voxa Logo" className="w-32 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-black mb-2">VOXA</h1>
        <p className="text-gray-600 text-lg">Marketing on Steroids</p>
        <p className="text-sm text-gray-500 mt-4">
          Modular Marketing Management Software for Modern Agencies, Teams & Solo Marketers.
        </p>
      </div>
    </div>
  );
}

export default App;
