import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

interface IFormContainerProps {
  uploadReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  // console.log("Requesting URL:", `${serverUrl}/shorturl`);

  //reload
  const {uploadReloadState} = props;
  //form handling
  const [fullUrl, setFullUrl] = React.useState<string>('');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl
      });
      setFullUrl('');
      uploadReloadState();
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div className='container mx-auto p-2'>
      <div className='bg-banner my-8 rounded-xl bg-cover bg-center'>
        <div className='w-full h-full rounded-xl p-20 backdrop-brightness-70'>
        <h2 className='text-4xl text-center pb-4'>URL Shortener</h2>
        <p className="text-center pb-2 text-4xl font-extralight">Paste your original link here</p>
        <p className='text-center pb-4 text-sm font-extralight'>Easy tool to shorten long links</p>
        <form onSubmit={handleSubmit} action="">
          <div className='flex'>
            <div className='relative w-full'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800'>
                urlshortener.link/ </div>
              <input type="text" placeholder='Add Your Link' required className='block w-full p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500' value={fullUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)} />
              <button type="submit" className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300' 
              >Shorten URL</button>
            </div>
          </div>
        </form>
      </div>
      </div>

    </div>
  ) ;
};

export default FormContainer;
