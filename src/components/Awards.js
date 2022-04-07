import React from "react";

function Awards() {
  return (
    <div className="container-fluid">
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
          <h2 className="mb-5">Awards & Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-trophy text-warning"></i>
              </span>
              Finalist UI/UX Design Competition - Teknokrat University
              Competition
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-trophy text-warning"></i>
              </span>
              Semi Finalist Business Plan Competition - Podium
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Awards;
