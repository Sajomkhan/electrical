import ReactMarkdown from "react-markdown";
const markdownContent = `
# About Us - Softer Engineering Solutions
Welcome to Softer Engineering Solutions, your trusted provider of innovative technology and engineering services. We specialize in delivering a wide range of solutions across industries, focusing on electrical control systems, HVAC services, security systems, and full-stack web development. Our mission is to enhance operational efficiency, security, and digital presence through expertly designed, customized solutions that meet the unique needs of our clients.
Who We Are
With years of experience and a team of highly skilled professionals, Softer Engineering Solutions is committed to offering comprehensive support to businesses in various sectors. From electrical engineering to IT infrastructure, we are passionate about delivering top-notch services that drive results. Our expertise spans across multiple areas, ensuring we can meet the diverse needs of our clients with precision and quality.
Our Core Services:
•	Electrical Control & Power Circuit Solutions
We provide customized electrical solutions, including control panels, PLC programming, and automation systems to enhance the performance and safety of your operations.
•	AC Services
Our HVAC experts install, maintain, and optimize air conditioning systems for businesses and industrial facilities, ensuring efficient and reliable cooling.
•	CCTV Surveillance Solutions and Support
We offer advanced CCTV surveillance systems designed to protect your premises 24/7. Our services include expert installation, real-time monitoring, and ongoing system maintenance for maximum security.
•	Fire Alarm System Solutions
Protect your business with our reliable fire detection and alarm systems. We design and install customized solutions to ensure rapid response and compliance with safety standards.
•	IT Support for Web Development
We provide dedicated IT support for web development projects, covering server setup, database management, security optimization, and performance troubleshooting.
•	Full Stack Web Development
Our web development team builds custom, scalable, and responsive applications that are both user-friendly and efficient. We work with the latest technologies to deliver top-tier web solutions.
•	Complex Web Page Design
We design sophisticated, user-focused websites that reflect your brand and provide a seamless online experience for your customers.
Why Choose Us?
•	Expertise Across Industries: Our team is skilled in a wide range of services, offering in-depth knowledge and technical expertise to solve complex challenges.
•	Tailored Solutions: We understand that every business is different, and we offer customized solutions to meet the specific requirements of each client.
•	Commitment to Quality: We are dedicated to delivering high-quality services that ensure reliability, safety, and efficiency for your business.
•	Ongoing Support: From system maintenance to troubleshooting, we provide continuous support to ensure that your operations run smoothly and efficiently.
Our Mission
At Softer Engineering Solutions, our mission is to empower businesses with innovative and reliable solutions that enhance productivity, security, and digital growth. We strive to stay at the forefront of technology, ensuring that our clients always have access to the most up-to-date and effective solutions for their needs.
Let Softer Engineering Solutions be your partner in success, delivering expert services that help your business thrive in today’s competitive landscape.
`;

const AboutPage = () => {
  return (
    <div className="container">
      <div className="prose">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default AboutPage;
