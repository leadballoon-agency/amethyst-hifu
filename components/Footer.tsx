export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="/images/amethyst-logo.avif"
              alt="Amethyst Aesthetics Beauty"
              className="h-14 sm:h-16 w-auto mb-4"
            />
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Expert HIFU non-surgical facelift in Somerset
            </p>
            <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
              Award-finalist beauty salon serving South Petherton & Yeovil
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-800">
              <img
                src="/images/award-finalist-2025.avif"
                alt="Award-Finalist Beauty Salon 2025"
                className="h-16 sm:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm sm:text-base text-neutral-400">
              <li>
                <a href="tel:+447366904007" className="hover:text-white transition-colors">
                  07366 904007
                </a>
              </li>
              <li>
                <a href="mailto:Ismaymarianne@gmail.com" className="hover:text-white transition-colors">
                  Ismaymarianne@gmail.com
                </a>
              </li>
              <li className="mt-3 pt-3 border-t border-neutral-800 leading-relaxed">Unit 2, Old Apple Store</li>
              <li>New Cross Hill</li>
              <li>South Petherton, TA13 5HV</li>
              <li>Somerset, United Kingdom</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Treatments</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://www.amethystaestheticsbeauty.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Main Website</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p className="text-sm sm:text-base mb-2">&copy; 2024 Amethyst Aesthetics Beauty. All rights reserved.</p>
          <p className="text-xs sm:text-sm text-neutral-500 mb-3">
            <a href="/privacy-policy" className="hover:text-white underline transition-colors">Privacy Policy</a>
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
            This site may use Meta tracking technologies to improve user experience and analyze site performance.
          </p>
        </div>
      </div>
    </footer>
  )
}