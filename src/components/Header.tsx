import Head from "next/head";

type HeaderProps = {
  title?: string;
  ogp?: string;
  description?: string;
};

export default function Header(p: HeaderProps) {
  const title = p.title || "MapStocker - Dear all orienteer";

  return (
    <Head>
      <title>{title}</title>
      {p.description && <meta name="description" content={p.description} />}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="ToolStocker" />
    </Head>
  );
}
