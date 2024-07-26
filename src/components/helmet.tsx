import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet-async'

interface HelmetProps {
  title: string;
  description: string;
  keywords: string;
}

const Helmet: React.FC<HelmetProps> = ({ title, description, keywords }) => {
  return (
    <ReactHelmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </ReactHelmet>
  );
};

export default Helmet;
