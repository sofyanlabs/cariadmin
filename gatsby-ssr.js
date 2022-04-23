/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="dmsans-regular"
      rel="preload"
      href="/fonts/dm-sans-v11-latin-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="dmsans-medium"
      rel="preload"
      href="/fonts/dm-sans-v11-latin-500.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="dmsans-bold"
      rel="preload"
      href="/fonts/dm-sans-v11-latin-700.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  ]);
};