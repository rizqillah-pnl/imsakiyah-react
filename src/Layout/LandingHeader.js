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
    </Fragment >
  );
}
