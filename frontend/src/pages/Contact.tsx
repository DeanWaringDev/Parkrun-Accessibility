export function Contact() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-neutral-off-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-neutral-almost-black mb-6">
          Contact Us
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-neutral-dark-grey mb-6">
            Have questions about accessibility at a specific Parkrun? Found incorrect information? 
            We'd love to hear from you!
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-almost-black mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-neutral-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-almost-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-neutral-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-almost-black mb-2">
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-3 py-2 border border-neutral-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              >
                <option value="">Select a topic</option>
                <option value="accessibility-report">Accessibility Report</option>
                <option value="incorrect-info">Incorrect Information</option>
                <option value="feature-request">Feature Request</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-almost-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-3 py-2 border border-neutral-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-vertical"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-brand-orange text-white font-medium py-2 px-4 rounded-md hover:bg-brand-orange-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}