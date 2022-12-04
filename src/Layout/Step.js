import CardStep from "../Components/CardStep";
import IcTouch from "../assets/icons/ic-interaction.png";
import IcInput from '../assets/icons/ic-inputData.png'
import IcConfirm from '../assets/icons/ic-confirm.png'
import ImStep from '../assets/images/im-step.png'


export default function Step() {
  return (
    <div className="px-8 py-20 bg-white lg:space-x-0 lg:pb-36 wrapper xl:px-99" id="step">
      <h1 className="font-bold text-center text-md md:text-2xl">
        Jadi para penggerak perubahan, ajak desa kamu menjadi desa cerdas
      </h1>
      <p className="text-xs text-center md:text-base text-cardText">
        Daftarkan desa kamu untuk bergabung dengan desa cerdas dengan tahapan
        berikut
      </p>
      <div className="mt-20 wrapperDetails md:flex md:justify-center md:space-x-5">
        <div className="space-y-5 cardWrapper">
          <CardStep
            icon={IcTouch}
            title={`1. Ketuk Menu "Registrasi Desa"`}
            desc={`Klik atau pilih menu "Registrasi Desa" yang ada di bagian atas halaman`}
          />
          <CardStep
            icon={IcInput}
            title="2. Input Data Informasi"
            desc="Isi informasi yang dibutuhkan mengenai desa, dan kontak yang bisa dihubungi"
          />
          <CardStep
            icon={IcConfirm}
            title="3. Konfirmasi"
            desc="Tim desa cerdas akan menghubungi kamu dan, mempersiapkan platform desa cerdas untuk desa milikmu"
          />
        </div>
        <div className="justify-end hidden lg:flex ">
          <img
            src={ImStep}
            alt=""
            width={450}
            height={450}
            className="rounded-xl md:w-[450px] h-[450px] ml-12"
          />
        </div>
      </div>
    </div>
  );
}
