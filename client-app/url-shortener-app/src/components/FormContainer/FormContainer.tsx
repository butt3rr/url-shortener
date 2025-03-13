import * as React from 'react';

interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  return (
    <div className='container mx-auto p-2'>
      <div className='bg-banner my-8 rounded-xl bg-cover bg-center'>
        <div className='w-full h-full rounded-xl p-20 backdrop-brightness-70'>
        <h2 className='text-4xl text-center pb-4'>URL Shortener</h2>
        <p className="text-center pb-2 text-4xl font-extralight">Paste your original link here</p>
        <p className='text-center pb-4 text-sm font-extralight'>Easy tool to shorten long links</p>
      </div>
      </div>

    </div>
  ) ;
};

export default FormContainer;
