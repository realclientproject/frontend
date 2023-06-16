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
                      Unlock your potential with our free learning subscription
                      and pave your way to a successful career
                    </p>
                  </div>
                  <div className="plan-description specs">
                    Free courses
                    <br /> Some subjects
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
                      Elevate your professional journey with our premium
                      subscription, offering exclusive resources and
                      personalized guidance for accelerated growth
                    </p>
                  </div>
                  <div className="plan-description specs">
                    Access to all courses
                    <br /> All subjects
                    <br />
                    Good controll over the courses and ability to manage
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
