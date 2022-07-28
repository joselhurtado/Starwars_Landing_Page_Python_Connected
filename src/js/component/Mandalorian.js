import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Mandalorian() {
  return (
    <div className='container'>
      <h1 className='mandalorian'>StarWars DataBank</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/ubbe2HvGZEGW0Mi6/scene.splinecode" />
      </Suspense>
    </div>
  );
}