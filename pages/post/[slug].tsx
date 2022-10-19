import { GetStaticProps } from "next";
import PortableText from "react-portable-text";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import FooterExtra from "../../components/FooterExtra";
import Image from "next/image";

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

interface Props {
  post: Post;
}

function Post({ post }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  return (
    <main>
      <Header />

      <Image
        width={500}
        height={130}
        layout="responsive"
        objectFit="cover"
        className="w-full h-80 object-cover"
        src={urlFor(post.mainImage).url()}
        alt="BannerImage"
        priority
        loading="eager"
      />

      <article className="max-w-3xl mx-auto p-5">
        <h1 className="font-titleFont text-[32px] text-primary border-b-[1px] border-b-cyan-800 mt-10 mb-3">
          {post.title}
        </h1>
        <h2 className="font-bodyFont text-[18px] text-gray-500 mb-2">
          {post.description}
        </h2>
        <div className="flex items-center space-x-2">
          <Image
            width={60}
            height={60}
            objectFit="fill"
            className="rounded-full bg-red-400"
            src={urlFor(post.author.image).url()}
            alt="authorImage"
          />

          <p className="font-bodyFont text-[16px]">
            Blog post by{" "}
            <span className="text-cyan-600 font-bold">{post.author.name}</span>{" "}
            - Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div className="mt-10 font-bodyFont">
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "8b5tp3lo"}
            content={post.body}
            serializers={{
              p: (props: any) => (
                <p className="font-bodyFont text-[16px]" {...props} />
              ),
              h1: (props: any) => (
                <h1
                  className="text-2xl font-bold my-5 font-titleFont"
                  {...props}
                />
              ),
              h2: (props: any) => (
                <h2
                  className="text-2xl font-bold my-5 font-titleFont"
                  {...props}
                />
              ),
              h3: (props: any) => (
                <h3
                  className="text-2xl font-bold my-5 font-titleFont"
                  {...props}
                />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-cyan-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
      <hr className="max-w-lg my-5 mx-auto border-cyan-500" />
      {submitted ? (
        <div className="flex flex-col p-10 my-10 bg-cyan-500 text-white max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold">
            Thank you for sumitting your comment!
          </h3>
          <p className="text-center">
            Once it has been approved, it will appear below!
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex mx-auto flex-col p-5 max-w-2xl mb-10 w-full"
        >
          <h3 className="font-titleFont text-[16px] text-cyan-500">
            Enjoyed this article
          </h3>
          <h4 className="text-3xl font-bold">Leave a comment below!</h4>
          <hr className="py-3 mt-2" />

          <input
            {...register("_id")}
            type="hidden"
            name="_id"
            value={post._id}
          />

          <label className="block mb-5">
            <span className="labelText">Name</span>
            <input
              {...register("name", { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-500 outline-none focus:ring labelTextInput"
              placeholder="Enter your name"
              type="text"
            />
          </label>
          <label className="block mb-5">
            <span className="labelText">Email</span>
            <input
              {...register("email", { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-500 outline-none focus:ring labelTextInput"
              placeholder="Place your Email"
              type="email"
            />
          </label>
          <label className="block mb-5">
            <span className="labelText">Comment</span>
            <textarea
              {...register("comment", { required: true })}
              className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-cyan-500 outline-none focus:ring labelTextInput"
              placeholder="Comments will go here"
              rows={8}
            />
          </label>
          {/* errors will return when field validation fails */}
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">- The Name Field is required</span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                - The Comment Field is required
              </span>
            )}
            {errors.email && (
              <span className="text-red-500">
                - The Enail Field is required
              </span>
            )}
          </div>
          <input
            type="submit"
            className="shadow bg-cyan-600 hover:bg-sky-900 focus:shadow-outline focus:outline-none text-white font-titleFont font-bold duration-300 text-[18px] py-2 px-4 rounded cursor-pointer"
          />
        </form>
      )}

      {/* Comments will go here */}
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-cyan-500 shadow space-y-2"
      >
        <h3 className="text-4xl">Comments</h3>
        <hr className="pb-2" />
        {post.comments.map((comment) => (
          <div key={comment._id}>
            <p>
              <span className="text-cyan-500">{comment.name}:</span>{" "}
              {comment.comment}
            </p>
          </div>
        ))}
      </motion.div>
      <FooterExtra />
    </main>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == 'post']{
  _id,
 slug{
  current
}
}`;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug ][0]{
  _id,
  _createdAt,
  title,
  author->{
  name,
  image
},
"comments": *[
  _type == "comment" &&
  post._ref == ^._id &&
  approved == true],
description,
mainImage,
slug,
body
}`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 60, // After 60 seconds, it will update the old cache version.
  };
};
