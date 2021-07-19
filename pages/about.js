import Layout from "../components/Layout";
import ContentContainer from "../components/ContentContainer";
import { FaPhoneAlt } from "react-icons/fa";

export default function about() {
  return (
    <Layout title='LHC | About'>
      <main>
        <ContentContainer pageName='about'>
          <h1 className='text-center'>Lending Hand Cleaners</h1>
          <p>
            We are a home cleaning company dedicated to making your home
            spotless, all without you lifting a finger. Our cleaners will go the
            extra mile to ensure that your home is taken care of, cleaned
            properly, and treated with love. Lending Hand Cleaners will treat
            your home as if it were their own. No matter how big, or little the
            job, we offer nothing but the best services. We offer discounts for
            those who keep us scheduled regularly, this can be weekly, biweekly,
            or monthly. Pricing is to vary on each job.
          </p>

          <hr className='section-hr' />

          <h2 className='text-center'>Cleaners You Can Rely On!</h2>

          <p>
            Hiring a cleaning serice can be a challenge. Every cleaning services
            can offer you competive rates and a clean home. So what makes us
            better than the next?
          </p>

          <p>
            The deciding factor between an average cleaner and a great cleaner
            is accountability. Being accountable doesn't just mean we will be on
            time, it means we will go above and beyond to meet your
            expectations. If something is not how you like it, we will adjust
            and based on your direct feedback. Ensuring you get what you agreed
            to!
          </p>

          <hr className='section-hr' />

          <h2 className='text-center'>Our Cleaners</h2>

          <div className='phone flex jc-c ai-c'>
            <h3 className='name'>Crystal Thomas</h3>
            <FaPhoneAlt
              style={{ margin: "auto 0.5rem", fontSize: "1.2rem" }}
            />{" "}
            <a href='tel:4236089223'> (423) 608-9223</a>
          </div>
          <div className='phone flex jc-c ai-c'>
            <h3 className='name'>Vicki Williamson</h3>
            <FaPhoneAlt
              style={{ margin: "auto 0.5rem", fontSize: "1.2rem" }}
            />{" "}
            <a href='tel:8654557688'> (865) 455-7688</a>
          </div>
          <div className='phone flex jc-c ai-c'>
            <h3 className='name'>Samantha Moss</h3>
            <FaPhoneAlt
              style={{ margin: "auto 0.5rem", fontSize: "1.2rem" }}
            />{" "}
            <a href='tel:8659639904'> (865) 963-9904</a>
          </div>
        </ContentContainer>
      </main>
    </Layout>
  );
}
