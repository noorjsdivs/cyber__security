import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CardDeal from "../components/CardDeal";
import Billing from "../components/Billing";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="w-full bg-primary ">
      <div className="max-w-screen-xl mx-auto">
        <Head>
          <title>Noor--Cyber Security Bolg</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Hero />
        <CardDeal />

        {/* Posts */}
        <div className="w-full flex justify-center items-center border-b-[1px] border-b-cyan-900">
          <h1 className="font-titleFont text-[50px] text-dimWhite">
            Popular Articles:
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6 border-b-[1px] border-b-cyan-900">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group brightness-75 hover:brightness-100 duration-100 cursor-pointer overflow-hidden border rounded-lg">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform ease-in-out duration-300"
                  src={urlFor(post.mainImage).url()}
                  alt=""
                />
                <div className="flex justify-between h-full p-5 bg-white">
                  <div>
                    <p className="font-titleFont font-bold text-[18px]">
                      {post.title}
                    </p>
                    <p className="font-bodyFont text-[14px]">
                      {post.description} by {post.author.name}
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-end">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={urlFor(post.author.image).url()}
                      alt="articleImages"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
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

// export default Home;
