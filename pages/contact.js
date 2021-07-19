import { useForm } from "react-hook-form";
import { NEXT_URL } from "../config/index";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ContentContainer from "../components/ContentContainer";

const Contact = () => {
  // Form init for react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useRouter
  const router = useRouter();

  // onSubmit for react form hook ASYNC
  const onSubmit = async (data) => {
    let { name, email, message, subject, phone } = data;
    // Hit api/contact endpoint from built in api page using fetch
    const res = await fetch(`${NEXT_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        subject: subject,
        phone: phone,
      }),
    });

    // AWAIT response form backend api/contact route
    const result = await res.json();
    if (res.ok) {
      router.push("/message");
    }
  };

  return (
    <Layout title='LHC | Contact Us'>
      <main>
        <ContentContainer pageName='contact flex flex-center col'>
          <h1>Contact Us</h1>
          <p>
            Lending Hand Cleaners are happy to be contacted by either phone or
            by email. For direct contacts please visit our{" "}
            <a href='/about'>about</a> page. If you would like to email us for
            inquiries, please fill out the form below and allow for 1-2 business
            days for a response.
          </p>
          <hr className='section-hr' />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='contact__form flex col'
          >
            <input
              type='text'
              name='name'
              placeholder='Name'
              // Register is from react-hook-form, first param is name field, second options
              {...register("name", {
                required: {
                  value: true,
                  message: "You must enter a first name.",
                },
                maxLength: {
                  value: 20,
                  message: "First name cannot be longer than 20 characters.",
                },
              })}
            />
            <span>{errors?.name?.message}</span>
            <input
              type='email'
              name='email'
              placeholder='Email'
              // Register is from react-hook-form, first param is name field, second option
              {...register("email", {
                required: {
                  value: true,
                  message: "You must enter a email.",
                },
                maxLength: {
                  value: 40,
                  message: "Your email cannot be longer than 40 characters.",
                },
              })}
            />
            <span>{errors?.email?.message}</span>
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              {...register("phone", {
                required: {
                  value: true,
                  message: "You must enter a phone number.",
                },
                maxLength: {
                  value: 20,
                  message: "Phone Number cannot be longer than 20 characters.",
                },
              })}
            />
            <span>{errors?.phone?.message}</span>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              {...register("subject", {
                required: {
                  value: true,
                  message: "You must enter a Subject for your message.",
                },
                maxLength: {
                  value: 30,
                  message: "Subject cannot be longer than 30 characters.",
                },
              })}
            />
            <span>{errors?.subject?.message}</span>
            <textarea
              name='message'
              placeholder='Message'
              {...register("message", {
                required: {
                  value: true,
                  message: "You must enter a message.",
                },
                minLength: {
                  value: 25,
                  message: "Your message must be at least 25 characters long.",
                },
                maxLength: {
                  value: 1000,
                  message:
                    "Your message cannot be longer than 1000 characters.",
                },
              })}
            ></textarea>
            <span>{errors?.message?.message}</span>
            <input type='submit' value='Submit Message' />
          </form>
        </ContentContainer>
      </main>
    </Layout>
  );
};

export default Contact;
