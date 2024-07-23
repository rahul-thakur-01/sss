import university from "../assets/university.png";
import School from "../assets/school.png";
import corporate from "../assets/corporate.png";
import everyone from "../assets/everyone.png";

const service = [
  {
    head: "University",
    tagline: "Revolutionize Higher Education with AI",
    desc: "Unlock the potential of artificial intelligence in higher education. Our services for universities are designed to enhance the learning experience, streamline administrative tasks, and foster innovative research.",
    img: university
  },
  {
    head: "Schools",
    tagline: "Transforming K-12 Education with AI",
    desc: "Empower educators and students with the power of AI. Our services for schools aim to create a more engaging, efficient, and effective learning environment.",
    img: School
  },
  {
    head: "Corporations",
    tagline: "Enhance Corporate Training with AI",
    desc: "Stay ahead in the competitive corporate world with our AI-powered training solutions. We help companies develop their workforce through personalized, scalable, and effective learning experiences.",
    img: corporate
  },
  {
    head: "Everyone",
    tagline: "Accessible AI-Powered Learning for All",
    desc: "Our mission is to make high-quality education accessible to everyone. We offer a range of AI-driven learning solutions tailored to individual needs, making lifelong learning a reality.",
    img: everyone
  }
];

const gradientStyle = {
  height: '100%',
  background: 'radial-gradient(circle, rgba(54, 219, 179, 0.46) 0%, rgba(54, 219, 179, 0.46) 30%)',
};

export { service, gradientStyle };
