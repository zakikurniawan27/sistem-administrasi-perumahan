import { Link } from "react-router-dom";

const LeftContent = () => {
  return (
    <section className="w-[20%] h-screen bg-sky-500 rounded-md">
      <div className="flex flex-col text-white items-center gap-5 py-5">
        <Link to={"/"}>
          <p className="hover:underline">Dashboard</p>
        </Link>
        <Link to={"/penghuni"}>
          <p className="hover:underline">Penghuni</p>
        </Link>
        <Link to={"/rumah"}>
          <p className="hover:underline">Rumah</p>
        </Link>
        <Link to={"/pembayaran"}>
          <p className="hover:underline">Pembayaran</p>
        </Link>
      </div>
    </section>
  );
};

export default LeftContent;
