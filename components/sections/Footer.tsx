export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-lg">Building the future of human memory.</p>
        <p className="mt-2 text-sm text-gray-600">
          Privacy-first • Self-hosted • Open source • Community-driven
        </p>
        <div className="mt-6">
          <a 
            href="https://github.com/Bakuutin/mycelia" 
            target="_blank" 
            rel="noopener"
            className="text-white mx-4 hover:text-blue-400 transition-colors duration-200"
          >
            GitHub
          </a>
          <div className="inline-block relative">
            <a 
              href="https://t.me/+Wb-z1oo30283YWEy" 
              target="_blank" 
              rel="noopener"
              className="text-white mx-4 hover:text-blue-400 transition-colors duration-200"
            >
              Telegram Community
            <div className="absolute -top-8 -right-2 transform -rotate-12">
              <div className="text-yellow-400 text-sm font-bold animate-bounce" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                👇 Click here to become a beta tester
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
