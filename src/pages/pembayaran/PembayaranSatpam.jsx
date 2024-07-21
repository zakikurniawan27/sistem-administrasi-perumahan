import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  bayarIuran,
  getDataBulan,
  updateStatusPembayaran,
} from "../../store/action/pembayaranAction";
import { getDataPenghuni } from "../../store/action/penghuniAction";

const PembayaranSatpam = () => {
  const { data } = useSelector((state) => state.penghuni);
  const { bulan } = useSelector((state) => state.pembayaran);

  const [dataBayar, setDataBayar] = useState({
    penghuniId: "",
    bulanId: "",
    jenis_iuran: "Satpam",
    saldo_masuk: "100000",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const statusPembayaran = {
    status_pembayaran: "SUDAH LUNAS",
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!dataBayar.penghuniId || !dataBayar.bulanId) {
        alert("field must not empty");
      }
      if (dataBayar.penghuniId || dataBayar.bulanId) {
        const data = {
          penghuniId: dataBayar.penghuniId,
          bulanId: dataBayar.bulanId,
          jenis_iuran: dataBayar.jenis_iuran,
          saldo_masuk: dataBayar.saldo_masuk,
        };
        dispatch(bayarIuran(data));
        dispatch(updateStatusPembayaran(dataBayar.bulanId, statusPembayaran));

        alert("pembayaran iuran satpam success");
        navigate("/pembayaran");
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getDataPenghuni());
    dispatch(getDataBulan());
  }, [dispatch]);
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="bg-gray-100 flex flex-col gap-5 p-20 w-screen h-screen">
          <div className="flex">
            <h1 className="text-2xl font-bold">Pembayaran Iuran Satpam</h1>
          </div>
          <div className="w-max h-max p-7 bg-white rounded-md shadow-md border">
            <div className="w-[63rem]">
              <form
                onSubmit={submit}
                className="flex flex-col gap-5"
                method="post"
                encType="multipart/form-data"
              >
                <div className="flex flex-col  gap-3">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="penghuni"
                      className="font-semibold uppercase text-base"
                    >
                      Penghuni
                    </label>
                    <select
                      name="penghuni"
                      id="penghuni"
                      className="w-full h-10 text-black p-2 border rounded-md"
                      onChange={(e) => {
                        setDataBayar({
                          ...dataBayar,
                          penghuniId: e.target.value,
                        });
                      }}
                    >
                      <option value="" disabled selected>
                        Pilih Penghuni
                      </option>
                      {data?.penghuni?.map((item) => (
                        <option
                          className="h-44 overflow-y-scroll"
                          key={item.id}
                          value={item.id}
                        >
                          {item.nama_lengkap}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="bulan"
                      className="font-semibold uppercase text-base"
                    >
                      Bulan
                    </label>
                    <select
                      name="bulan"
                      id="bulan"
                      className="w-full h-10 text-black p-2 border rounded-md"
                      onChange={(e) => {
                        setDataBayar({
                          ...dataBayar,
                          bulanId: e.target.value,
                        });
                      }}
                    >
                      <option value="" disabled selected>
                        Pilih Bulan
                      </option>
                      {bulan?.data?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="jenis_iuran"
                      className="font-semibold uppercase text-base"
                    >
                      Jenis Iuran
                    </label>
                    <select
                      name="jenis_iuran"
                      id="jenis_iuran"
                      className="w-full h-10 text-black p-2 border rounded-md"
                      onChange={(e) => {
                        setDataBayar({
                          ...dataBayar,
                          jenis_iuran: e.target.value,
                        });
                      }}
                      disabled
                    >
                      <option value="" disabled selected>
                        {dataBayar.jenis_iuran}
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="saldo_masuk"
                      className="font-semibold uppercase text-base"
                    >
                      Jumlah Iuran
                    </label>
                    <select
                      name="saldo_masuk"
                      id="saldo_masuk"
                      className="w-full h-10 text-black p-2 border rounded-md"
                      onChange={(e) => {
                        setDataBayar({
                          ...dataBayar,
                          saldo_masuk: e.target.value,
                        });
                      }}
                      disabled
                    >
                      <option value="" disabled selected>
                        Rp {dataBayar.saldo_masuk}
                      </option>
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

export default PembayaranSatpam;
