import Solution1Img from "../assets/solutionagriculture.jpeg";
import Solution2Img from "../assets/solutionhealthcare.jpeg";
import Solution3Img from "../assets/solutionfinance.jpeg";
import Solution4Img from "../assets/solutionfashion.jpeg";

const gradientStyle1 = {
    height: '100%',
    background: 'radial-gradient(circle, rgba(88, 132, 195, 0.80) 0%, rgba(88, 132, 195, 0.80) 40%)',
};
  
const gradientStyle2 = {
    height: '100%',
    background: 'radial-gradient(circle, rgba(54, 219, 179, 0.46) 0%, rgba(54, 219, 179, 0.46) 30%)',
};

const slidesData = [
    {
      url: Solution1Img,
      title: 'Agriculture : Transforming Agriculture with AI',
      description: 'Harness the power of AI to revolutionize agricultural practices, improve productivity, and ensure sustainability. Our solutions for agriculture provide farmers with the tools they need to make data-driven decisions and optimize their operations.'

    },
    {
      url: Solution2Img,
      title: 'Health Care : Revolutionizing Healthcare with AI',
      description: 'Improve patient outcomes, streamline operations, and enhance medical research with our AI-driven healthcare solutions. We provide healthcare providers with the tools they need to deliver better care and improve efficiency.'
    },
    {
      url: Solution3Img,
      title: 'Finance : Empowering Finance with AI',
      description: 'Stay competitive in the financial industry with our AI-powered solutions. We help financial institutions enhance their services, manage risks, and improve customer experiences.'
    },
    {
      url: Solution4Img,
      title: 'Fashion : Innovating Fashion with AI',
      description: 'Stay ahead in the fast-paced fashion industry with our AI-driven solutions. From design to retail, we help fashion brands streamline their processes, understand consumer preferences, and enhance the shopping experience.'
    },
];
export { slidesData, gradientStyle1, gradientStyle2 };