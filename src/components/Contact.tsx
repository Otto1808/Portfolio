import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const sendEmail = async (formData : FormData) => {
      "use server"
      const name = formData.get("user_name")
      const email = formData.get("user_email")
      const message = formData.get("message")


      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
            <form action={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
    );
};
