import { useState } from "react";
import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRumah } from "../../store/action/rumahAction";

const TambahRumah = () => {
  const [dataRumah, setDataRumah] = useState({
    nomor_rumah: "",
    blok_rumah: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!dataRumah.nomor_rumah || !dataRumah.blok_rumah) {
        alert("field must not empty");
      }
      if (dataRumah.nomor_rumah || dataRumah.blok_rumah) {
        const data = {
          nomor_rumah: dataRumah.nomor_rumah,
          blok_rumah: dataRumah.blok_rumah,
        };
        dispatch(addRumah(data));

        alert("create data rumah success");
        navigate("/rumah");
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="bg-gray-100 flex flex-col gap-5 p-20 w-screen">
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
                      htmlFor="nomor_rumah"
                      className="font-semibold uppercase text-base"
                    >
                      Nomor Rumah
                    </label>
                    <input
                      type="number"
                      name="nomor_rumah"
                      id="nomor_rumah"
                      className="w-[25rem] h-10 text-black p-2 border rounded-md"
                      placeholder="harap masukan nomor rumah anda"
                      value={dataRumah.nomor_rumah}
                      onChange={(e) => {
                        setDataRumah({
                          ...dataRumah,
                          nomor_rumah: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="blok_rumah"
                      className="font-semibold uppercase text-base"
                    >
                      Blok Rumah
                    </label>
                    <select
                      name="blok_rumah"
                      id="blok_rumah"
                      className="w-[25rem] h-10 text-black p-2 border rounded-md"
                      onChange={(e) => {
                        setDataRumah({
                          ...dataRumah,
                          blok_rumah: e.target.value,
                        });
                      }}
                    >
                      <option value="" disabled selected>
                        Pilih Blok Rumah
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">c</option>
                      <option value="D">D</option>
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

export default TambahRumah;
