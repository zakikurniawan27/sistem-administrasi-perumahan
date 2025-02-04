import { FaPersonShelter } from "react-icons/fa6";
import Header from "../../components/Header";
import { FaHome } from "react-icons/fa";
import LeftContent from "../../components/LeftContent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataPenghuni } from "../../store/action/penghuniAction";
import { getDataRumah } from "../../store/action/rumahAction";
import { GrTransaction } from "react-icons/gr";
import { getDataTotalSaldoMasuk } from "../../store/action/pembayaranAction";
import ContentGrafik from "../../components/ContentGrafik";
import { getTotalSaldoPengeluaran } from "../../store/action/pengeluaranAction";
import ContentGrafikKeluar from "../../components/ContentGrafikKeluar";

const Dashboard = () => {
  const { data } = useSelector((state) => state.penghuni);
  const { rumah } = useSelector((state) => state.rumah);
  const { totalSaldoMasuk } = useSelector((state) => state.pembayaran);
  const { totalSaldoKeluar } = useSelector((state) => state.pengeluaran);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPenghuni());
    dispatch(getDataRumah());
    dispatch(getDataTotalSaldoMasuk());
    dispatch(getTotalSaldoPengeluaran());
  }, [dispatch]);
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="bg-gray-100 flex flex-col w-screen h-max gap-5 p-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm font-light">Selamat datang, Admin</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="w-max h-max p-5 rounded-md shadow-md bg-yellow-500 text-white hover:cursor-pointer">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-center gap-2">
                  <p className="text-2xl pt-0.5">
                    <FaPersonShelter />
                  </p>
                  <p className="text-xl font-medium uppercase">Penghuni</p>
                </div>
                <p className="text-lg font-medium">
                  Total Penghuni : {data?.penghuni?.length} orang
                </p>
              </div>
            </div>
            <div className="w-max h-max p-5 rounded-md shadow-md bg-blue-500 text-white hover:cursor-pointer">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-center gap-2">
                  <p className="text-2xl pt-0.5">
                    <FaHome />
                  </p>
                  <p className="text-xl font-medium uppercase">Rumah</p>
                </div>
                <p className="text-lg font-medium">
                  Total Rumah : {rumah?.rumah?.length} rumah
                </p>
              </div>
            </div>
            <div className="w-max h-max p-5 rounded-md shadow-md bg-green-500 text-white hover:cursor-pointer">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-center gap-2">
                  <p className="text-2xl pt-0.5">
                    <GrTransaction />
                  </p>
                  <p className="text-xl font-medium uppercase">Saldo Masuk</p>
                </div>
                <p className="text-lg font-medium">
                  Total Rumah : Rp {totalSaldoMasuk?.data}
                </p>
              </div>
            </div>
            <div className="w-max h-max p-5 rounded-md shadow-md bg-red-500 text-white hover:cursor-pointer">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-center gap-2">
                  <p className="text-2xl pt-0.5">
                    <GrTransaction />
                  </p>
                  <p className="text-xl font-medium uppercase">Saldo Keluar</p>
                </div>
                <p className="text-lg font-medium">
                  Total Rumah : Rp {totalSaldoKeluar?.data}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 gap-7">
            <h2 className="text-xl font-bold">Data Pemasukan Perbulan</h2>
            <ContentGrafik />
          </div>
          <div className="flex flex-col mt-10 gap-7">
            <h2 className="text-xl font-bold">Data Pengeluaran Perbulan</h2>
            <ContentGrafikKeluar />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
