const text = `
<p>Welcome to <strong>SouthZone Tech Solution</strong>, your trusted provider of innovative technology and engineering services. We specialize in delivering a wide range of solutions across industries, focusing on electrical control systems, HVAC services, security systems, and full-stack web development. Our mission is to enhance operational efficiency, security, and digital presence through expertly designed, customized solutions that meet the unique needs of our clients.</p>

<p><br></p>

<h4><strong>Who We Are</strong></h4>
<p>With years of experience and a team of highly skilled professionals, <strong>SouthZone Tech Solution</strong> is committed to offering comprehensive support to businesses in various sectors. From electrical engineering to IT infrastructure, we are passionate about delivering top-notch services that drive results. Our expertise spans across multiple areas, ensuring we can meet the diverse needs of our clients with precision and quality.</p>

<p><br></p>

<h4><strong>Our Core Services:</strong></h4>

<ul>    
    <li><strong>IT Support for Web Development</strong>: We provide dedicated IT support for web development projects, covering server setup, database management, security optimization, and performance troubleshooting.</li><p><br></p>

    <li><strong>Electrical Control &amp; Power Circuit Solutions</strong>: We provide customized electrical solutions, including control panels, PLC programming, and automation systems to enhance the performance and safety of your operations.</li><p><br></p>

    <li><strong>AC Services</strong>: Our HVAC experts install, maintain, and optimize air conditioning systems for businesses and industrial facilities, ensuring efficient and reliable cooling.</li><p><br></p>

    <li><strong>CCTV Surveillance Solutions and Support</strong>: We offer advanced CCTV surveillance systems designed to protect your premises 24/7. Our services include expert installation, real-time monitoring, and ongoing system maintenance for maximum security.</li><p><br></p>

    <li><strong>Fire Alarm System Solutions</strong>: Protect your business with our reliable fire detection and alarm systems. We design and install customized solutions to ensure rapid response and compliance with safety standards.</li><p><br></p>

    <li><strong>Full Stack Web Development</strong>: Our web development team builds custom, scalable, and responsive applications that are both user-friendly and efficient. We work with the latest technologies to deliver top-tier web solutions.</li><p><br></p>

    <li><strong>Complex Web Page Design</strong>: We design sophisticated, user-focused websites that reflect your brand and provide a seamless online experience for your customers.</li><p><br></p>
</ul>

<p><br></p>

<h4><strong>Why Choose Us?</strong></h4>
<ul>
    <li><strong>Expertise Across Industries</strong>: Our team is skilled in a wide range of services, offering in-depth knowledge and technical expertise to solve complex challenges.</li><p><br></p>

    <li><strong>Tailored Solutions</strong>: We understand that every business is different, and we offer customized solutions to meet the specific requirements of each client.</li><p><br></p>

    <li><strong>Commitment to Quality</strong>: We are dedicated to delivering high-quality services that ensure reliability, safety, and efficiency for your business.</li><p><br></p>

    <li><strong>Ongoing Support</strong>: From system maintenance to troubleshooting, we provide continuous support to ensure that your operations run smoothly and efficiently.</li><p><br></p>
</ul>

<p><br></p>

<h4><strong>Our Mission</strong></h4>
<p>At <strong>SouthZone Tech Solution</strong>, our mission is to empower businesses with innovative and reliable solutions that enhance productivity, security, and digital growth. We strive to stay at the forefront of technology, ensuring that our clients always have access to the most up-to-date and effective solutions for their needs.</p>

<p><br></p>

<p>Let <strong>SouthZone Tech Solution</strong> be your partner in success, delivering expert services that help your business thrive in today’s competitive landscape.</p>
`;

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-screen-md my-8 md:my-16 px-4">
      <h1 className="mb-8 text-center">About Us</h1>
      <div className="text-justify" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default AboutPage;
