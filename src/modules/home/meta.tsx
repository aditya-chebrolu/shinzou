import { description, keywords, title } from "@constants/data/meta";
import Head from "next/head";

const PortfolioMeta = () => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Aditya Chebrolu" />
      <meta name="robots" content="index,follow" />
      <meta name="keywords" content={keywords} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      {/* og */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content="/path/to/your/image.jpg" />  */}
      {/* ios */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="AC Portfolio" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      <link rel="canonical" href="https://www.adityachebrolu.com" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Aditya Chebrolu",
            jobTitle: "Full Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Bajaj Finserv Health",
            },
            url: "https://www.adityachebrolu.com",
            sameAs: [
              "https://www.linkedin.com/in/adityachebrolu",
              "https://github.com/adityachebrolu",
            ],
          }),
        }}
      />
    </Head>
  );
};

export default PortfolioMeta;
