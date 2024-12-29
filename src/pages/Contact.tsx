import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="max-w-[800px] w-full mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <form className="space-y-4">
              <div>
                <label className="block text-lg mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500/20 border border-blue-500/30 rounded-md text-blue-300 hover:bg-blue-500/30 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="w-full bg-black text-white py-4 text-center">
        <p>&copy; 2024 Luis. All rights reserved.</p>
        <p>Email: luis_mtz907@live.com</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
