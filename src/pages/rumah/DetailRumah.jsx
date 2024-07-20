import { useEffect } from "react";
import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailDataRumah } from "../../store/action/rumahAction";
import { BiSolidDetail } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

const DetailRumah = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.rumah);

  useEffect(() => {
    dispatch(getDetailDataRumah(params.id));
  }, [dispatch, params]);
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="bg-gray-100 flex flex-col gap-5 p-20 w-screen">
          <div className="flex">
            <h1 className="text-2xl font-bold">Detail Penghuni</h1>
          </div>
          <div className="w-max h-max p-7 bg-white rounded-md shadow-md border">
            <div className="w-[63rem]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                  <p>Nomor Rumah :</p>
                  <p>
                    {detail?.detail?.nomor_rumah}
                    {detail?.detail?.blok_rumah}
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <p>Status Hunian :</p>
                  <p>{detail?.detail?.status_hunian}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-14">
                <h3 className="text-lg font-semibold">Penghuni Rumah</h3>
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
                      {detail?.detail?.penghuni?.map((item) => (
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
          </div>
        </section>
      </div>
    </main>
  );
};

export default DetailRumah;
