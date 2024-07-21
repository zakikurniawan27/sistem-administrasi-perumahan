import { useEffect, useState } from "react";
import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { updateRumah } from "../../store/action/rumahAction";

const EditRumah = () => {
  const params = useParams();
  const [dataRumah, setDataRumah] = useState({
    nomor_rumah: "",
    status_hunian: "",
    blok_rumah: "",
  });

  const fetchDetail = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/rumah/detail/${params.id}`
      );
      setDataRumah({
        nomor_rumah: res?.data?.detail?.nomor_rumah,
        status_hunian: res?.data?.detail?.status_hunian,
        blok_rumah: res?.data?.detail?.blok_rumah,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (
        !dataRumah.nomor_rumah ||
        !dataRumah.blok_rumah ||
        !dataRumah.status_hunian
      ) {
        alert("field must not empty");
      }
      if (
        dataRumah.nomor_rumah ||
        dataRumah.blok_rumah ||
        dataRumah.status_hunian
      ) {
        const data = {
          nomor_rumah: dataRumah.nomor_rumah,
          status_hunian: dataRumah.status_hunian,
          blok_rumah: dataRumah.blok_rumah,
        };
        dispatch(updateRumah(params.id, data));

        alert("edit data rumah success");
        navigate("/rumah");
      }
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="bg-gray-100 flex flex-col gap-5 p-20 w-screen h-screen">
          <div className="flex">
            <h1 className="text-2xl font-bold">Edit Rumah</h1>
          </div>
          <div className="w-max h-max p-7 bg-white rounded-md shadow-md border">
            <div className="w-[63rem]">
              <form
                onSubmit={submit}
                className="flex flex-col gap-5"
                method="post"
                encType="multipart/form-data"
              >
                <div className="flex flex-col gap-3">
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
                      className="w-full h-10 text-black p-2 border rounded-md"
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
                      className="w-full h-10 text-black p-2 border rounded-md"
                      onChange={(e) => {
                        setDataRumah({
                          ...dataRumah,
                          blok_rumah: e.target.value,
                        });
                      }}
                    >
                      <option value="" disabled selected>
                        {dataRumah.blok_rumah}
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">c</option>
                      <option value="D">D</option>
                    </select>
                  </div>
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
                      className="w-full h-10 text-black p-2 border rounded-md"
                      onChange={(e) => {
                        setDataRumah({
                          ...dataRumah,
                          status_hunian: e.target.value,
                        });
                      }}
                    >
                      <option value="" disabled selected>
                        {dataRumah.status_hunian}
                      </option>
                      <option value="DIHUNI">DIHUNI</option>
                      <option value="TIDAK DIHUNI">TIDAK DIHUNI</option>
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

export default EditRumah;
