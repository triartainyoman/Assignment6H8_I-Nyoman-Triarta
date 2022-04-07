import React from "react";

function Education() {
  return (
    <div>
      <div className="container-fluid">
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Ganesha University of Education</h3>
                <div className="subheading mb-3">
                  Bachelor of Information System
                </div>
                <p>GPA: 3.86</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">August 2019 - March 2023</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">SMK Negeri 1 Tampaksiring</h3>
                <div className="subheading mb-3">Multimedia</div>
                <p>GPA: 3.56</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">June 206 - May 2019</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Education;
