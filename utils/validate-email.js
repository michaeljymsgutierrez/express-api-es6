// Validate Email Format

const VALIDATE_EMAIL = email => {
  const email_text = /\S+@\S+\.\S+/;

  return email_text.test(email);
};

export default VALIDATE_EMAIL;
