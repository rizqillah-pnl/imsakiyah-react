import React, { Fragment } from "react";
import ImBg from "../assets/images/mesjid.jpg";
// import SecondaryButton from "../Components/SecondaryButton";
// import { useNavigate } from "react-router-dom";

export default function LandingHeader() {
  // const navigate = useNavigate();
  const d = new Date();
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  let month = months[d.getMonth()]

  return (
    <Fragment>
      <div
        className={`flex flex-col relative justify-center min-h-screen px-5 font-bold text-center bg-no-repeat bg-cover md:px-0 md:text-6xl header-wrapper bg-inherit`}
        style={{
          backgroundImage: `url('${ImBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}>
        <div className="absolute inset-0 bg-gray-900 opacity-40" />
        <div className="relative mt-10 text-center heading-wrapper">
          <h1 className="text-2xl text-white">
            IMSAKIYAH
          </h1>
          <h4 className="text-base font-normal text-white">
            Jadwal Imsak {d.getDate()} {month} {d.getFullYear()}
          </h4>
          <h4 className="text-base font-normal text-white">
            13 Menit menuju waktu Shalat Isya di Kota Lhokseumawe
          </h4>
        </div>
      </div>

      <div className="bg-primary grid grid-cols-6 gap-6 py-1">
        <div className="mx-auto">
          <div>
            <h2 className="text-1xl text-white font-bold">IMSAK</h2>
          </div>
        </div>
        <div className="mx-auto">
          <h2 className="text-1xl text-white font-bold">SUBUH</h2>
        </div>
        <div className="mx-auto">
          <h2 className="text-1xl text-white font-bold">DZUHUR</h2>
        </div>
        <div className="mx-auto">
          <h2 className="text-1xl text-white font-bold">ASHAR</h2>
        </div>
        <div className="mx-auto">
          <h2 className="text-1xl text-white font-bold">MAGHRIB</h2>
        </div>
        <div className="mx-auto">
          <h2 className="text-1xl text-white font-bold">ISYA</h2>
        </div>
      </div>
      <div className="bg-white grid grid-cols-6 gap-6">
        <div className="mx-auto">
          <h3 className="text-1xl text-black">04:30</h3>
        </div>
        <div className="mx-auto">
          <h3 className="text-1xl text-black">04:50</h3>
        </div>
        <div className="mx-auto">
          <h3 className="text-1xl text-black">12:20</h3>
        </div>
        <div className="mx-auto">
          <h3 className="text-1xl text-black">15:50</h3>
        </div>
        <div className="mx-auto">
          <h3 className="text-1xl text-black">18:20</h3>
        </div>
        <div className="mx-auto">
          <h3 className="text-1xl text-black">19:50</h3>
        </div>
      </div>
    </Fragment >
  );
}
