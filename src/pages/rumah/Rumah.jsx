import { FaEdit } from "react-icons/fa";
import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";
import { Link } from "react-router-dom";
import { BiSolidDetail } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataRumah } from "../../store/action/rumahAction";

const Rumah = () => {
  const { rumah } = useSelector((state) => state.rumah);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataRumah());
  }, [dispatch]);
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="flex flex-col gap-5 p-20">
          <div className="flex">
            <h1 className="text-2xl font-bold">Rumah</h1>
          </div>
          <div className="w-max h-max p-7 bg-white rounded-md shadow-md border">
            <div className="flex flex-col gap-3">
              <div className="flex justify-end">
                <button className="w-max h-max p-3 rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-700">
                  <Link to={"/rumah/tambah"}>Tambah Rumah</Link>
                </button>
              </div>
              <div className="w-[60rem]">
                <table className="w-full">
                  <thead className="border-b border-gray-500">
                    <tr>
                      <th>Nomor Rumah</th>
                      <th>Status Hunian</th>
                      <th>Jumlah Penghuni</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {rumah?.rumah?.map((item) => (
                      <tr key={item.id} className="border-b border-gray-500">
                        <td className="py-3">
                          {item.nomor_rumah} {item.blok_rumah}
                        </td>
                        <td>{item.status_hunian}</td>
                        <td>{item?.penghuni?.length}</td>
                        <td>
                          <div className="flex flex-row gap-2 justify-center">
                            <Link to={`/rumah/detail/${item.id}`}>
                              <p className="text-gray-500 text-2xl">
                                <BiSolidDetail />
                              </p>
                            </Link>
                            <Link to={`/update-penghuni/${item.id}`}>
                              <p className="text-yellow-500 text-2xl">
                                <FaEdit />
                              </p>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Rumah;
