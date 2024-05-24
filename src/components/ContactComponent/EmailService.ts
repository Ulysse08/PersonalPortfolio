import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  nameInput: string;
  emailInput: string;
  messageInput: string;
  acceptTerms: boolean | "indeterminate";
};

export const sendContactForm = async ({ nameInput, emailInput, messageInput, acceptTerms }: FormData) => {
  const serviceID = 'your_service_id';
  const templateID = 'your_template_id';
  const userID = 'your_user_id';

  const templateParams = {
    name: nameInput,
    email: emailInput,
    message: messageInput,
    acceptTerms: acceptTerms.toString(),
  };

  try {
    await emailjs.send(serviceID, templateID, templateParams, userID);
    alert('Message sent successfully!');
  } catch (error) {
    console.error('Failed to send message:', error);
    alert('Failed to send message. Please try again later.');
  }
};
