// import NavLink from "../Components/Navlink";
import React from "react";
import IcYeedev from '../assets/icons/ic-yeedev.png'
import IcMap from '../assets/icons/ic-mapFooter.png'
import IcMail from '../assets/icons/ic-mail.png';
import IcPhone from '../assets/icons/ic-phone.png'
import IcIg from '../assets/icons/ic-ig.png'
import IcYt from '../assets/icons/ic-yt.png'
import IcFb from '../assets/icons/ic-fbFooter.png'
import IcTw from '../assets/icons/ic-tw.png'

export default function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 text-white bg-primary">
      <div className="justify-between px-5 xl:flex xl:px-99">
        <div className="mb-10 xl:mb-0 main lg:w-[515px]">
          <img src={IcYeedev} alt="" width={200} height={100} />
          <p className="text-justify">
            <span className="font-bold">YEEDEV STUDIO</span> merupakan
            Perusahaan yang bergerak dan berinovasi dalam bidang Teknologi
            Informasi khusunya pada bidang Pengembangan Perangkat lunak yang
            berdiri tahun 2021 di Kab. Bireuen, Nanggroe Aceh Darussalam.
          </p>
          <div className="wrapperDetail lg:w-[515px] mt-20 space-y-5">
            <div className="flex items-center space-x-5 place">
              <img
                src={IcMap}
                alt="detail alamat yeedevstudio"
                width={30}
                height={30}
              />
              <p>Geulanggang Teungoh, Kota Juang, Bireuen, Aceh</p>
            </div>
            <div
              className="flex items-center space-x-5 place"
              onClick={() =>
                (window.location.href = "mailto:coo.yeedev@gmail.com")
              }
            >
              <img
                src={IcMail}
                alt="detail alamat yeedevstudio"
                width={30}
                height={30}
              />
              <p>coo.yeedev@gmail.com</p>
            </div>
            <div
              className="flex items-center space-x-5 place"
              onClick={() => (window.location.href = "tel:+62822 8592 5477")}
            >
              <img
                src={IcPhone}
                alt="detail alamat yeedevstudio"
                width={30}
                height={30}
              />
              <p>(+62)822 8592 5477</p>
            </div>
          </div>
        </div>
        <div className="mt-20 xl:flex-col navMed">
          <div className="mb-10 xl:mb-0 main lg:w-[415px]">
            <p className="text-justify">
              <span className="font-bold">Lorem ipsum</span> dolor sit amet, consectetur adipisicing elit. Facilis ab ipsum et. Tenetur illo distinctio error omnis ad aliquid autem alias! Nobis debitis harum, tempore corporis magnam atque quibusdam minus aut ipsum quo dolores! Voluptate expedita blanditiis quisquam fugit. <span className="font-bold">Recusandae</span> aliquam in deserunt adipisci debitis doloribus aliquid. Praesentium esse maiores possimus pariatur iure eligendi voluptatibus optio!
            </p>
          </div>
          <div className="mt-8 lg:flex xl:space-x-10">
            <div className="medsos">
              <h1 className="mb-8 font-bold">Media Sosial</h1>
              <div className="space-x-5">
                <button
                  type="button"
                  onClick={() =>
                  (window.location.href =
                    "https://instagram.com/yeedevstudio")
                  }
                >
                  <img src={IcIg} alt="icon instagram" width={30} height={30} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    (window.location.href = "https://twitter.com/yeedevstudio")
                  }
                >
                  <img src={IcTw} alt="icon twitter" width={30} height={30} />
                </button>
              </div>
              <div className="mt-3 space-x-5">
                <button
                  type="button"
                  onClick={() =>
                  (window.location.href =
                    "https://www.youtube.com/channel/UCcG5fRxkRWZnj-I4yPA5RXA")
                  }
                >
                  <img src={IcYt} alt="icon instagram" width={30} height={30} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                  (window.location.href =
                    "https://www.facebook.com/yeedevstudio")
                  }
                >
                  <img src={IcFb} alt="icon instagram" width={30} height={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lineV bg-white w-full h-[1px] mt-7" />
      <div className="px-5 xl:px-99 mt-7 ">
        <p className="text-xs text-center xl:text-justify font-extralight">
          © {year} Yeedev Studio - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
