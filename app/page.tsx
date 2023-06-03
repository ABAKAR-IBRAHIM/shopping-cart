"use client";
import Image from "next/image";
import ReactStars from "react-stars";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Laptop sleeve MacBook",
      href: "#",
      imageSrc:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png",
      discription: "Organic Cotton, fairtrade certified",
      price: 59.0,
      rating: 5,
      review: 121,
    },
    {
      id: 2,
      name: "AirPods Max",
      href: "#",
      imageSrc:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png",
      discription: "A perfect balance of high-fidelity audio",
      price: 559.0,
      rating: 5,
      review: 23,
    },
    {
      id: 3,
      name: "Flower Laptop Sleeve",
      href: "#",
      imageSrc:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png",
      discription: "15 in. x 10 in. -Flap top closure",
      price: 39.0,
      rating: 5,
      review: 33,
    },
    {
      id: 3,
      name: "Flower Laptop Sleeve",
      href: "#",
      imageSrc:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png",
      discription: "15 in. x 10 in. -Flap top closure",
      price: 39.0,
      rating: 5,
      review: 33,
    },
    {
      id: 1,
      name: "Laptop sleeve MacBook",
      href: "#",
      imageSrc:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png",
      discription: "Organic Cotton, fairtrade certified",
      price: 59.0,
      rating: 5,
      review: 121,
    },

    {
      id: 2,
      name: "Flower Laptop Sleeve",
      href: "#",
      imageSrc:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png",
      discription: "15 in. x 10 in. -Flap top closure",
      price: 39.0,
      rating: 5,
      review: 33,
    },
    {
      id: 1,
      name: "Laptop sleeve MacBook",
      href: "#",
      imageSrc:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png",
      discription: "Organic Cotton, fairtrade certified",
      price: 59.0,
      rating: 5,
      review: 121,
    },

    {
      id: 3,
      name: "Flower Laptop Sleeve",
      href: "#",
      imageSrc:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png",
      discription: "15 in. x 10 in. -Flap top closure",
      price: 39.0,
      rating: 5,
      review: 33,
    },
  ];
  return (
    <>
      <div className="p-[70px]">
        <div className="  h-[320px] relative">
          <Image src="/hero.webp" alt="hero  image" fill={true} />
          <div className=" absolute h-60 w-80 bg-transparent   font-bold  pt-48 text-2xl   m-auto left-0 right-0">
            Pay in your local currency and shop with confident
          </div>
          <div className="   bg-zinc-800 hover:bg-green-900  font-semibold text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded-full absolute  bottom-3    left-40 ">
            Shop Now
          </div>
        </div>
        <div className=" p-16  font-bold  text-4xl">
          {"Today's Best Daily Deals"}
        </div>
        <div className="  pt-20 grid  relative grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <Image
                className="hover:grow hover:shadow-lg bg-zinc-100 w-[350px]"
                src={product.imageSrc}
                alt={""}
                width={350}
                height={200}
              />

              <div className="flex items-center text-gray-900font-sans pt-1 justify-between pr-3 ">
                <p className="">{product.name}</p>
                <p className=" text-gray-900">{`$${product.price}`}</p>
              </div>

              <p className="pt-1  text-gray-900 font-serif text-sm">{`${product.discription}`}</p>

              <div className="flex items-center">
                <ReactStars
                  count={5}
                  size={14}
                  color2={"#2cb978"}
                  edit={false}
                  color1={"#2cb978"}
                />
                {`(${product.review})`}
              </div>

              <div className="pt-2 ">
                <button className="bg-transparent hover:bg-green-900  text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded-full ">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className=" p-16  font-bold  text-4xl">
          Most Selling Products
          <p className=""></p>
        </div>

        <div className="  pt-20 grid  relative grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <Image
                className="hover:grow hover:shadow-lg bg-zinc-100 w-[350px]"
                src={product.imageSrc}
                alt={""}
                width={350}
                height={200}
              />

              <div className="flex items-center text-gray-900font-sans pt-1 justify-between pr-3 ">
                <p className="">{product.name}</p>
                <p className=" text-gray-900">{`$${product.price}`}</p>
              </div>

              <p className="pt-1  text-gray-900 font-serif text-sm">{`${product.discription}`}</p>

              <div className="flex items-center">
                <ReactStars
                  count={5}
                  size={14}
                  color2={"#2cb978"}
                  edit={false}
                  color1={"#2cb978"}
                />
                {`(${product.review})`}
              </div>

              <div className="pt-2 ">
                <button className="bg-transparent hover:bg-green-900  text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded-full ">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
