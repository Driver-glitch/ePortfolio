import React from 'react';
import './AboutMeCard.css';
import Footer from "../footer/Footer";

function AboutMeCard() {
    const resumeData = {
        name: "Daniel Rivera",
        title: "Site Reliability Engineer",
        contact: {
            email: "danielrv997@yahoo.com",
            phone: "(904) 319-5555",
            location: "Jacksonville, Florida",
            website: "www.daniel-portfolio.com"
        },
        experience: [
            {
                role: "Site Reliability Engineer",
                company: "Black Knight Inc. (ICE)",
                date: "June 2022 - Present",
                duties: [
                    "Managed site reliability and systems performance for large-scale services.",
                    "Automated infrastructure tasks, reducing manual interventions by 30%.",
                    "Monitored system reliability using CI/CD pipelines in Azure DevOps."
                ]
            },
            {
                role: "3432-Disbursing Clerk",
                company: "United States Marine Corps",
                date: "October 2011 - October 2019",
                duties: [
                    "Processed reimbursements for travel claims.",
                    "Paid Marines for traveling from one duty station to the next.",
                    "Ensured accurate financial disbursements for military personnel."
                ]
            }
        ],
        skills: [
            "Cloud Services: AWS, Azure",
            "CI/CD: Azure DevOps, Jenkins",
            "Automation: Terraform, Ansible",
            "Monitoring: Prometheus, Grafana, Splunk",
            "Scripting: Python, Bash, PowerShell"
        ],
        education: {
            degree: "Bachelor of Science in Computer Science",
            institution: "Florida State College at Jacksonville",
            year: "2025"
        }
    };

    return (
        <div className="resume-container">
            <h1 className="resume-title">
                {resumeData.name}
            </h1>
            <h2 className="resume-subtitle">
                {resumeData.title}
            </h2>

            <div className="resume-section">
                <h3>Contact Information</h3>
                <p>Email: {resumeData.contact.email}</p>
                <p>Phone: {resumeData.contact.phone}</p>
                <p>Location: {resumeData.contact.location}</p>
                <p>Website: <a href={resumeData.contact.website} target="_blank" rel="noopener noreferrer">{resumeData.contact.website}</a></p>
            </div>

            <div className="resume-section">
                <h3>Professional Experience</h3>
                {resumeData.experience.map((job, index) => (
                    <div key={index} className="resume-job">
                        <h4>{job.role} - {job.company}</h4>
                        <p><em>{job.date}</em></p>
                        <ul>
                            {job.duties.map((duty, dutyIndex) => (
                                <li key={dutyIndex}>{duty}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="resume-section">
                <h3>Skills</h3>
                <ul>
                    {resumeData.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="resume-section">
                <h3>Education</h3>
                <p>{resumeData.education.degree}</p>
                <p>{resumeData.education.institution} ({resumeData.education.year})</p>
            </div>

            <Footer />
        </div>
    );
    
}
export default AboutMeCard;
