import profilePhoto from '../assets/profile.jpeg'  // NEW: Import photo

function Hero({ name, title, bio }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={profilePhoto} alt={name} className="profile-photo" />  {/* NEW: Photo added */}
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{bio}</p>
      </div>
    </section>
  )
}

export default Hero