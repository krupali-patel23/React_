import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

export default function Googledemo() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
  return (
    <div>
      <h1>Google Demo</h1>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

    </div>

  )
}
