import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { urlFor } from "../sanity";
import Image from "next/image";
import Link from "next/link";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6 px-4">
        {currentItems &&
          currentItems.map((item) => (
            <div className="w-full h-auto" key={item._id}>
              <Link href={`/post/${item.slug.current}`} passHref>
                <div className="group brightness-75 hover:brightness-100 duration-100 cursor-pointer overflow-hidden border rounded-lg">
                  <Image
                    width={380}
                    height={300}
                    objectFit="cover"
                    layout="responsive"
                    className="group-hover:scale-105 transition-transform ease-in-out duration-300"
                    src={urlFor(item.mainImage).url()}
                    alt="images"
                  />
                  <div className="flex justify-between h-[280px] p-5 bg-white  text-primary">
                    <div>
                      <div className="flex items-center justify-between border-b-[1px] border-b-cyan-900 mb-2">
                        <p className="font-titleFont font-bold text-[20px]">
                          {item.title}
                        </p>
                        <Image
                          width={50}
                          height={50}
                          objectFit="fill"
                          className="rounded-full bg-red-400"
                          src={urlFor(item.author.image).url()}
                          alt="authorImage"
                        />
                      </div>
                      <p className="font-bodyFont text-[14px]">
                        {item.description} <br />
                        <span className="font-semibold">by_ </span>
                        <span className="font-titleFont font-bold text-[18px] text-primary">
                          {item.author.name}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

const Pagination = ({ itemsPerPage, posts }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, posts]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="text-dimWhite border-b-[1px] border-b-cyan-900 pb-6">
      <Items currentItems={currentItems} />
      <ReactPaginate
        className="flex uppercase justify-end gap-4 ml-10 font-titleFont text-[18px] font-bold hover:text-white duration-200"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
