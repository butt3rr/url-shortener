import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='bg-slate-900 text-white text-base text-center py-5'>Copyright &#169; URL Shortener by Nur Hanifah</div>

  );
};

export default Footer;
