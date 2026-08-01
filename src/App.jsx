import './App.css'
import FeatureCard from './components/FeatureCard'

const features = [
  {
    title: 'Fast setup',
    description: 'Launch a polished product page in minutes with reusable React components.',
    icon: '⚡',
    accent: '#7c3aed',
  },
  {
    title: 'Built for clarity',
    description: 'Present your value proposition with a clean layout and focused messaging.',
    icon: '✨',
    accent: '#0f766e',
  },
  {
    title: 'Ready to grow',
    description: 'Scale the experience with additional sections, testimonials, and calls to action.',
    icon: '🚀',
    accent: '#c2410c',
  },
]

function App() {
  return (
    <main className="landing-page">
      <section className="hero-section">
        <p className="eyebrow">React props landing page</p>
        <h1>Create a standout first impression.</h1>
        <p className="hero-copy">
          This app showcases a modern hero section and reusable feature cards built with props.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#features">Explore features</a>
          <a className="secondary-btn" href="#about">Learn more</a>
        </div>
      </section>

      <section id="features" className="features-grid">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>

      <section id="about" className="about-section">
        <h2>Why teams love it</h2>
        <p>
          The structure is simple, the content is flexible, and the design feels polished on any screen.
        </p>
      </section>
    </main>
  )
}

export default App
