import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section className="education" id="education">
            <h2 className="heading">Education</h2>
            <div className="row container">
                <div className="timeline">
                    <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2025 - 2028</div>
                        <div className="timeline-content">
                            <div className="education-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3>Bachelor of Technology (B.Tech)</h3>
                            {/* <p>Computer Science & Engineering</p> */}
                            <span className="institution">Rai University X Coding Gita</span>
                            <span className="location">Ahmedabad, Gujarat — Ongoing</span>
                            <ul className="education-highlights">
                                <li>Currently building a strong foundation in Data Structures, Algorithms, and Web Development</li>
                                <li>Working on real-world projects using modern technologies like React and Next.js</li>
                                <li>Continuously improving problem-solving and coding skills</li>
                                <li>Interested in frontend development and creating user-friendly interfaces</li>
                            </ul>
                        </div>
                    </div>

                    <div className="timeline-item" data-aos="fade-up" data-aos-delay="600">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2023 - 2025</div>
                        <div className="timeline-content">
                            <div className="education-icon">
                                <i className="fas fa-university"></i>
                            </div>
                            <h3>Diploma in Computer Engineering</h3>
                            {/* <p>KCES's College of Engineering and Management</p> */}
                            <span className="institution">KCES's College of Engineering and Management</span>
                            <span className="location">Jalgaon, Maharashtra</span>
                            <ul className="education-highlights">
                                <li>Gained fundamental knowledge in programming languages such as C, C++, and Java</li>
                                <li>Learned basics of database management and computer networks</li>
                                <li>Completed academic projects and practical lab work</li>
                                <li>Developed a strong interest in software development and web technologies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Education);
