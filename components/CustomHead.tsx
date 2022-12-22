import Head from "next/head";
import React from "react";

function CustomHead({title = 'Data-Films', description='Information about movies'}: {title?: string, description?: string}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default CustomHead;
