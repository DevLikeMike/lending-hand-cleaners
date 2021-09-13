import Layout from "../components/Layout";
import Link from "next/link";
import ContentContainer from "../components/ContentContainer";

export default function _404() {
  return (
    <Layout title='LHC | 404'>
      <main className='flex flex-center col'>
        <ContentContainer>
          <div>
            <h1 className='text-center'>Sorry, that page is missing</h1>
            <ul className='m-1 flex flex-center'>
              <Link href='/'>
                <a className='light-blue'>Home</a>
              </Link>
              <Link href='/about'>
                <a className='light-blue'>About</a>
              </Link>
              <Link href='/servies'>
                <a className='light-blue'>Services</a>
              </Link>
              <Link href='/contact'>
                <a className='light-blue'>Contact</a>
              </Link>
            </ul>
          </div>
        </ContentContainer>
      </main>
    </Layout>
  );
}
