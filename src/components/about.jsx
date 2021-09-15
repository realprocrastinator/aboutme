function About() {
  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a computer grad student from UNSW. I love exploring new technologies and I am often obsessed with figuring out how things actually work under the hood!! :-)</p>
                    <p>I'm keen on operating systems, micro/macro-kernels, hardware, math, basketball and cooking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="colorlib-about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <h3> System Development </h3>
                  <p>I have experience building user-level OS running in seL4 as well as OS subsystems running in OS161 </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <h3>Data Structures & Algorithms</h3>
                  <p>I have a solid background in math, data structures as well as algorithms </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <h3>Dev Ops</h3>
                  <p>I have experience with tools like Git, Docker, LXC, etc.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <i className="icon-book2" />
                </span>
                <div className="desc">
                  <h3>Finance</h3>
                  <p>I've done my bachelor's in financial engineering and I've been teaching myself quantitative finance</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default About;