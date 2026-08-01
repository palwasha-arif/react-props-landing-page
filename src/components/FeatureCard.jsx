const FeatureCard = ({ title, description, icon, accent }) => {
  return (
    <article className="feature-card" style={{ '--accent': accent }}>
      <div className="feature-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default FeatureCard
