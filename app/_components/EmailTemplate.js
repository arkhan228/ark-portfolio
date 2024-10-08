import { Html, Heading, Text } from '@react-email/components';
const EmailTemplate = ({ name, email, subject, message }) => {
  return (
    <Html lang='en'>
      <Heading as='h1'>New Form Submission</Heading>
      <Text>
        You just recieved a new form submission. Here are the details:
      </Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Subject: {subject}</Text>
      <Text>Message: {message}</Text>
    </Html>
  );
};
export default EmailTemplate;
