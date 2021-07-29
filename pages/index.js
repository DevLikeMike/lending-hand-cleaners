import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ContentContainer from "../components/ContentContainer";
import CleaningCard from "../components/Cleaning-Card";
import CardContainer from "../components/CardContainer";
import PrimaryButton from "../components/PrimaryButton";
import OpCard from "../components/Op-Card";
import { InformationBlock2 } from "../components/InfomationBlock";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <ContentContainer pageName='home'>
          <h1 className='text-center'>Lending Hand Cleaners!</h1>
          <p className='tag-line text-center'>
            "Leaving Our Love On Every Home"
          </p>
          <hr className='section-hr' />
          <h2 className='text-center'>Our Packages</h2>
          <CardContainer>
            <CleaningCard icon={"FaHome"} heading={"Standard Cleaning"}>
              Our standard cleaning package includes cleaning of all living
              areas in the home. Areas such as: living room, bathroom, kitchen,
              and bedrooms.
            </CleaningCard>
            <CleaningCard icon={"FaHome"} heading={"Deep Cleans"}>
              Our deep cleaning package includes all details of our standard
              package plus added details. Added details such as base boards and
              high dusting. This is an all inclusive clean, top to bottom and
              wall to wall.
            </CleaningCard>
            <CleaningCard icon={"FaHome"} heading={"Move Out Cleans"}>
              Move out cleans are ideal for your apartment living. This is a
              deep clean for customers to help ensure they get their deposit
              back.
            </CleaningCard>
          </CardContainer>
          <p className='text-center'>
            *All prices are subject to each job, and quotes will be given once
            details of the job are discussed.*
          </p>
          <hr className='section-hr' />
        </ContentContainer>

        <ContentContainer pageName='home additional'>
          <InformationBlock2 heading={"Why Choose Us?"}>
            Lending hand cleaners has been helping the East Tennessee area for
            years. We have cleaners with a combine experience that spans
            decades. When It comes to residential cleaning, you can trust our
            caring professionals to get the job done right.
          </InformationBlock2>
          <hr className='section-hr' />
        </ContentContainer>

        <ContentContainer pageName='home'>
          <h2 className='text-center'>How It Works</h2>
          <CardContainer>
            <OpCard heading='First, you request a quote' icon='FcInvite' />
            <OpCard heading='Second, we chat' icon='FcAssistant' />
            <OpCard heading='Finally, we clean' icon='FcApproval' />
            <PrimaryButton location='/contact'>Request a quote</PrimaryButton>
          </CardContainer>
        </ContentContainer>
      </main>
    </Layout>
  );
}
