import Layout from "../components/Layout";
import ContentContainer from "../components/ContentContainer";

export default function about() {
  return (
    <Layout>
      <main>
        <ContentContainer className='mtop-3'>
          <p>
            Lending Hand Cleaners are dedicated to making your home spotless,
            all without you lifting a finger. Our cleaners will go the extra
            mile to ensure that your home is taken care of, cleaned properly,
            and treated with love. Lending Hand Cleaners will treat your home as
            if it were their own. No matter how big, or little the job, we offer
            nothing but the best services. We offer discounts for those who keep
            us scheduled regularly, this can be weekly, biweekly, or monthly.
            Pricing is to vary on each job.
          </p>
        </ContentContainer>
      </main>
    </Layout>
  );
}
