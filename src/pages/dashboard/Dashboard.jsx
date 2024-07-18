import { FaPersonShelter } from "react-icons/fa6";
import Header from "../../components/Header";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <section className="w-[20%] h-[38.5rem] bg-sky-500 rounded-md">
          <div className="flex flex-col text-white items-center gap-5 py-5">
            <p>Dashboard</p>
            <p>Penghuni</p>
            <p>Rumah</p>
            <p>Pembayaran</p>
          </div>
        </section>
        <section className="flex flex-col gap-5 p-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm font-light">Selamat datang, Admin</p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-max h-max p-5 rounded-md shadow-md bg-sky-500 text-white">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-center gap-2">
                  <p className="text-2xl pt-0.5">
                    <FaPersonShelter />
                  </p>
                  <p className="text-xl font-medium uppercase">Penghuni</p>
                </div>
                <p className="text-lg font-medium">Total Penghuni : 10 orang</p>
              </div>
            </div>
            <div className="w-max h-max p-5 rounded-md shadow-md bg-sky-500 text-white">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-center gap-2">
                  <p className="text-2xl pt-0.5">
                    <FaHome />
                  </p>
                  <p className="text-xl font-medium uppercase">Rumah</p>
                </div>
                <p className="text-lg font-medium">Total Rumah : 20 rumah</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
