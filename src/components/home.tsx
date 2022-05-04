import { useEffect } from 'react';
// import { Button, Row, Container } from 'react-bootstrap';

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#e8f4f8';
  });

  return (
    <div>
        <h1> My Name Is Alan Zhang. I'm a Systems Design Engineering Student at the University of Waterloo.</h1>
    </div>
  );
}

export default Home;
