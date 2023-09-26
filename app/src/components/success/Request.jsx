import { useEffect, useState } from 'react';
import { BiMailSend} from 'react-icons/bi';
import { Navigate } from 'react-router-dom';

const Request = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 3000); // Redirect after 3 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (redirect) {
    return <Navigate to="/client-area" />;
  }
  return (
    <div className="flex justify-center items-center bg-white md:px-32 px-10">
        <BiMailSend  />
        <h1>Request sent successfully</h1>
    </div>
  )
}

export default Request