import { Link } from "react-router-dom";
import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";
import { BiSolidDetail } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataPenghuni } from "../../store/action/penghuniAction";

const Penghuni = () => {
  const { data } = useSelector((state) => state.penghuni);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPenghuni());
  }, [dispatch]);

  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="bg-gray-100 flex flex-col gap-5 p-20 w-screen h-screen">
          <div className="flex">
            <h1 className="text-2xl font-bold">Penghuni</h1>
          </div>
          <div className="w-max h-max p-7 bg-white rounded-md shadow-md border">
            <div className="flex flex-col gap-3">
              <div className="flex justify-end">
                <button className="w-max h-max p-3 rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-700">
                  <Link to={"/tambah-penghuni"}>Tambah Penghuni</Link>
                </button>
              </div>
              <div className="w-[60rem]">
                <table className="w-full">
                  <thead className="border-b border-gray-500">
                    <tr>
                      <th>Nama Lengkap</th>
                      <th>Nomor Telepon</th>
                      <th>Status Hunian</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {data?.penghuni?.map((item) => (
                      <tr key={item.id} className="border-b border-gray-500">
                        <td className="py-3">{item.nama_lengkap}</td>
                        <td>{item.nomor_telepon}</td>
                        <td>{item.status_hunian}</td>
                        <td>
                          <div className="flex flex-row gap-2 justify-center">
                            <Link to={`/detail-penghuni/${item.id}`}>
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

export default Penghuni;
