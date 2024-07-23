import Image from 'next/image';
import image from '../assets/get-to-know.jpg';
import Button from './Button';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { SignupFormDemo } from './Form';


export default function Contact() {
  const gradientStyle = {
    height: '100%',
    background: 'radial-gradient(circle, rgba(54, 219, 179, 0.40) 0%, rgba(54, 219, 179, 0.00) 70%)',
  };

  const gradientStyle2 = {
    height: '100%',
    background: 'radial-gradient(circle, rgba(88, 132, 195, 0.40) 0%, rgba(88, 132, 195, 0.00) 75%)',
  };

  return (
    <>
      <div className="relative w-full h-max px-4 md:px-[30px] lg:px-[150px] pt-[48px] md:pt-[42px] py-8 md:py-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[100px]">
          <div className="mt-[20px]">
            <p className="text-[24px] md:text-[32px] text-center text-dark font-ssp font-bold">Get to Know Us</p>
            <Image src={image} alt="Get to know us" className="block lg:hidden m-auto w-[525px] h-[310px] mt-10 md:mt-[30px]" style={{ mixBlendMode: 'multiply' }} />
            <p className="text-[16px] md:text-[18px] text-dark font-ssp text-justify mt-4 md:mt-[10px]">
              Navigate Labs revolutionizes education with AI, enhancing learning outcomes and empowering researchers, educators and learners. Our products and services foster collaboration, drive innovation, and promote accessibility while upholding ethical standards.
            </p>
            <p className="text-[16px] md:text-[18px] text-dark font-ssp text-justify mt-6 md:mt-[10px]">
              Your aspirations are our focus, and we are dedicated to being your trusted partners in realizing your AI goals. Count on us for unwavering support and guidance as you journey towards AI excellence.
            </p>
            <Image src={image} alt="Get to know us" width={1920} height={1080} className="hidden lg:block mt-10 md:mt-[30px]" style={{ mixBlendMode: 'multiply' }} />
          </div>
          <div>
            <p className="text-[24px] md:text-[32px] mt-[32px] md:my-0 text-center text-dark font-ssp font-bold">Connect with Our Team</p>
            <p className="text-[16px] md:text-[18px] text-dark font-ssp text-justify mt-4 md:mt-[10px]">
              Have any questions or need more information? Our team is here to help. Feel free to reach out to us through the contact form below or give us a call. We are looking forward to connecting with you and providing the support you need.
            </p>
            <div className="max-w-md mt-10 m-auto">
              {/* <form className="space-y-5 text-[14px] md:text-[16px]">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-black"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-black"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter the name of School or University"
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-black"
                  />
                </div>
                <div className="relative">
                  <select
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 text-black appearance-none"
                  >
                    <option>Select your reason for contact</option>
                    <option>Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                  </select>
                  <ChevronDownIcon className="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none w-[20px] h-[20px] opacity-50" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your Designation"
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-black"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Enter the message here"
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-black"
                  />
                </div>
                <div className="w-[171px] h-[44px] m-0 bg-[#36DBB3] text-white font-ssp text-[18px] flex items-center justify-center mt-8 md:mt-[30px] mb-[48px] md:md-0 rounded-lg shadow-md hover:text-[#36DBB3] hover:bg-white hover:shadow-lg hover:border-[2px] hover:border-[#36DBB3] cursor-pointer">
                  <Button bgColor="bg-[#36DBB3]" content="Submit" />
                </div>
              </form> */}
              <SignupFormDemo/>
            </div>
          </div>
        </div>

        {/* Gradient */}
        <div className="absolute top-0 left-0 h-full opacity-70 md:opacity-100 w-full pointer-events-none -z-10">
          {/* <div style={gradientStyle2} className="w-1/2 h-full absolute left-[10%] blur-3xl opacity-60"></div>
          <div style={gradientStyle} className="w-1/2 h-full absolute right-[0%] blur-3xl opacity-70"></div> */}
        </div>
      </div>
      <style jsx>{`
        ::placeholder {
          color: black;
        }
        select {
          color: black;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-color: white; /* Ensure background color is applied */
        }
        .relative {
          position: relative;
        }
        .pointer-events-none {
          pointer-events: none;
        }
      `}</style>
    </>
  );
}
