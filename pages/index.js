import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ContentContainer from "../components/ContentContainer";
import CleaningCard from "../components/Cleaning-Card";
import CardContainer from "../components/CardContainer";
import {
  InformationBlock,
  InformationBlock2,
} from "../components/InfomationBlock";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <ContentContainer pageName='home'>
          <h1 className='text-center'>Lending Hand Cleaners</h1>
          <p className='tag-line text-center'>Leaving Our Love On Every Home</p>
          <hr className='section-hr' />
          <h2 className='text-center'>Our Packages</h2>
          <CardContainer>
            <CleaningCard icon={"FaHome"} heading={"Standard Cleaning"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              quisquam eligendi odit sequi nam ad quibusdam qui laborum possimus
              a?
            </CleaningCard>
            <CleaningCard icon={"FaHome"} heading={"Deep Cleans"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              quisquam eligendi odit sequi nam ad quibusdam qui laborum possimus
              a?
            </CleaningCard>
            <CleaningCard icon={"FaHome"} heading={"Move Out Cleans"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              quisquam eligendi odit sequi nam ad quibusdam qui laborum possimus
              a?
            </CleaningCard>
          </CardContainer>
          <hr className='section-hr' />
        </ContentContainer>
        <ContentContainer pageName='home additional'>
          <InformationBlock2 heading={"Why Choose Us?"}>
            Lending hand cleaners has been helping the East Tennessee area for
            years. We have cleaners with a combine experience that spans
            decades. When It comes to residential cleaning, you can trust our
            caring professionals to get the job done right.
          </InformationBlock2>
        </ContentContainer>
      </main>
    </Layout>
  );
}
