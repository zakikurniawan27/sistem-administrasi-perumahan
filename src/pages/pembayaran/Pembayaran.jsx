import { FaPersonMilitaryPointing } from "react-icons/fa6";
import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";
import { MdCleaningServices } from "react-icons/md";
import { Link } from "react-router-dom";

const Pembayaran = () => {
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="bg-gray-100 flex flex-col w-screen gap-5 p-20">
          <div className="flex">
            <h1 className="text-2xl font-bold">Pembayaran</h1>
          </div>
          <div className="flex flex-row justify-center items-center gap-5">
            <Link to={"/bayar/iuran/satpam"}>
              <div className="w-max h-max px-12 py-10  rounded-md shadow-md bg-sky-500 text-white hover:cursor-pointer hover:bg-sky-700">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-2xl pt-0.5">
                      <FaPersonMilitaryPointing />
                    </p>
                    <p className="text-xl font-medium uppercase">Satpam</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/bayar/iuran/kebersihan"}>
              <div className="w-max h-max px-7 py-10  rounded-md shadow-md bg-sky-500 text-white hover:cursor-pointer hover:bg-sky-700">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col items-center justify-center gap-2 hover:bg-sky-700">
                    <p className="text-2xl pt-0.5">
                      <MdCleaningServices />
                    </p>
                    <p className="text-xl font-medium uppercase">Kebersihan</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Pembayaran;
