import * as React from "react";

import "./pricing.css";

function PricingContent() {
  return (
    <>
      <section>
        <h1> Pricing Table</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="plan-name">Free </div>
                  <div className="plan-description">
                    <div className="plan-price month">
                      $0<sub> / month</sub>
                    </div>
                    <p>
                      Our Free Package offers a valuable selection of courses in
                      school education, completely free of charge. These courses
                      cover a wide range of topics, from effective teaching
                      strategies to classNameroom management techniques. By
                      enrolling in our Free Package, you'll gain access to
                      high-quality educational content, video lectures, and
                      downloadable resources
                    </p>
                  </div>
                  <div className="plan-description specs">
                    1,000 Branded Links
                    <br /> 1+ User Seats
                    <br /> 1+ Custom Domains{" "}
                  </div>
                  <div className="plan-cta">
                    <p>
                      <a
                        className="button"
                        href="/lessons"
                        data-open="get-pro-modal"
                        aria-controls="get-pro-modal"
                        aria-haspopup="true"
                        tabindex="0"
                      >
                        Get Started
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="plan-name">Pro </div>
                  <div className="plan-description">
                    <div className="plan-price month">
                      $39<sub> / month</sub>
                    </div>
                    <p>
                      Our Pro Package is designed to provide an enhanced
                      learning experience and exclusive benefits for those
                      looking to take their understanding of school education to
                      the next level. With the Pro Package, you'll have access
                      to our full suite of courses, featuring advanced topics
                      and specialized modules. In addition to the comprehensive
                      course materials, you'll enjoy extra perks such as live
                      webinars with renowned educators, personalized feedback on
                      assignments, and interactive discussion forums to connect
                      with fellow learners and experts.
                    </p>
                  </div>
                  <div className="plan-description specs">
                    100,000 Branded Links
                    <br /> 50+ User Seats
                    <br /> 50+ Custom Domains{" "}
                  </div>
                  <div className="plan-cta">
                    <p>
                      <a
                        className="button"
                        href="/payment"
                        data-open="get-pro-modal"
                        aria-controls="get-pro-modal"
                        aria-haspopup="true"
                        tabindex="0"
                      >
                        Get Started
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
