import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { detailPenghuni } from "../../store/action/penghuniAction";
import axios from "axios";

const DetailPenghuni = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.penghuni);

  const handleDownload = async (name) => {
    await axios.get(`http://localhost:8080/api/v1/penghuni/file/${name}`);
  };

  useEffect(() => {
    dispatch(detailPenghuni(params.id));
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
                  <p>Nama Lengkap :</p>
                  <p>{detail?.detail?.nama_lengkap}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p>Foto Ktp :</p>
                  <div className="w-56 h-max p-1 rounded-md border">
                    <p className="truncate">{detail?.detail?.foto_ktp}</p>
                  </div>
                  <button
                    type="submit"
                    onClick={() => handleDownload(detail?.detail?.foto_ktp)}
                    className="w-max h-max p-2 text-sm bg-gray-200 rounded-md capitalize hover:bg-gray-400"
                  >
                    download
                  </button>
                </div>
                <div className="flex flex-row gap-2">
                  <p>Status Hunian :</p>
                  <p>{detail?.detail?.status_hunian}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p>Nomor Telepon :</p>
                  <p>{detail?.detail?.nomor_telepon}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p>Status Pernikahan :</p>
                  <p>{detail?.detail?.status_pernikahan}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DetailPenghuni;
