import React, { useState } from 'react';
import { Label } from '../components/ui/label';
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn";
import Button from "./Button";
import { ChevronDownIcon } from '@heroicons/react/solid';

export function SignupFormDemo() {
  const reasons = [
    "InquiryContact",
    "SupportContact",
    "FeedbackContact",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    reason: "",
    designation: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Perform form submission logic here
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <>
      <div className="max-w-md w-full bg-[rgba(0, 0, 0, 0)] mx-auto p-4 rounded-none md:rounded-2xl px-4">
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Enter Your Name</Label>
            <Input
              id="name"
              placeholder="Ex: John Doe"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="Ex: john@gmail.com"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="school">Enter the name of School or University</Label>
            <Input
              id="school"
              placeholder="Ex: VIT University"
              type="text"
              value={formData.school}
              onChange={handleInputChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="relative mb-4">
            <Label htmlFor="reason">Select your reason for contact</Label>
            <Select
              id="reason"
              options={reasons}
              value={formData.reason}
              onChange={handleInputChange}
              className="flex h-10 w-full border-none bg-gray-50 text-black shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400"
            />
            <ChevronDownIcon className="absolute top-1/2 transform -translate-y-1/2 right-2 pointer-events-none w-[20px] h-[20px] opacity-50" />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="designation">Enter your Designation</Label>
            <Input
              id="designation"
              placeholder="Ex: Student"
              type="text"
              value={formData.designation}
              onChange={handleInputChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Enter the message here</Label>
            <textarea
              id="message"
              placeholder="Ex: Your message"
              value={formData.message}
              onChange={handleInputChange}
              className="p-2 border text-sm w-full outline-none rounded-md bg-gray-50"
              rows="4"
            />
          </LabelInputContainer>

          <div className="w-[171px] h-[44px] m-0 bg-[#36DBB3] text-white font-ssp text-[18px] flex items-center justify-center mt-8 md:mt-[30px] mb-[48px] md:mb-0 rounded-lg shadow-md hover:text-[#36DBB3] hover:bg-white hover:shadow-lg hover:border-[2px] hover:border-[#36DBB3] cursor-pointer">
            <Button bgColor="bg-[#36DBB3]" content="Submit" />
          </div>
        </form>
      </div>
      <style jsx>{`
        ::placeholder {
          color: gray-50;
        }
        Select {
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

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const Select = ({ id, options, ...props }) => (
  <select
    id={id}
    {...props}
    className="p-2 border text-sm w-full outline-none rounded-md bg-gray-50"
    style={{
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
      color: props.value === "" ? '#999' : '#000' // Gray color for placeholder
    }}
  >
    <option value="" className="text-gray-100">Select your reason for contact</option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default SignupFormDemo;
