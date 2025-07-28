"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const fonts = [
  { name: "Arial", value: "Arial, sans-serif" },
  { name: "Times New Roman", value: "Times New Roman, serif" },
  { name: "Georgia", value: "Georgia, serif" },
  { name: "Verdana", value: "Verdana, sans-serif" },
  { name: "Helvetica", value: "Helvetica, sans-serif" },
  { name: "Courier New", value: "Courier New, monospace" },
  { name: "Brush Script MT", value: "Brush Script MT, cursive" },
  { name: "Comic Sans MS", value: "Comic Sans MS, cursive" },
  { name: "Impact", value: "Impact, sans-serif" },
  { name: "Lucida Console", value: "Lucida Console, monospace" },
];

export default function CustomizePage() {
  const [text, setText] = useState("");
  const [selectedFont, setSelectedFont] = useState(fonts[0].value);
  const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-serif font-bold text-gray-900">
              THE ÈLLIANCE
            </h1>
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Customize Your Design
          </h2>
          <p className="text-gray-600">
            Add personalized text to your image with custom fonts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Preview
            </h3>
            <div className="flex gap-4 h-96">
              {/* First Image */}
              <div className="relative bg-gray-100 rounded-lg overflow-hidden flex-1">
                {/* Cake Knife SVG Background */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1753723992/cake-knife-illustration-hand-drawn-600nw-2595916703_pttryr.webp"
                      alt="Cake Knife"
                      width={200}
                      height={400}
                      className="opacity-20 transform"
                    />
                  </div>
                  <div className="text-center relative z-10">
                    {/* <div className="w-32 h-32 bg-white rounded-full border-2 border-amber-400 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-amber-600 text-2xl">È</span>
                    </div> */}
                    {/* <p className="text-amber-600 text-sm">Sample Product Image</p> */}
                  </div>
                </div>

                {/* Text Overlay */}
                {text && (
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{
                      top: `${textPosition.y}%`,
                      left: `${textPosition.x}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="text-black text-4xl font-bold px-4 py-2 rounded"
                      style={{
                        fontFamily: selectedFont,
                        //   textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      {text}
                    </div>
                  </div>
                )}
              </div>

              {/* Second Image */}
              <div className="relative bg-gray-100 rounded-lg overflow-hidden flex-1">
                {/* Second Image Background */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1753723992/cake-knife-illustration-hand-drawn-600nw-2595916703_pttryr.webp"
                      alt="Cake Knife"
                      width={200}
                      height={400}
                      className="opacity-20 transform"
                    />
                  </div>
                  <div className="text-center relative z-10">
                    {/* <div className="w-32 h-32 bg-white rounded-full border-2 border-amber-400 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-amber-600 text-2xl">È</span>
                    </div> */}
                    {/* <p className="text-amber-600 text-sm">Sample Product Image</p> */}
                  </div>
                </div>

                {/* Text Overlay for Second Image */}
                {text && (
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{
                      top: `${textPosition.y}%`,
                      left: `${textPosition.x}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="text-black text-4xl font-bold px-4 py-2 rounded"
                      style={{
                        fontFamily: selectedFont,
                        //   textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      {text}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Text Position Controls */}
            <div className="mt-4 space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Text Position X: {textPosition.x}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={textPosition.x}
                  onChange={(e) =>
                    setTextPosition({
                      ...textPosition,
                      x: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Text Position Y: {textPosition.y}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={textPosition.y}
                  onChange={(e) =>
                    setTextPosition({
                      ...textPosition,
                      y: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Customization Options
            </h3>

            <form className="space-y-6">
              {/* Text Input */}
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Text
                </label>
                <input
                  type="text"
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your custom text..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Font Selection */}
              <div>
                <label
                  htmlFor="font"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Font
                </label>
                <select
                  id="font"
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  {fonts.map((font) => (
                    <option key={font.value} value={font.value}>
                      {font.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Font Preview */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Preview
                </label>
                <div
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  style={{ fontFamily: selectedFont }}
                >
                  {text || "Preview text will appear here"}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setText("");
                    setTextPosition({ x: 50, y: 50 });
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="flex-1 px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  Download Image
                </button>
              </div>
            </form>

            {/* Instructions */}
            <div className="mt-8 p-4 bg-amber-50 rounded-lg">
              <h4 className="text-sm font-medium text-amber-800 mb-2">
                How to use:
              </h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Enter your custom text in the text field</li>
                <li>• Select a font from the dropdown menu</li>
                <li>• Use the sliders to position your text</li>
                <li>• Preview your changes in real-time</li>
                <li>• Download your customized image when ready</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
