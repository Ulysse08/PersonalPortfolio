"use client";

import React, { useState } from "react";
import { Input, Label, Checkbox, Textarea } from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { sendContactForm } from "./EmailService"; // Assume this is your email service module

type Props = {
  tagline: string;
  heading: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  button: {
    title: string;
  };
};

export type ContactFormProps = React.ComponentPropsWithoutRef<"section"> & Props;

export const ContactFormDefaults: ContactFormProps = {
  tagline: "Tagline",
  heading: "Contact Me",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  email: "hello@relume.io",
  phone: "+1 (555) 000-0000",
  address: "123 Sample St, Sydney NSW 2000 AU",
  button: { title: "Submit" }
};

export const ContactForm: React.FC<ContactFormProps> = (props) => {
  const { tagline, heading, description, email, phone, address, button } = {
    ...ContactFormDefaults,
    ...props,
  };

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendContactForm({ nameInput, emailInput, messageInput });
  };

  return (
    <section className="px-[5%] py-24 md:py-28 lg:py-34">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none" />
              <p>{email}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none" />
              <p>{phone}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none" />
              <p>{address}</p>
            </div>
          </div>
        </div>

        <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6" onSubmit={handleSubmit}>
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="rounded-md relative inline-flex group items-center justify-center px-4 py-3 m-1 cursor-pointer active:border-main shadow-sm hover:shadow-lg transition-all ease-in-out bg-gradient-to-tr from-main to-main border-accent text-white"
            >
              <span className="flex flex-row justify-center absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-[150%] opacity-10"></span>
              <span className="relative text-background">
                {button.title}
              </span>
              <FaArrowRightLong className="ml-4 text-md text-background" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
