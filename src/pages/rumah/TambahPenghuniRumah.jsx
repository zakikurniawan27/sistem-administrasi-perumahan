import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPenghuni } from "../../store/action/penghuniAction";
import {
  getDataRumah,
  getDetailDataRumah,
} from "../../store/action/rumahAction";
import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";

const TambahPenghuniRumah = () => {
  const { detail } = useSelector((state) => state.rumah);
  const { rumah } = useSelector((state) => state.rumah);
  const params = useParams();
  const [dataPenghuni, setDataPenghuni] = useState({
    nama_lengkap: "",
    foto_ktp: "",
    status_hunian: "",
    nomor_telepon: "",
    status_pernikahan: "",
    rumahId: detail?.detail?.id,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (
        !dataPenghuni.nama_lengkap ||
        !dataPenghuni.foto_ktp ||
        !dataPenghuni.status_hunian ||
        !dataPenghuni.nomor_telepon ||
        !dataPenghuni.status_pernikahan ||
        !dataPenghuni.rumahId
      ) {
        alert("field must not empty");
      }
      if (
        dataPenghuni.nama_lengkap ||
        dataPenghuni.foto_ktp ||
        dataPenghuni.status_hunian ||
        dataPenghuni.nomor_telepon ||
        dataPenghuni.status_pernikahan ||
        dataPenghuni.rumahId
      ) {
        const formData = new FormData();
        formData.append("nama_lengkap", dataPenghuni.nama_lengkap);
        formData.append("foto_ktp", dataPenghuni.foto_ktp);
        formData.append("status_hunian", dataPenghuni.status_hunian);
        formData.append("nomor_telepon", dataPenghuni.nomor_telepon);
        formData.append("status_pernikahan", dataPenghuni.status_pernikahan);
        formData.append("rumahId", dataPenghuni.rumahId);

        dispatch(addPenghuni(formData));

        alert("create data penghuni success");
        navigate(`/rumah/detail/${params.id}`);
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getDetailDataRumah(params.id));
    dispatch(getDataRumah());
  }, [dispatch, params]);
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="bg-gray-100 flex flex-col gap-5 p-20 w-screen h-screen">
          <div className="flex">
            <h1 className="text-2xl font-bold">Tambah Penghuni</h1>
          </div>
          <div className="w-max h-max p-7 bg-white rounded-md shadow-md border">
            <div className="w-[63rem]">
              <form
                onSubmit={submit}
                className="flex flex-col gap-5"
                method="post"
                encType="multipart/form-data"
              >
                <div className="flex flex-row justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="nama_lengkap"
                      className="font-semibold uppercase text-base"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="nama_lengkap"
                      id="nama_lengkap"
                      className="w-[25rem] h-10 text-black p-2 border rounded-md"
                      placeholder="harap masukan nama lengkap anda"
                      value={dataPenghuni.nama_lengkap}
                      onChange={(e) => {
                        setDataPenghuni({
                          ...dataPenghuni,
                          nama_lengkap: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="foto_ktp"
                      className="font-semibold uppercase text-base"
                    >
                      Foto Ktp
                    </label>
                    <input
                      type="file"
                      name="foto_ktp"
                      id="foto_ktp"
                      className="w-[25rem] h-10 text-black p-2 border rounded-md"
                      onChange={(e) => {
                        setDataPenghuni({
                          ...dataPenghuni,
                          foto_ktp: e.target.files[0],
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="status_hunian"
                      className="font-semibold uppercase text-base"
                    >
                      Status Hunian
                    </label>
                    <select
                      name="status_hunian"
                      id="status_hunian"
                      className="w-[25rem] h-10 text-black p-2 border rounded-md"
                      onChange={(e) => {
                        setDataPenghuni({
                          ...dataPenghuni,
                          status_hunian: e.target.value,
                        });
                      }}
                    >
                      <option value="" disabled selected>
                        Pilih Status Hunian
                      </option>
                      <option value="Tetap">Tetap</option>
                      <option value="Kontrak">Kontrak</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="nomor_telepon"
                      className="font-semibold uppercase text-base"
                    >
                      Nomor Telepon
                    </label>
                    <input
                      type="number"
                      name="nomor_telepon"
                      id="nomor_telepon"
                      className="w-[25rem] h-10 text-black p-2 border rounded-md"
                      placeholder="harap masukan nomor telepon anda"
                      value={dataPenghuni.nomor_telepon}
                      onChange={(e) => {
                        setDataPenghuni({
                          ...dataPenghuni,
                          nomor_telepon: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="status_pernikahan"
                      className="font-semibold uppercase text-base"
                    >
                      Status Pernikahan
                    </label>
                    <select
                      name="status_pernikahan"
                      id="status_pernikahan"
                      className="w-[25rem] h-10 text-black p-2 border rounded-md"
                      onChange={(e) => {
                        setDataPenghuni({
                          ...dataPenghuni,
                          status_pernikahan: e.target.value,
                        });
                      }}
                    >
                      <option value="" disabled selected>
                        Pilih Status Pernikahan
                      </option>
                      <option value="Sudah Menikah">Sudah Menikah</option>
                      <option value="Belum Menikah">Belum Menikah</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="rumahId"
                      className="font-semibold uppercase text-base"
                    >
                      Nomor Rumah
                    </label>
                    <select
                      name="rumahId"
                      id="rumahId"
                      className="w-[25rem] h-10 text-black p-2 border rounded-md overflow-y-scroll"
                      onChange={(e) => {
                        setDataPenghuni({
                          ...dataPenghuni,
                          rumahId: Number(e.target.value),
                        });
                      }}
                      disabled
                    >
                      <option value="" disabled selected>
                        {detail?.detail?.nomor_rumah}{" "}
                        {detail?.detail?.blok_rumah}
                      </option>
                      {rumah?.rumah?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.nomor_rumah} {item.blok_rumah}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-max h-max p-2 bg-sky-500 text-white rounded-md shadow-md hover:bg-sky-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TambahPenghuniRumah;
