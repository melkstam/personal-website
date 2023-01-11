import { NextPage } from 'next';
import { usePlausible } from 'next-plausible';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const FourOhFour: NextPage = () => {
  const plausible = usePlausible();
  const { pathname } = useRouter();

  useEffect(() => {
    plausible(404, {
      props: {
        pathname,
      },
    });
  }, [plausible, pathname]);

  return (
    <div className="h-screen flex justify-center items-center text-neutral-200">
      <div className="flex divide-x-2 items-center">
        <span className="p-4 text-4xl font-extrabold">404</span>
        <span className="p-4 text-lg">This page could not be found</span>
      </div>
    </div>
  );
};
export default FourOhFour;
