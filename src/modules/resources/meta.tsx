import Head from "next/head";

const description =
  "Discover the best tech resources including YouTube channels, websites, and LinkedIn profiles for learning and enhancing your skills in computer science and technology.";
const keywords =
  "tech resources, computer science, technology, YouTube channels, websites, LinkedIn profiles, CSS, web development, system design, JavaScript, React, Next.js";
const title = "Tech Resources for Web Developers";

const ResourcesMeta = () => {
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
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.adityachebrolu.com/resources"
      />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* Apple-specific tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Tech Resources" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      <link rel="canonical" href="https://www.adityachebrolu.com/resources" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description: description,
            url: "https://www.adityachebrolu.com/resources",
            mainEntityOfPage: "https://www.adityachebrolu.com/resources",
            creator: {
              "@type": "Person",
              name: "Aditya Chebrolu",
              sameAs: [
                "https://www.linkedin.com/in/adityachebrolu",
                "https://github.com/adityachebrolu",
              ],
            },
            publisher: {
              "@type": "Person",
              name: "Aditya Chebrolu",
            },
          }),
        }}
      />
    </Head>
  );
};

export default ResourcesMeta;
