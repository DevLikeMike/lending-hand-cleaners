import Layout from "../components/Layout";
import ContentContainer from "../components/ContentContainer";
import PackageSection from "../components/PackageSection";

export default function services() {
  return (
    <Layout>
      <main>
        <ContentContainer pageName='services'>
          <h1 className='text-center'>Our Packages</h1>
          <p>
            Lending Hand Cleaners offers different packages to better serve our
            customers wants and needs. All package prices are adjusted to the
            job at hand, and prices will vary job to job.
          </p>

          <hr className='section-hr' />

          <PackageSection
            imgSrc='https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            side='right'
            heading='Standard Package'
          >
            Our standard cleaning package includes cleaning of all living areas
            in the home. Areas such as: living room, bathroom, kitchen, and
            bedrooms. These rooms will be cleaned by dusting, vacuuming,
            sweeping, mopping. All appliances in the bathroom and kitchen will
            be cleaned on the exterior, this includes your microwave and stove.
            Other details can be added into our packages, and price is subject
            to change depending on adjustments.
          </PackageSection>

          <hr className='section-hr' />

          <PackageSection
            imgSrc='https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            side='left'
            heading='Deep Package'
          >
            Our deep cleaning package includes cleaning of all living areas in
            the home just as our standard package, but will be a more deep and
            thorough cleaning. This means we take time to clean the baseboards
            of the home, get to any high dusting areas, and go the extra mile to
            ensure every inch of the room is spotless.
          </PackageSection>

          <hr className='section-hr' />

          <PackageSection
            imgSrc='https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            side='right'
            heading='Cleanout Package'
          >
            If you are moving out of your current apartment or rented home, and
            you would like your deposit back, this is the cleaning package for
            you. Our clean out pack is everything all inclusive. It builds on
            our "Deep Cleaning" package and adds the bonus of us cleaning the
            inside of your appliances. This ensures the stove eyes, if needed,
            the microwave, and the refrigerator will all be cleaned out
            entirely.
          </PackageSection>
        </ContentContainer>
      </main>
    </Layout>
  );
}
