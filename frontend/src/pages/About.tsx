export function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-neutral-off-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-neutral-almost-black mb-6">
          About Parkrun Accessibility
        </h1>
        <div className="prose text-neutral-dark-grey">
          <p className="mb-4">
            Our mission is to help make Parkrun events more accessible to everyone, 
            regardless of mobility, visual, or hearing impairments.
          </p>
          <p>
            We provide detailed accessibility information for Parkrun locations 
            to help you choose the best events for your needs.
          </p>
        </div>
      </div>
    </div>
  )
}