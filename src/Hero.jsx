function Hero({ name, title, bio }) {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p>{bio}</p>
          {/* {<p>
            I ground myself in <strong>purpose</strong>, nurture my <strong>family</strong>, stay connected to <strong>nature</strong>, and contribute to <strong>community</strong> when I can.
          </p> } */}
        </div>
      </section>
    )
  }
  
  export default Hero