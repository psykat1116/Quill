import { Template } from "@/types";

export const DEFAULT_MARGIN = 56;
export const MIN_GAP = 100;
export const AVATAR_SIZE = 36;

export const templates: Template[] = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/template/blank-document.svg",
    initialContent: `Hello World!`,
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/template/software-proposal.svg",
    initialContent: `
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8f9fa;">
        <div style="max-width: 800px; margin: auto; background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h1 style="color: #333;">Software Proposal</h1>
          <p><strong>Prepared for:</strong> [Client Name]</p>
          <p><strong>Prepared by:</strong> [Your Company]</p>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Introduction</h2>
            <p>We propose to develop a software solution tailored to your needs. Our team will ensure a seamless experience, from development to deployment.</p>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Project Scope</h2>
            <p>We will develop [describe the software, features, and functionality]. This project will be completed in multiple phases, ensuring quality and efficiency.</p>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Deliverables</h2>
            <ul>
                <li>Software application</li>
                <li>User documentation</li>
                <li>Support and maintenance</li>
            </ul>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Timeline</h2>
            <p>The project is expected to be completed in [X months], following these milestones:</p>
            <ul>
              <li>Phase 1: Requirement Analysis - [Date]</li>
              <li>Phase 2: Development - [Date]</li>
              <li>Phase 3: Testing & Deployment - [Date]</li>
            </ul>
          </div>

          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Pricing</h2>
            <p>The total estimated cost for this project is [Amount]. This includes development, testing, and initial support.</p>
          </div>

          <div style="background: #007bff; color: white; padding: 10px; text-align: center;">
            <h2>Contact Us</h2>
            <p>If you have any questions, please reach out to us at <a href="mailto:info@yourcompany.com" style="color:white;">info@yourcompany.com</a></p>
          </div>
        <div/>
      </body>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/template/project-proposal.svg",
    initialContent: `
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8f9fa;">
        <div style="max-width: 800px; margin: auto; background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h1 style="color: #333;">Project Proposal</h1>
          <p><strong>Prepared for:</strong> [Client Name]</p>
          <p><strong>Prepared by:</strong> [Your Company]</p>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Introduction</h2>
            <p>We propose to undertake this project to meet your specific requirements. Our team will ensure a structured and efficient execution from inception to completion.</p>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Project Objectives</h2>
            <p>The goal of this project is to [describe the objectives and expected outcomes]. We will implement a well-defined strategy to achieve these objectives efficiently.</p>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Scope of Work</h2>
            <ul>
                <li>Detailed planning and research</li>
                <li>Execution and implementation</li>
                <li>Testing and evaluation</li>
                <li>Final deployment and delivery</li>
            </ul>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Project Timeline</h2>
            <p>The project is expected to be completed in [X months], with the following milestones:</p>
            <ul>
                <li>Phase 1: Planning & Research - [Date]</li>
                <li>Phase 2: Development & Implementation - [Date]</li>
                <li>Phase 3: Testing & Deployment - [Date]</li>
            </ul>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Budget</h2>
            <p>The estimated budget for this project is [Amount]. This includes all associated costs for research, development, and implementation.</p>
          </div>
        
          <div style="background: #007bff; color: white; padding: 10px; text-align: center;">
            <h2>Contact Us</h2>
            <p>If you have any questions, please reach out to us at <a href="mailto:info@yourcompany.com" style="color:white;">info@yourcompany.com</a></p>
          </div>
        </div>
      </body>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/template/business-letter.svg",
    initialContent: `
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8f9fa;">
        <div style="max-width: 800px; margin: auto; background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h1 style="color: #333; text-align: center;">Business Letter</h1>
        
          <p style="margin-bottom: 20px;"><strong>Date:</strong> [Date]</p>
          <p style="margin-bottom: 20px;"><strong>Recipient:</strong> [Recipient's Name]</p>
          <p style="margin-bottom: 20px;"><strong>Company:</strong> [Recipient's Company]</p>
          <p style="margin-bottom: 20px;"><strong>Address:</strong> [Recipient's Address]</p>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Subject</h2>
            <p>[Subject of the Letter]</p>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Dear [Recipient's Name],</h2>
            <p>[Your introduction and purpose for writing the letter]</p>
            <p>[Detailed explanation of the message, request, or proposal]</p>
            <p>[Conclusion and any call to action]</p>
          </div>
        
          <p style="margin-bottom: 20px;"><strong>Sincerely,</strong></p>
          <p>[Your Name]</p>
          <p>[Your Position]</p>
          <p>[Your Company]</p>
          <p>[Your Contact Information]</p>
        
          <div style="background: #007bff; color: white; padding: 10px; text-align: center; margin-top: 20px;">
            <h2>Contact Us</h2>
            <p>If you have any questions, please reach out to us at <a href="mailto:info@yourcompany.com" style="color:white;">info@yourcompany.com</a></p>
          </div>
        </div>
      </body>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/template/resume.svg",
    initialContent: `
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8f9fa;">
        <div style="max-width: 800px; margin: auto; background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h1 style="color: #333; text-align: center;">[Your Name]</h1>
          <p style="text-align: center;">[Your Job Title]</p>
          <p style="text-align: center;">[Your Email] | [Your Phone] | [Your Website]</p>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Summary</h2>
            <p>[A brief professional summary about your skills, experience, and goals]</p>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Work Experience</h2>
            <p><strong>[Job Title]</strong> - [Company Name] ([Year - Year])</p>
            <ul>
                <li>[Responsibility or achievement]</li>
                <li>[Responsibility or achievement]</li>
                <li>[Responsibility or achievement]</li>
            </ul>
            
            <p><strong>[Job Title]</strong> - [Company Name] ([Year - Year])</p>
            <ul>
                <li>[Responsibility or achievement]</li>
                <li>[Responsibility or achievement]</li>
                <li>[Responsibility or achievement]</li>
            </ul>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Education</h2>
            <p><strong>[Degree]</strong> - [University Name] ([Year])</p>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
                <li>[Skill 4]</li>
            </ul>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Certifications</h2>
            <p>[Certification Name] - [Issuing Organization] ([Year])</p>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Projects</h2>
            <p><strong>[Project Name]</strong> - [Brief description of the project]</p>
          </div>
        
          <div style="background: #007bff; color: white; padding: 10px; text-align: center; margin-top: 20px;">
            <h2>Contact Me</h2>
            <p>If you would like to get in touch, please reach out at <a href="mailto:info@yourwebsite.com" style="color:white;">info@yourwebsite.com</a></p>
          </div>
        </div>
      </body>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/template/cover-letter.svg",
    initialContent: `
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8f9fa;">
        <div style="max-width: 800px; margin: auto; background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h1 style="color: #333; text-align: center;">Cover Letter</h1>
        
          <p style="margin-bottom: 20px;"><strong>Date:</strong> [Date]</p>
          <p style="margin-bottom: 20px;"><strong>Recipient:</strong> [Hiring Manager's Name]</p>
          <p style="margin-bottom: 20px;"><strong>Company:</strong> [Company Name]</p>
          <p style="margin-bottom: 20px;"><strong>Address:</strong> [Company Address]</p>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Subject</h2>
            <p>Application for [Job Title]</p>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Dear [Hiring Manager's Name],</h2>
            <p>I am excited to apply for the [Job Title] position at [Company Name]. With my experience in [mention relevant experience], I believe I would be a great fit for your team.</p>
            <p>Throughout my career, I have developed skills in [mention key skills] that align well with the job requirements. I am eager to contribute my expertise and collaborate with your team to achieve success.</p>
            <p>I would love the opportunity to discuss how my skills and experience can benefit [Company Name]. Please find my resume attached for your review.</p>
            <p>Looking forward to your response.</p>
          </div>
        
          <p style="margin-bottom: 20px;"><strong>Sincerely,</strong></p>
          <p>[Your Name]</p>
          <p>[Your Contact Information]</p>
        
          <div style="background: #007bff; color: white; padding: 10px; text-align: center; margin-top: 20px;">
            <h2>Contact Me</h2>
            <p>If you have any questions, please reach out at <a href="mailto:info@yourwebsite.com" style="color:white;">info@yourwebsite.com</a></p>
          </div>
        </div>
      </body>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/template/letter.svg",
    initialContent: `
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8f9fa;">
        <div style="max-width: 800px; margin: auto; background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h1 style="color: #333; text-align: center;">Letter</h1>
        
          <p style="margin-bottom: 20px;"><strong>Date:</strong> [Date]</p>
          <p style="margin-bottom: 20px;"><strong>Recipient:</strong> [Recipient's Name]</p>
          <p style="margin-bottom: 20px;"><strong>Address:</strong> [Recipient's Address]</p>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Subject</h2>
            <p>[Subject of the Letter]</p>
          </div>
        
          <div style="margin-bottom: 20px;">
            <h2 style="color: #333;">Dear [Recipient's Name],</h2>
            <p>[Opening paragraph: Introduce yourself and state the purpose of the letter.]</p>
            <p>[Main content: Provide details regarding the purpose of the letter, any necessary background information, and key points.]</p>
            <p>[Closing paragraph: Summarize the letter and include any call to action or next steps.]</p>
          </div>
        
          <p style="margin-bottom: 20px;"><strong>Sincerely,</strong></p>
          <p>[Your Name]</p>
          <p>[Your Contact Information]</p>
        
          <div style="background: #007bff; color: white; padding: 10px; text-align: center; margin-top: 20px;">
            <h2>Contact Me</h2>
            <p>If you have any questions, please reach out at <a href="mailto:info@yourwebsite.com" style="color:white;">info@yourwebsite.com</a></p>
          </div>
        </div>
      </body>
    `,
  },
];
