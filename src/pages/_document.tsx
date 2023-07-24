import React from 'react'
import Document, { Html, Main,Head, NextScript } from 'next/document'
import MyHead from '@components/head'


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <MyHead />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
