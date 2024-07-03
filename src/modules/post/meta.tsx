import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  keywords: string;
};

const PostMeta = ({ title, description, keywords }: Props) => {
  const { query } = useRouter();
  const url = `https://www.adityachebrolu.com/posts/${query.post}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Aditya Chebrolu" />
      <meta name="robots" content="index,follow" />
      <meta name="publisher" content="Aditya Chebrolu" />
      <meta name="keywords" content={keywords} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      {/* og */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      {/* <meta property="og:image" content={image} /> */}
      {/* ios */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Blog Post" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      <link rel="canonical" href={url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: description,
            author: {
              "@type": "Person",
              name: "Aditya Chebrolu",
            },
            publisher: {
              "@type": "Organization",
              name: "Aditya Chebrolu",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url,
            },
          }),
        }}
      />
    </Head>
  );
};

export default PostMeta;
