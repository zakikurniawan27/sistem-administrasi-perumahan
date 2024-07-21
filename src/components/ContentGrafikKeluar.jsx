import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  getsaldoagustus,
  getsaldoapril,
  getsaldodesember,
  getsaldofebruari,
  getsaldojanuari,
  getsaldojuli,
  getsaldojuni,
  getsaldomaret,
  getsaldomei,
  getsaldonovember,
  getsaldooktober,
  getsaldoseptember,
} from "../store/action/pengeluaranAction";

const ContentGrafikKeluar = () => {
  const { saldojanuari } = useSelector((state) => state.pembayaran);
  const { saldofebruari } = useSelector((state) => state.pembayaran);
  const { saldomaret } = useSelector((state) => state.pembayaran);
  const { saldoapril } = useSelector((state) => state.pembayaran);
  const { saldomei } = useSelector((state) => state.pembayaran);
  const { saldojuni } = useSelector((state) => state.pembayaran);
  const { saldojuli } = useSelector((state) => state.pembayaran);
  const { saldoagustus } = useSelector((state) => state.pembayaran);
  const { saldoseptember } = useSelector((state) => state.pembayaran);
  const { saldooktober } = useSelector((state) => state.pembayaran);
  const { saldonovember } = useSelector((state) => state.pembayaran);
  const { saldodesember } = useSelector((state) => state.pembayaran);

  const dispatch = useDispatch();
  const data = [
    { bulan: "Januari", total_pengeluaran: saldojanuari?.data },
    { bulan: "Februari", total_pengeluaran: saldofebruari?.data },
    { bulan: "Maret", total_pengeluaran: saldomaret?.data },
    { bulan: "April", total_pengeluaran: saldoapril?.data },
    { bulan: "Mei", total_pengeluaran: saldomei?.data },
    { bulan: "Juni", total_pengeluaran: saldojuni?.data },
    { bulan: "Juli", total_pengeluaran: saldojuli?.data },
    { bulan: "Agustus", total_pengeluaran: saldoagustus?.data },
    { bulan: "September", total_pengeluaran: saldoseptember?.data },
    { bulan: "Oktober", total_pengeluaran: saldooktober?.data },
    { bulan: "November", total_pengeluaran: saldonovember?.data },
    { bulan: "Desember", total_pengeluaran: saldodesember?.data },
  ];

  useEffect(() => {
    dispatch(getsaldojanuari());
    dispatch(getsaldofebruari());
    dispatch(getsaldomaret());
    dispatch(getsaldoapril());
    dispatch(getsaldomei());
    dispatch(getsaldojuni());
    dispatch(getsaldojuli());
    dispatch(getsaldoagustus());
    dispatch(getsaldoseptember());
    dispatch(getsaldooktober());
    dispatch(getsaldonovember());
    dispatch(getsaldodesember());
  }, [dispatch]);
  return (
    <BarChart width={1010} height={250} data={data}>
      <Bar dataKey="total_pengeluaran" fill="#16a34a" />
      <XAxis dataKey="bulan" />
      <YAxis dataKey="total_pengeluaran" />
    </BarChart>
  );
};

export default ContentGrafikKeluar;
