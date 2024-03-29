import Head from "next/head";
import Header from "../components/Header";
import { sanityClient } from "../sanity";
import { Post } from "../typings";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CardDeal from "../components/CardDeal";
import Billing from "../components/Billing";
import VideoContent from "../components/VideoContent";
import Pagination from "../components/Pagination";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="xs:max-w-[500px] sm:max-w-full bg-primary">
      <div className="max-w-screen-xl mx-auto">
        <Head>
          <title>Cyber Security Blog - Noor Mohammad</title>
          <meta name="description" content="Cyber Security Blog" />
          <meta name="robots" content="all" />
          <link rel="icon" href="/noor.png" />
        </Head>
        <Header />
        <Hero />
        <CardDeal />

        {/* Posts */}
        <div className="w-full flex flex-row justify-center items-center border-b-[1px] border-b-cyan-900">
          <h1 className="font-titleFont text-[30px] lgl:text-[50px] text-dimWhite">
            Cyber Security Articles:
          </h1>
        </div>
        <Pagination itemsPerPage={6} posts={posts} />
        <VideoContent />
        <Billing />
        <Footer />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == 'post']{
  _id,
  title,
  author->{
  name,
  image
},
description,
mainImage,
slug
}`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
