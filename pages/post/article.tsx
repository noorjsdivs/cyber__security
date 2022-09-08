import React from "react";
import Header from "../../components/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import FooterExtra from "../../components/FooterExtra";

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  title: string;
  content: string;
  article: string;
}

function Article() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch("/api/createArticle", {
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
    <div>
      <Header />
      {submitted ? (
        <div className="flex flex-col mt-10 py-10 my-10 bg-cyan-600 text-white max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-title font-bold">
            Thank you for submitting your Article!
          </h1>
          <p>
            Once it has been approved by Admin, it will be added on the Home
            page!
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 max-w-2xl mx-auto font-body"
        >
          <h3 className="font-titleFont text-[16px] text-center text-cyan-500 font-bold mb-1">
            Want to publish your own Article?
          </h3>
          <h4 className="font-bodyFont text-[30px] text-center font-bold font-title">
            Please fill up the below requirments
          </h4>
          <hr className="py-3 mt-2 border-cyan-500" />

          <label className="block mb-5 font-bodyFont ">
            <span className="text-primary labelText">Name </span>
            <input
              {...register("name", { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-500 focus:ring outline-none labelTextInput"
              placeholder="Enter your Name"
              type="text"
            />
          </label>
          <label className="block mb-5">
            <span className="text-primary labelText">Email </span>
            <input
              {...register("email", { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-500 focus:ring outline-none labelTextInput"
              placeholder="Give a valid Email"
              type="email"
            />
          </label>
          <label className="block mb-5">
            <span className="text-primary labelText">Article Title </span>
            <input
              {...register("title", { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-500 focus:ring outline-none labelTextInput"
              placeholder="Give your Article a title"
              type="text"
            />
          </label>
          <label className="block mb-5">
            <span className="text-primary labelText">Content</span>
            <textarea
              {...register("content", { required: true })}
              className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-cyan-500 focus:ring outline-none mb-5 labelTextInput"
              placeholder="Article Content will go here"
              rows={15}
            />
          </label>
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">- The Name Field is Required</span>
            )}
            {errors.email && (
              <span className="text-red-500">
                - The Email Field is Required
              </span>
            )}
            {errors.title && (
              <span className="text-red-500">
                - The Title Field is Required
              </span>
            )}
            {errors.content && (
              <span className="text-red-500">
                - The Content Field is Required
              </span>
            )}
          </div>
          <input
            className="shadow bg-cyan-500 hover:bg-cyan-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            type="submit"
          />
        </form>
      )}
      <FooterExtra />
    </div>
  );
}

export default Article;
