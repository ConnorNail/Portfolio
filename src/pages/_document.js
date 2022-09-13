import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Connor Nail - Robotics Engineer & Software Developer" />
          <meta name="description" content="My name is Connor Nail, I am a Robotics & Autonomous Systems graduate student enrolled at Arizona State University. I have a background in the CMP process of semiconductor manufacturing with experience in reliability testing, physics simulations, and web development." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Connor Nail - Robotics Engineer & Software Developer" />
          <meta property="og:description" content="My name is Connor Nail, I am a Robotics & Autonomous Systems graduate student enrolled at Arizona State University. I have a background in the CMP process of semiconductor manufacturing with experience in reliability testing, physics simulations, and web development." />
          <meta property="og:image" content="https://connornail.vercel.app/images/banner.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Connor Nail - Robotics Engineer & Software Developer" />
          <meta property="twitter:description" content="My name is Connor Nail, I am a Robotics & Autonomous Systems graduate student enrolled at Arizona State University. I have a background in the CMP process of semiconductor manufacturing with experience in reliability testing, physics simulations, and web development." />
          <meta property="twitter:image" content="https://connornail.vercel.app/images/banner.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
