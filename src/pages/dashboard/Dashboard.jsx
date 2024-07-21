import { FaPersonShelter } from "react-icons/fa6";
import Header from "../../components/Header";
import { FaHome } from "react-icons/fa";
import LeftContent from "../../components/LeftContent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataPenghuni } from "../../store/action/penghuniAction";
import { getDataRumah } from "../../store/action/rumahAction";

const Dashboard = () => {
  const { data } = useSelector((state) => state.penghuni);
  const { rumah } = useSelector((state) => state.rumah);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPenghuni());
    dispatch(getDataRumah());
  }, [dispatch]);
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="bg-gray-100 flex flex-col w-screen gap-5 p-20">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm font-light">Selamat datang, Admin</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="w-max h-max p-5 rounded-md shadow-md bg-sky-500 text-white hover:cursor-pointer">
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
            <div className="w-max h-max p-5 rounded-md shadow-md bg-sky-500 text-white hover:cursor-pointer">
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
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
