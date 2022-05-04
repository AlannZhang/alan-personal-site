import { useEffect } from 'react';
// import { Button, Row, Container } from 'react-bootstrap';
import '../styles/home.scss';

const Home = () => {
  return (
    <>
      <div className='intro'>
        <b> My Name Is Alan Zhang.</b>
        <div className='blurb'><br/>
          I'm a Systems Design Engineering student at the University of Waterloo. <br/>
          I'm a co-op student with experience in fullstack development, and DevOps. <br/>
          More details about my experience and projects can be found below.
        </div>
      </div>
      <div className='coOps'>
        <hr className='line'/>
        {/* <div className='header'><span className='text'>CO-OPs</span></div> */}
        {/* <div className='loblaw'>Loblaw Companies Limited</div> */}
      </div>
    </>
  );
}

export default Home;
