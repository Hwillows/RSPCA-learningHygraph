import React, { useEffect, useState, useRef } from "react";
import paw from "../paw.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import cattery from "../warringtoncattery.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  const [homeData, setHomeData] = useState();
  const [homepageimage1, setHomeimage1] = useState([]);
  const [URL, setURL] = useState([]);
  const [heading, setHeading] = useState();
  const [paragraph1, setParagraph1] = useState();
  const [bannerImage, setBannerImage] = useState();
  const [middleP1, setMiddleP1] = useState();
  const [middleP2, setMiddleP2] = useState();

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? URL.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === URL.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (oneURLindex) => {
    setCurrentIndex(oneURLindex);
  };

  async function fetchHomeData() {
    await fetch(
      "https://api-eu-west-2.hygraph.com/v2/clj8pi2kp1hee01uefdyv3pmo/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: ` {homes {
  heading
  paragraph1
  mainImage {
    url
  }
  slug
}

homepageMiddles {
  bannerImage {
    url
  }
  firstParagraph
  secondParagraph
}

}`,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const info = data.data;
        setHomeData(info.homes[0]);
        setHomeimage1(info.homes[0].mainImage);
        setHeading(info.homes[0].heading);
        setParagraph1(info.homes[0].paragraph1);
        setBannerImage(info.homepageMiddles[0].bannerImage.url);
        setMiddleP1(info.homepageMiddles[0].firstParagraph);
        setMiddleP2(info.homepageMiddles[0].secondParagraph);

        //findURL();
      });
    // findURL();
    // console.log(URL);
  }

  function findURL() {
    setURL([]);
    for (let i = 0; i < homepageimage1.length; i++) {
      let imagesURL = homepageimage1[i].url;
      setURL((current) => [...current, imagesURL]);
    }

    console.log(URL);
  }

  useEffect((e) => {
    fetchHomeData();
    findURL();
  }, []);
  // const slideshowpets = setTimeout(
  //   <img
  //     src={URL[currentIndex]}
  //     alt="Animals for adoption"
  //     className="justify-self-center rounded-md"
  //   ></img>,
  //   100
  // );

  // const delayedURL = setTimeout(URL, 5000);

  return (
    <div className="">
      <div className="grid grid-cols-1">
        <div className="relative">
          {/* First section */}
          <div className="grid grid-cols-1">
            <div className="grid relative">
              <img
                src={paw}
                alt="Paw print"
                className="absolute opacity-40 h-[70%] w-[50%] justify-self-end m-5 sm:p-5"
              ></img>
              <div className="static flex flex-col-reverse sm:grid sm:grid-cols-2">
                <div className="relative grid m-20 group sm:h-[60%]">
                  <img
                    src={URL[currentIndex]}
                    alt="Animals for adoption"
                    className="justify-self-center rounded-md"
                  ></img>
                  {/* Left Arrow */}
                  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                  </div>
                  {/* Right Arrow */}
                  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                  </div>
                  <div className="flex top-4 justify-center py-2">
                    {URL.map((oneURL, oneURLindex) => (
                      <div
                        key={oneURLindex}
                        onClick={() => goToSlide(oneURLindex)}
                        className="text-2xl cursor-pointer"
                      >
                        <RxDotFilled />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h1 className="static raleway mx-10 my-5 font-bold sm:text-[20px] sm:mt-20 sm:mb-10 md:w-[50%]">
                    {heading}
                  </h1>{" "}
                  <h2 className="raleway inline-block mx-10 pl-10 sm:text-[20px]  md:w-[50%]">
                    {paragraph1}
                  </h2>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          {/* Middle Section */}
          <div className="grid grid-cols-1">
            <img
              src={bannerImage}
              alt="RSPCA inspector"
              className="place-self-center rounded-md"
            ></img>
            <div className="md:w-[60%] place-self-center">
              <div className="lg:mx-20">
                <p className="raleway inline-block mx-10  sm:text-[20px] my-10">
                  {middleP1}
                </p>
              </div>
              <div className="lg:mx-20">
                <p
                  className="raleway inline-block mx-10 sm:text-[20px] mb-10
             "
                >
                  {middleP2}
                </p>
              </div>
            </div>
          </div>
          {/* Final section */}
          <div className="grid justify-items-center">
            <div className="grid grid-cols-1 bg-[#B5E0DC] md:mx-20 my-10 md:w-[70%] rounded">
              <h1 className="static raleway mx-10 my-5 font-bold sm:text-[20px] sm:mt-20 sm:mb-10 text-center ">
                Our Animal Welfare Projects
              </h1>
              <div className="flex top-4 justify-center py-2">
                <div className="mx-3 text-2xl">
                  <AiOutlineArrowLeft />
                </div>
                <div className="mx-3 text-2xl">
                  <AiOutlineArrowRight />
                </div>
              </div>
              <div>
                <h1 className="static raleway mx-10 mt-5 font-bold sm:text-[20px] sm:mt-20 sm:mb-10 text-center">
                  New Cattery at Warrington Animal Centre
                </h1>
                <div className="flex top-4 justify-center py-2">
                  <img src={cattery} alt=""></img>
                </div>
                <div className="grid justify-items-center">
                  <p className="raleway inline-block mx-10 md:w-[60%] pl-10 sm:text-[20px] my-10 place-self-center">
                    In June 2008 a new cattery, dog isolation unit,
                    miscellaneous unit and vet facility was completed. This was
                    the cumulation of 5 years of fundraising, donations and
                    legacies to provide a new state of the art facility for
                    animal care. Altrincham RSPCA donated £150,000 toward the
                    total cost of £720,000.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Home;
