import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            property="og:title"
            content="NuBloom 🌼 - Gen Fractal"
            key="ogtitle"
          />
          <meta
            property="og:description"
            content="Announcing NuBloom Generation: Fractal - 8888 unique fractal flower species minted as NFTs on OpenSea. Plant flowers in our digital garden to earn rewards."
            key="ogdesc"
          />
          <meta property="og:type" content="website" key="ogtype" />
          <meta property="og:url" content="https://nubloom.space" key="ogurl" />
          <meta
            property="og:image"
            content="https://nubloom.space/images/NuBloom-logo-transparent.png"
            key="ogimage"
          />
          <meta
            property="og:site_name"
            content="https://nubloom.space/"
            key="ogsitename"
          />
          <meta
            name="twitter:card"
            content="summary_large_image"
            key="twcard"
          />
          <meta
            property="twitter:domain"
            content="nubloom.space"
            key="twdomain"
          />
          <meta
            property="twitter:url"
            content="https://nubloom.space/"
            key="twurl"
          />
          <meta
            name="twitter:title"
            content="NuBloom 🌼 - Gen Fractal"
            key="twtitle"
          />
          <meta
            name="twitter:description"
            content="Announcing NuBloom Generation: Fractal - 8888 unique fractal flower species minted as NFTs on OpenSea."
            key="twdesc"
          />
          <meta
            name="twitter:image"
            content="https://nubloom.space/images/NuBloom-logo-transparent.png"
            key="twimage"
          />
          <meta
            name="description"
            content="Announcing NuBloom Generation: Fractal - 8888 unique fractal flower species minted as NFTs on OpenSea. Plant flowers in our digital garden to earn rewards."
          />
          <meta name="keywords" content="NFT, NuBloom, Blockchain, Crypto" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
