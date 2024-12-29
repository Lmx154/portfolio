import React, { useRef, FormEvent, useState, useEffect } from 'react';

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad?: () => void;
  }
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const recaptchaRef = useRef<number | null>(null);

  useEffect(() => {
    // Load reCAPTCHA script
    window.onRecaptchaLoad = () => {
      setIsRecaptchaLoaded(true);
    };

    if (!document.querySelector('script[src*="recaptcha"]')) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup
      if (recaptchaRef.current !== null) {
        window.grecaptcha?.reset(recaptchaRef.current);
      }
      window.onRecaptchaLoad = undefined;
    };
  }, []);

  useEffect(() => {
    if (isRecaptchaLoaded && window.grecaptcha && !recaptchaRef.current) {
      recaptchaRef.current = window.grecaptcha.render('recaptcha-container', {
        sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
      });
    }
  }, [isRecaptchaLoaded]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const captchaResponse = window.grecaptcha?.getResponse();
      if (!captchaResponse) {
        setError('Please complete the reCAPTCHA verification');
        return;
      }

      const formData = new FormData(formRef.current!);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        captchaResponse
      };

      // Here you would typically make an API call to your backend
      console.log('Sending form data:', data);
      
      // Simulating API call success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      formRef.current?.reset();
      window.grecaptcha.reset();
      
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    }
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="max-w-[800px] w-full mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div id="recaptcha-container"></div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && (
                  <div className="w-full p-3 bg-green-500/20 border border-green-500/30 rounded-md text-green-300 text-center">
                    Message sent successfully!
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-500/20 border border-blue-500/30 rounded-md text-blue-300 hover:bg-blue-500/30 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
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
