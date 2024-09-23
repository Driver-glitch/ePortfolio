import React from "react";
import Footer from "../footer/Footer";


function Port() {
  return (
    <div>
      <video
        className="portVideo"
        src="/videos/video-11.mp4"
        autoPlay
        loop
        muted
      />
      <h1>All Artifacts</h1>
      <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-white card-has-bg click-col">
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <a
                        className="text-white"
                        style={{ textDecoration: "none" }}
                        href="https://1tic-tac-toe-react.netlify.app"
                      >
                        <small className="card-meta mb-2">Tic Tac Toe</small>
                        <img
                          className="card-img"
                          src="/images/img-4.png"
                          alt="G"
                        />
                      </a>
                    </h4>

                    <h4> Play Tic Tac Toe</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white card-has-bg click-col">
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <a
                        className="text-white"
                        style={{ textDecoration: "none" }}
                        href="https://d-react-retro-draw.netlify.app"
                      >
                        <small className="card-meta mb-2">Retro Draw</small>
                        <img
                          className="card-img"
                          src="/images/img-18.png"
                          alt="G"
                        />
                      </a>
                    </h4>

                    <h4> Fill in boxes</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white card-has-bg click-col">
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <a
                        className="text-white"
                        style={{ textDecoration: "none" }}
                        href="https://the-simple-calculator.netlify.app"
                      >
                        <small className="card-meta mb-3">Calculator</small>
                        <img
                          className="card-img"
                          src="/images/img-9.png"
                          alt="G"
                        />
                      </a>
                    </h4>

                    <h4> Need a Calculation?</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-white card-has-bg click-col">
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <a
                        className="text-white"
                        style={{ textDecoration: "none" }}
                        href="https://art-collector-reactt.netlify.app"
                      >
                        <small className="card-meta mb-2">Art Collector</small>
                        <img
                          className="card-img"
                          src="/images/img-4.jpg"
                          alt="G"
                        />
                      </a>
                    </h4>

                    <h4> Search Harvard Art API</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white card-has-bg click-col">
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <a
                        className="text-white"
                        style={{ textDecoration: "none" }}
                        href="https://free-drawn.netlify.app"
                      >
                        <small className="card-meta mb-2">
                          Create Fireworks
                        </small>
                        <img
                          className="card-img"
                          src="/images/img-2.jpg"
                          alt="G"
                        />
                      </a>
                    </h4>

                    <h4> Firework Animation</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white card-has-bg click-col">
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <a
                        className="text-white"
                        style={{ textDecoration: "none" }}
                        href="https://sprite-shadow-dog.netlify.app"
                      >
                        <small className="card-meta mb-3">
                          Sprite Shadow Dog
                        </small>

                        <img
                          className="card-img"
                          src="/images/img-8.jpg"
                          alt="G"
                        />
                      </a>
                    </h4>

                    <h4> Dog that does Tricks</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Port;
