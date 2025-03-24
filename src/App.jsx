import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  companyProfile,
  newInformation,
  historyInfo,
  workContent,
  itIntroC1,
  techInfo,
  officeInfo,
  contactInfo,
  bgImgUrls,
  bgTexts,
} from "./staticTexts/text";

import GoogleMapComponent from "./pages/Googlemap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaPhone } from "react-icons/fa6";

function App() {
  // Get the current year for the footer
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const backgroundElement = backgroundRef.current; // Store the ref value in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on whether the background is visible
        setIsBackgroundVisible(entry.isIntersecting);
      },
      {
        root: null, // Observe relative to the viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the background is visible
      }
    );

    if (backgroundElement) {
      observer.observe(backgroundElement);
    }

    // Cleanup observer on unmount
    return () => {
      if (backgroundElement) {
        observer.unobserve(backgroundElement); // Use the variable here
      }
    };
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-amber-400">
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 text-sm bg-gray-300 text-white rounded shadow-lg hover:bg-gray-400 transition-colors duration-300"
        >
          TOP
        </button>
      )}
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-200 ${
          isBackgroundVisible
            ? "bg-transparent text-white"
            : "bg-white text-gray-800 shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="img/fkc-logo.png" alt="FKC logo" />
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 transition duration-300"
                >
                  ホーム
                </a>
              </li>
              <li>
                <a
                  href="#company-profile"
                  className="hover:text-blue-400 transition duration-300"
                >
                  会社概要
                </a>
              </li>
              <li>
                <a
                  href="#it-business-unit"
                  className="hover:text-blue-400 transition duration-300"
                >
                  IT事業部
                </a>
              </li>
              <li>
                <a
                  href="#reform"
                  className="hover:text-blue-400 transition duration-300"
                >
                  リフォーム事業部
                </a>
              </li>
              <li>
                <a
                  href="#recruitment"
                  className="hover:text-blue-400 transition duration-300"
                >
                  採用情報
                </a>
              </li>
              <li>
                <a
                  href="#access"
                  className="hover:text-blue-400 transition duration-300"
                >
                  アクセス
                </a>
              </li>{" "}
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition duration-300"
                >
                  お問い合せ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <section id="home" className=" bg-blue-600 text-white">
          <div
            ref={backgroundRef}
            className="container min-w-full bg-amber-200"
          >
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              navigation={true}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className="w-full h-screen"
            >
              {bgImgUrls.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`${image} w-full h-screen flex items-center text-white text-center bg-cover bg-center bg-fixed`}
                  >
                    <h1 className="text-6xl font-bold ml-32">
                      {bgTexts[index]}
                    </h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Home Section */}

        {/* Company Profile Section */}
        <section id="company-profile" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">会社概要</h2>
            <div className="flex text-gray-700">
              <ul className="flex-1/3">
                {companyProfile.map((el, i) => {
                  return <li key={i}>{el.key}</li>;
                })}
              </ul>
              <ul className="flex-1/3">
                {companyProfile.map((el, i) => {
                  return <li key={i}>{el.value}</li>;
                })}
              </ul>
              <div className="flex-1/3"></div>
            </div>
            <h2 className="text-3xl font-bold mb-8 mt-8">社長挨拶</h2>
            <p className="text-gray-700">
              情報化が急速に進み少子高齢化をむかえようとしている昨今、人材の育成は私たちの将来に置いて最重要課題となってまいりました。
              私どもFKC株式会社は人を育て、人と共に成長し双方に貢献していくことを念頭に若々しくダイナミックな集団を目指しています。
              当社はIT業務請負やソフトウェアの受託開発を手掛けています。
              食品部門においては高速道路等の商品開発に力を注ぎ、地域に密着した商品販売をおこなっています。
              FKC＝福祉をモットーに、当社と関わった人達の助け合い精神を大事にしていきます。{" "}
            </p>

            <div className="flex">
              <div className="flex-1/2">
                <h2 className="text-3xl font-bold mb-8 mt-8">最新情報</h2>
                {newInformation.map((el, i) => {
                  return (
                    <div className="flex gap-x-20" key={i}>
                      <div>{el.date}</div>
                      <div>{el.info}</div>
                    </div>
                  );
                })}
                <h2 className="text-3xl font-bold mb-8 mt-8">沿革</h2>
                {historyInfo.map((el, i) => {
                  return (
                    <div className="flex gap-x-20" key={i}>
                      <div>{el.date}</div>
                      <div>{el.info}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex-1/2">
                {workContent.map((el, i1) => {
                  return (
                    <div key={i1}>
                      <h2 className="text-3xl font-bold mb-8 mt-8 underline">
                        {el.title}
                      </h2>
                      {el.section.map((sec, i2) => {
                        return (
                          <div className="flex gap-x-10" key={i2}>
                            <div className="font-bold mb-auto">
                              {sec.subtitle}
                            </div>
                            <ol>
                              {sec.value.map((value, i3) => {
                                return <li key={i3}>{value}</li>;
                              })}
                            </ol>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* IT Business Unit Section */}
        <section id="it-business-unit" className="py-20 bg-white">
          <div className="container mx-auto px-4 flex gap-x-10">
            <div className="flex-1/2">
              <h2 className="text-3xl font-bold mb-8">IT事業部紹介</h2>
              {itIntroC1.map((el, i1) => {
                return (
                  <div key={i1}>
                    <h2 className="text-3xl font-bold mb-8 mt-8 underline">
                      {el.title}
                    </h2>
                    <ul>
                      {el.infos.map((info, i2) => {
                        return <li key={i2}>{info}</li>;
                      })}
                    </ul>
                    <img
                      src={el.img_url}
                      alt="Hero Image"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex-1/2">
              <h2 className="text-3xl font-bold mb-8">技術</h2>
              {techInfo.map((el, i1) => {
                return (
                  <div key={i1}>
                    <h3 className="text-3xl font-bold mb-8 mt-8 underline">
                      {el.title}
                    </h3>
                    {el.values.map((value, i2) => {
                      return <p key={i2}>{value}</p>;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section id="reform" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">リフォーム事業部</h2>
            <a href="/">
              <div className="relative  group">
                <img
                  className="full-width img-responsive"
                  src="img/1920x800/01.jpg"
                  alt="Portfolio Image"
                />
                <div className="absolute inset-0 flex flex-col z-10 justify-center ml-20 text-shadow-lg group-hover:text-white">
                  <h2 className="text-6xl font-bold mb-4">
                    リフォーム事業部紹介
                  </h2>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100"></div>
              </div>
            </a>
          </div>
        </section>

        {/* Recruitment Section */}
        <section id="recruitment" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">採用情報</h2>
            <div className="flex gap-x-1.5">
              <div className="relative group flex-1/2">
                <img
                  className="w-full img-responsive"
                  src="img/397x300/01.jpg"
                  alt="Portfolio Image"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 "></div>

                <div className="absolute inset-0 flex flex-col justify-center pl-20 text-shadow-lg z-10 group-hover:text-white">
                  <h2 className="text-3xl font-bold mb-4">経験者採用 / 要項</h2>
                </div>
              </div>
              <div className="relative group flex-1/2">
                <img
                  className="w-full img-responsive"
                  src="img/397x300/02.jpg"
                  alt="Portfolio Image"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 "></div>

                <div className="absolute inset-0 flex flex-col justify-center pl-20 text-shadow-lg z-10 group-hover:text-white">
                  <h2 className="text-3xl font-bold mb-4">
                    未経験者採用 / 要項
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Access Section */}
        <section id="access" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">アクセス</h2>
            <div className="flex mb-2">
              {officeInfo.map((office, i) => {
                return (
                  <div className="flex-1/3" key={i}>
                    <div className="flex gap-1.5">
                      <h2>{office.name}</h2>
                      <p>{office.title}</p>
                    </div>
                    <p>〒{office.postNumber}</p>
                    <p>{office.address}</p>
                  </div>
                );
              })}
            </div>
            <GoogleMapComponent />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">お問い合せ</h2>

            <div>
              {contactInfo.map((phone, i) => {
                return (
                  <div className="flex items-center gap-2">
                    <FaPhone />
                    <p key={i}>{phone}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center flex justify-between">
          <img src="img/fkc-logo-dark.png" alt="Hero Image" className="w-32" />
          <p>Copyright &copy; {currentYear}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
