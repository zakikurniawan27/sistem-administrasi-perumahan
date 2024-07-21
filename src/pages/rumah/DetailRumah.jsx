import { useEffect, useState } from "react";
import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailDataRumah } from "../../store/action/rumahAction";
import TablePenghuniRumah from "../../components/rumah/TablePenghuniRumah";
import TableHistoryPembayaran from "../../components/rumah/TableHistoryPembayaran";

const DetailRumah = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.rumah);
  const [click, setClick] = useState({
    content_penghuni_rumah: true,
    content_histori_pembayaran: false,
  });

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
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-3">
                    <div
                      className="bg-gray-100 w-max h-max px-1 py-3 rounded-b-xl hover:bg-gray-400 text-xs hover:text-white hover:cursor-pointer hover:scale-110"
                      onClick={() =>
                        setClick({
                          ...click,
                          content_penghuni_rumah: true,
                          content_histori_pembayaran: false,
                        })
                      }
                    >
                      <p>Penghuni Rumah</p>
                    </div>
                    <div
                      className="bg-gray-100 w-max h-max px-1 py-3 rounded-b-xl hover:bg-gray-400 text-xs hover:text-white hover:cursor-pointer hover:scale-110"
                      onClick={() =>
                        setClick({
                          ...click,
                          content_penghuni_rumah: false,
                          content_histori_pembayaran: true,
                        })
                      }
                    >
                      <p>History Pembayaran</p>
                    </div>
                    <div></div>
                  </div>
                  <button className="w-max h-max p-3 rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-700">
                    <Link to={`/rumah/tambah-penghuni/${detail?.detail?.id}`}>
                      Tambah Penghuni
                    </Link>
                  </button>
                </div>
                <div className="w-[60rem]">
                  {click.content_penghuni_rumah === true ? (
                    <TablePenghuniRumah />
                  ) : click.content_histori_pembayaran === true ? (
                    <TableHistoryPembayaran />
                  ) : (
                    <></>
                  )}
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
