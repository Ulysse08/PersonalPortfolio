import emailjs from "@emailjs/browser";

type FormData = {
  nameInput: string;
  emailInput: string;
  messageInput: string;
};

export const sendContactForm = async ({ nameInput, emailInput, messageInput }: FormData) => {
  const serviceID = 'service_07kc9xp';  // Replace with your actual service ID
  const templateID = 'template_75tki4g';  // Replace with your actual template ID
  const userID = 'NhhUiYAqQWPVU2x9d';  // Replace with your actual user ID (public key)

  const templateParams = {
    name: nameInput,
    email: emailInput,
    message: messageInput,
  };

  try {
    const response = await emailjs.send(serviceID, templateID, templateParams, userID);
    console.log('SUCCESS!', response.status, response.text);
    alert('Message sent successfully!');
  } catch (error) {
    console.error('Failed to send message:', error);
    alert('Message sent successfully!');
  }
};
