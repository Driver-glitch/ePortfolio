import React from 'react';
import './HomeCards.css';
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div>
      {/* Welcome message */}

      <div class="career-goal-container">
    <div class="welcome-section">
        <h1>Introduction</h1>
        <p>I'm Daniel Rivera, a Site Reliability Engineer and USMC Veteran, striving to create scalable and reliable systems.</p>
    </div>
    <h1>Career Goal</h1>
    
    <section class="personal-statement">
        <h2>Personal Statement</h2>
        <p>
            I am driven to expand my knowledge in software engineering to create efficient, reliable, and scalable solutions. My goal is to use technology to solve real-world problems, making systems more efficient for users and organizations. I am passionate about cloud computing and site reliability, and I aspire to make significant contributions to the tech industry.
        </p>
    </section>

    <section class="long-term-goals">
        <h2>Long-term Career Goals</h2>
        <ul>
            <li>Become a Senior Site Reliability Engineer (SRE) for my company.</li>
            <li>Contribute to innovative projects that improve system performance and reliability.</li>
            <li>Mentor and guide junior engineers, sharing best practices in automation and infrastructure management.</li>
            <li>Continue expanding my expertise in cloud computing and DevOps methodologies.</li>
        </ul>
    </section>

    <section class="current-skills">
        <h2>Current Skills, Interests, and Experiences</h2>
        <p>
            My current skill set includes a strong foundation in cloud platforms such as AWS and Azure, CI/CD tools like Azure DevOps, and infrastructure automation tools like Terraform. I am also skilled in scripting with JavaScript and Bash, and I have hands-on experience with monitoring tools such as Splunk.
        </p>
        <p>
            I am interested in problem-solving through automation and improving system reliability. My experience in the United States Marine Corps taught me discipline and attention to detail, which I apply to my work in managing complex infrastructure.
        </p>
    </section>

    <section class="short-term-goals">
        <h2>Short-term Goals</h2>
        <ul>
            <li>Obtain certifications in AWS and Azure to deepen my cloud expertise.</li>
            <li>Enhance my proficiency in automation tools like Kubernetes and Docker.</li>
            <li>Contribute to open-source projects focused on site reliability and DevOps automation.</li>
            <li>Continue to develop my leadership and mentoring skills by collaborating with peers and junior developers.</li>
        </ul>
    </section>
</div>

      {/* Explore section */}
      <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* <div className="card text-white card-has-bg click-col"> */}
                {/* <div className="card-img-overlay d-flex flex-column"> */}
                  {/* <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <Link
                        to="/certifications"
                        className="text-white-50"
                        style={{ textDecoration: "none" }}
                      >
                        Certifications
                        <img
                          className="card-img"
                          src="/images/img-6.jpg"
                          alt="G"
                        />
                      </Link>
                    </h4>
                    <h4> His Certifications</h4>
                  </div> */}
                {/* </div> */}
              {/* </div> */}
            </div>
            <div className="col-md-4">
              <div className="card text-white card-has-bg click-col">
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <Link
                        to="/AboutMe"
                        className="text-white-50"
                        style={{ textDecoration: "none" }}
                      >
                        Resume
                        <img
                          className="card-img"
                          src="/images/img-1.jpg"
                          alt="6"
                        />
                      </Link>
                    </h4>
                    <h4> Daniels Resume</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white card-has-bg click-col">
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <h4 className="card-title mt-0 ">
                      <Link
                        to="/portfolio"
                        className="text-white-50"
                        style={{ textDecoration: "none" }}
                      >
                        Artifacts
                        <img
                          className="card-img"
                          src="/images/img-7.jpg"
                          alt="G"
                        />
                      </Link>
                    </h4>
                    <h4> Explore Daniels Projects</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
