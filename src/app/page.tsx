import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Promotional Banner */}
      <div className="bg-red-800 text-white text-center py-3 px-4">
        <p className="text-sm font-medium">
          $55 Off Your First Order! Use code Elliance55 at checkout!
        </p>
      </div>

      {/* Header/Navigation */}
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Navigation */}
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                Store
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                Bestsellers
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                About product
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                About us
              </a>
              <Link
                href="/customize"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                Customize
              </Link>
            </div>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center">
              <h1 className="text-2xl font-serif font-bold text-gray-900">
                THE ÈLLIANCE
              </h1>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                Reviews
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                Partnership
              </a>

              {/* Icons */}
              <div className="flex items-center space-x-4">
                <button className="text-gray-700 hover:text-gray-900">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>
                <button className="text-gray-700 hover:text-gray-900 relative">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button className="text-gray-700 hover:text-gray-900">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Panel - Cake Set */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <div className="relative mb-4">
                {/* Gift Box with Cake Set */}
                <div className="bg-white border-2 border-gray-300 rounded-lg p-4 mb-4">
                  <div className="bg-amber-50 rounded-lg p-4">
                    {/* Cake Plate */}
                    <div className="bg-white rounded-full w-32 h-32 mx-auto mb-4 border-2 border-amber-400 relative">
                      <div className="absolute inset-2 border border-amber-400 rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-amber-600 font-serif text-sm">
                            Lynch&apos;s
                          </div>
                          <div className="text-amber-600 text-xs">X.X.2023</div>
                        </div>
                      </div>
                      {/* Pearl decorations */}
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full border border-amber-400"></div>
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full border border-amber-400"></div>
                      <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-amber-400"></div>
                      <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-amber-400"></div>
                    </div>

                    {/* Cake Server */}
                    <div className="flex justify-center">
                      <div className="bg-white border border-amber-400 rounded-lg p-2">
                        <div className="w-16 h-1 bg-amber-400 rounded-full mb-1"></div>
                        <div className="text-amber-600 font-serif text-xs text-center">
                          Lynch&apos;s
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Closed Gift Box */}
                <div className="bg-white border-2 border-gray-300 rounded-lg p-3 w-20 h-16 mx-auto">
                  <div className="text-center text-gray-600 font-serif text-lg">
                    È
                  </div>
                </div>
              </div>

              {/* Gift Icon with Notification */}
              <div className="absolute bottom-2 left-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-amber-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 5a3 3 0 015-2.236A3 3 0 0114.82 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.18C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                        clipRule="evenodd"
                      />
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Panel - Marketing Message */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Choose the set that best emphasizes the uniqueness of your special
              day.
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Personalized, Handcrafted Tableware for Life&apos;s Most
              Meaningful Moments. A Truly Unique Gift.
            </p>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-700 transition-colors duration-200">
              SHOP NOW
            </button>
          </div>

          {/* Right Panel - Champagne Flutes */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <div className="relative mb-4">
                {/* Gift Box with Champagne Flutes */}
                <div className="bg-white border-2 border-gray-300 rounded-lg p-4 mb-4">
                  <div className="bg-amber-50 rounded-lg p-4">
                    {/* Champagne Flutes */}
                    <div className="flex justify-center space-x-4">
                      <div className="relative">
                        <div className="w-8 h-16 bg-white border border-amber-400 rounded-t-full relative">
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-amber-600 font-serif text-xs">
                            Mrs. Lynch
                          </div>
                        </div>
                        <div className="w-4 h-8 bg-white border border-amber-400 mx-auto"></div>
                        <div className="w-6 h-2 bg-white border border-amber-400 rounded-full mx-auto"></div>
                      </div>
                      <div className="relative">
                        <div className="w-8 h-16 bg-white border border-amber-400 rounded-t-full relative">
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-amber-600 font-serif text-xs">
                            Mrs. Lynch
                          </div>
                        </div>
                        <div className="w-4 h-8 bg-white border border-amber-400 mx-auto"></div>
                        <div className="w-6 h-2 bg-white border border-amber-400 rounded-full mx-auto"></div>
                      </div>
                    </div>

                    {/* Ribbon with Tag */}
                    <div className="flex justify-center mt-4">
                      <div className="bg-amber-100 rounded-full px-3 py-1 border border-amber-300">
                        <div className="flex items-center space-x-1">
                          <span className="text-amber-600 font-serif text-xs">
                            È
                          </span>
                          <span className="text-amber-600 font-serif text-xs">
                            ÈLLIANCE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flowers */}
                <div className="absolute bottom-2 left-2">
                  <div className="w-6 h-6 bg-white rounded-full border border-gray-300 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-pink-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Chat Support Icon */}
                <div className="absolute bottom-2 right-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
