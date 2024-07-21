import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataBulan } from "../../store/action/pembayaranAction";

const Pengeluaran = () => {
  const { bulan } = useSelector((state) => state.pembayaran);

  const [dataBayar, setDataBayar] = useState({
    bulanId: "",
    jenis_pengeluaran: "",
    saldo_keluar: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (
        !dataBayar.jenis_pengeluaran ||
        !dataBayar.bulanId ||
        !dataBayar.saldo_keluar
      ) {
        alert("field must not empty");
      }
      if (dataBayar.penghuniId || dataBayar.bulanId) {
        const data = {
          bulanId: dataBayar.bulanId,
          jenis_pengeluaran: dataBayar.jenis_pengeluaran,
          saldo_keluar: dataBayar.saldo_keluar,
        };
        dispatch(data);

        alert("pengeluaran success");
        navigate("/pembayaran");
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getDataBulan());
  }, [dispatch]);
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="bg-gray-100 flex flex-col gap-5 p-20 w-screen">
          <div className="flex">
            <h1 className="text-2xl font-bold">Pengeluaran</h1>
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
                      htmlFor="jenis_pengeluaran"
                      className="font-semibold uppercase text-base"
                    >
                      Jenis Pengeluaran
                    </label>
                    <select
                      name="jenis_pengeluaran"
                      id="jenis_pengeluaran"
                      className="w-full h-10 text-black p-2 border rounded-md"
                      onChange={(e) => {
                        setDataBayar({
                          ...dataBayar,
                          jenis_pengeluaran: e.target.value,
                        });
                      }}
                    >
                      <option value="" disabled selected>
                        Pilih Jenis Pengeluaran
                      </option>
                      <option value="Satpam">Satpam</option>
                      <option value="Kebersihan">Kebersihan</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="saldo_keluar"
                      className="font-semibold uppercase text-base"
                    >
                      Jumlah Pengeluaran
                    </label>
                    <input
                      type="number"
                      name="saldo_keluar"
                      id="saldo_keluar"
                      className="w-[25rem] h-10 text-black p-2 border rounded-md"
                      placeholder="harap masukan jumlah pengeluaran anda "
                      value={dataBayar.saldo_keluar}
                      onChange={(e) => {
                        setDataBayar({
                          ...dataBayar,
                          saldo_keluar: e.target.value,
                        });
                      }}
                    />
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

export default Pengeluaran;
