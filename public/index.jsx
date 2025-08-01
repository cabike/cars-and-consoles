import { useState } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 text-base sm:text-lg">
      <header className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">Cars and Consoles LLC</h1>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-orange-500 p-2 rounded-md"
              aria-label="Toggle navigation menu"
            >
              ☰
            </button>
          </div>
          <nav className="hidden md:flex space-x-4 text-sm sm:text-base">
            <a href="#consoles" className="hover:underline">Consoles</a>
            <a href="#cars" className="hover:underline">Car Parts</a>
            <a href="#about" className="hover:underline">About</a>
          </nav>
        </div>
        {menuOpen && (
          <nav className="md:hidden mt-4 space-y-2 text-sm sm:text-base px-2">
            <a href="#consoles" className="block hover:underline">Consoles</a>
            <a href="#cars" className="block hover:underline">Car Parts</a>
            <a href="#about" className="block hover:underline">About</a>
          </nav>
        )}
      </header>

      <section className="bg-gray-100 py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Retro Gaming Meets Classic Restoration</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Cars and Consoles LLC is your one-stop shop for meticulously restored classic game systems and vintage car parts. We fuse passion, precision, and nostalgia.
          </p>
          <a
            href="https://www.ebay.com/usr/carsandconsoles"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Visit Our eBay Store
          </a>
        </div>
      </section>

      <section id="consoles" className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <img src="/images/retro-console.jpg" alt="Retro Console" className="rounded-2xl shadow-lg w-full h-auto" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">🎮 Retro Console Restoration</h3>
          <p className="text-gray-700 mb-4">
            We specialize in cleaning, repairing, and modernizing vintage game systems. Our services include HDMI mods, capacitor replacements, controller repairs, and shell resprays.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>NES, SNES, N64, PS1, PS2, Dreamcast, and more</li>
            <li>HDMI/RGB output mods for modern TVs</li>
            <li>OEM & aftermarket accessories</li>
          </ul>
        </div>
      </section>

      <section id="cars" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">🚗 Classic Car Parts & Restoration</h3>
            <p className="text-gray-700 mb-4">
              From gauge clusters to trim pieces, we find, clean, and test OEM parts from the golden era of cars. Each piece is ready to bolt in and comes with our quality assurance.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>OEM authenticity verified</li>
              <li>Before-and-after photos provided</li>
              <li>Compatible part cross-referencing</li>
            </ul>
          </div>
          <div>
            <img src="/images/classic-car.jpg" alt="Classic Car Restoration" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">🔧 About Us</h3>
          <p className="text-gray-700">
            Cars and Consoles LLC was founded by passionate restorers who grew up surrounded by Game Boys and GTOs. Whether it’s pixel-perfect mods or factory-correct finishes, we’re committed to bringing the best of the past into your present.
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Cars and Consoles LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
