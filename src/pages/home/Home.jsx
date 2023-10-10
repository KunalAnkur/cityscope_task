import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown === 1) {
        navigate('/store');
      } else {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);
  return (
    <div className='home-page'>
      <h1>Home Page</h1>
      <h3>Please explore all other pages. start with store</h3>
      <p>Redirecting to /store in</p>
      <span>{countdown}s...</span>
    </div>
  )
}

export { Home }