import Header from "../../components/Header";
import LeftContent from "../../components/LeftContent";

const Pembayaran = () => {
  return (
    <main>
      <Header />
      <div className="flex flex-row">
        <LeftContent />
        <section className="flex flex-col gap-5 p-20">
          <div className="flex">
            <h1 className="text-2xl font-bold">Pembayaran</h1>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Pembayaran;
