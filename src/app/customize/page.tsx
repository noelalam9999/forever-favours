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
  // First image state
  const [text, setText] = useState("");
  const [textLine2, setTextLine2] = useState("");
  const [textLine3, setTextLine3] = useState("");
  const [selectedFont, setSelectedFont] = useState(fonts[0].value);
  const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });
  const [fontSize, setFontSize] = useState(48);
  const [lineHeight, setLineHeight] = useState(1.2);

  // Second image state
  const [text2, setText2] = useState("");
  const [textLine2_2, setTextLine2_2] = useState("");
  const [textLine3_2, setTextLine3_2] = useState("");
  const [selectedFont2, setSelectedFont2] = useState(fonts[0].value);
  const [textPosition2, setTextPosition2] = useState({ x: 50, y: 50 });
  const [fontSize2, setFontSize2] = useState(48);
  const [lineHeight2, setLineHeight2] = useState(1.2);

  // UI state
  const [engraveBothSides, setEngraveBothSides] = useState(false);
  const [selectedImage, setSelectedImage] = useState<"first" | "second">(
    "first"
  );

  // Helper function to get current image's state
  const getCurrentImageState = () => {
    if (selectedImage === "first") {
      return {
        text,
        setText,
        textLine2,
        setTextLine2,
        textLine3,
        setTextLine3,
        selectedFont,
        setSelectedFont,
        textPosition,
        setTextPosition,
        fontSize,
        setFontSize,
        lineHeight,
        setLineHeight,
      };
    } else {
      return {
        text: text2,
        setText: setText2,
        textLine2: textLine2_2,
        setTextLine2: setTextLine2_2,
        textLine3: textLine3_2,
        setTextLine3: setTextLine3_2,
        selectedFont: selectedFont2,
        setSelectedFont: setSelectedFont2,
        textPosition: textPosition2,
        setTextPosition: setTextPosition2,
        fontSize: fontSize2,
        setFontSize: setFontSize2,
        lineHeight: lineHeight2,
        setLineHeight: setLineHeight2,
      };
    }
  };

  const currentState = getCurrentImageState();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-serif font-bold text-gray-900">
              Forever Favours
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
            <div
              className={`flex gap-4 h-96 ${
                engraveBothSides ? "" : "justify-center"
              }`}
            >
              {/* First Image */}
              <div
                className={`relative bg-gray-100 rounded-lg overflow-hidden flex-1 cursor-pointer transition-all duration-200 ${
                  selectedImage === "first"
                    ? "ring-4 ring-amber-500 shadow-lg"
                    : "ring-2 ring-gray-300"
                }`}
                onClick={() => setSelectedImage("first")}
              >
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
                {(text || textLine2 || textLine3) && (
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{
                      top: `${textPosition.y}%`,
                      left: `${textPosition.x}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="text-black font-bold px-4 py-2 rounded flex flex-col items-center"
                      style={{
                        fontFamily: selectedFont,
                        fontSize: `${fontSize}px`,
                        transform: "rotate(90deg)",
                        lineHeight: lineHeight,
                        //   textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      {text && <div>{text}</div>}
                      {textLine2 && <div>{textLine2}</div>}
                      {textLine3 && <div>{textLine3}</div>}
                    </div>
                  </div>
                )}
              </div>

              {/* Second Image - Only show when engraveBothSides is true */}
              {engraveBothSides && (
                <div
                  className={`relative bg-gray-100 rounded-lg overflow-hidden flex-1 cursor-pointer transition-all duration-200 ${
                    selectedImage === "second"
                      ? "ring-4 ring-amber-500 shadow-lg"
                      : "ring-2 ring-gray-300"
                  }`}
                  onClick={() => setSelectedImage("second")}
                >
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
                  {(text2 || textLine2_2 || textLine3_2) && (
                    <div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      style={{
                        top: `${textPosition2.y}%`,
                        left: `${textPosition2.x}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div
                        className="text-black font-bold px-4 py-2 rounded flex flex-col items-center"
                        style={{
                          fontFamily: selectedFont2,
                          fontSize: `${fontSize2}px`,
                          transform: "rotate(90deg)",
                          lineHeight: lineHeight2,
                          //   textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                        }}
                      >
                        {text2 && <div>{text2}</div>}
                        {textLine2_2 && <div>{textLine2_2}</div>}
                        {textLine3_2 && <div>{textLine3_2}</div>}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Text Position Controls - Only show for selected image */}
            {engraveBothSides && (
              <div className="mt-4 space-y-3">
                <div className="text-sm font-medium text-gray-700 mb-2">
                  Editing:{" "}
                  {selectedImage === "first" ? "First Image" : "Second Image"}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Text Position X: {currentState.textPosition.x}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={currentState.textPosition.x}
                    onChange={(e) =>
                      currentState.setTextPosition({
                        ...currentState.textPosition,
                        x: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Text Position Y: {currentState.textPosition.y}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={currentState.textPosition.y}
                    onChange={(e) =>
                      currentState.setTextPosition({
                        ...currentState.textPosition,
                        y: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* Text Position Controls for single image */}
            {!engraveBothSides && (
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
            )}
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Customization Options
            </h3>

            {/* Image Selection Indicator */}
            {engraveBothSides && (
              <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <div className="text-sm font-medium text-amber-800">
                  Currently editing:{" "}
                  {selectedImage === "first" ? "First Image" : "Second Image"}
                </div>
                <div className="text-xs text-amber-600 mt-1">
                  Click on an image above to switch between them
                </div>
              </div>
            )}

            <form className="space-y-6">
              {/* Text Input */}
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Text Line 1
                </label>
                <input
                  type="text"
                  id="text"
                  value={currentState.text}
                  onChange={(e) => currentState.setText(e.target.value)}
                  placeholder="Enter your custom text..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Text Line 2 Input */}
              <div>
                <label
                  htmlFor="textLine2"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Text Line 2
                </label>
                <input
                  type="text"
                  id="textLine2"
                  value={currentState.textLine2}
                  onChange={(e) => currentState.setTextLine2(e.target.value)}
                  placeholder="Enter second line of text..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Text Line 3 Input */}
              <div>
                <label
                  htmlFor="textLine3"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Text Line 3
                </label>
                <input
                  type="text"
                  id="textLine3"
                  value={currentState.textLine3}
                  onChange={(e) => currentState.setTextLine3(e.target.value)}
                  placeholder="Enter third line of text..."
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
                  value={currentState.selectedFont}
                  onChange={(e) => currentState.setSelectedFont(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  {fonts.map((font) => (
                    <option key={font.value} value={font.value}>
                      {font.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Font Size Configurator */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Size: {currentState.fontSize}px
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() =>
                      currentState.setFontSize(
                        Math.max(12, currentState.fontSize - 4)
                      )
                    }
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    disabled={currentState.fontSize <= 12}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>

                  <div className="flex-1">
                    <input
                      type="range"
                      min="12"
                      max="120"
                      value={currentState.fontSize}
                      onChange={(e) =>
                        currentState.setFontSize(parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      currentState.setFontSize(
                        Math.min(120, currentState.fontSize + 4)
                      )
                    }
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    disabled={currentState.fontSize >= 120}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>12px</span>
                  <span>120px</span>
                </div>
              </div>

              {/* Line Height Configurator */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Line Height: {currentState.lineHeight.toFixed(1)}
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() =>
                      currentState.setLineHeight(
                        Math.max(0.5, currentState.lineHeight - 0.1)
                      )
                    }
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    disabled={currentState.lineHeight <= 0.5}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>

                  <div className="flex-1">
                    <input
                      type="range"
                      min="0.5"
                      max="3.0"
                      step="0.1"
                      value={currentState.lineHeight}
                      onChange={(e) =>
                        currentState.setLineHeight(parseFloat(e.target.value))
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      currentState.setLineHeight(
                        Math.min(3.0, currentState.lineHeight + 0.1)
                      )
                    }
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    disabled={currentState.lineHeight >= 3.0}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.5</span>
                  <span>3.0</span>
                </div>
              </div>

              {/* Engrave Both Sides Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="engraveBothSides"
                  checked={engraveBothSides}
                  onChange={(e) => setEngraveBothSides(e.target.checked)}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="engraveBothSides"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Engrave Both sides
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    // Reset first image
                    setText("");
                    setTextLine2("");
                    setTextLine3("");
                    setTextPosition({ x: 50, y: 50 });
                    setFontSize(48);
                    setLineHeight(1.2);
                    // Reset second image
                    setText2("");
                    setTextLine2_2("");
                    setTextLine3_2("");
                    setTextPosition2({ x: 50, y: 50 });
                    setFontSize2(48);
                    setLineHeight2(1.2);
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  Reset All
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
                <li>
                  • When engraving both sides, click on an image to edit it
                </li>
                <li>• Download your customized image when ready</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
