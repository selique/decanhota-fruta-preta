import Head from "next/head";
import React from "react";

type PageProps = {
  title: string;
  description: string;
};
const Page: React.FC<PageProps> = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Page;
