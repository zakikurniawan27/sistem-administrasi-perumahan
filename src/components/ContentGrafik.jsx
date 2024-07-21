import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  getDataTotalSaldoMasukAgustus,
  getDataTotalSaldoMasukApril,
  getDataTotalSaldoMasukDesember,
  getDataTotalSaldoMasukFebruari,
  getDataTotalSaldoMasukJanuari,
  getDataTotalSaldoMasukJuli,
  getDataTotalSaldoMasukJuni,
  getDataTotalSaldoMasukMaret,
  getDataTotalSaldoMasukMei,
  getDataTotalSaldoMasukNovember,
  getDataTotalSaldoMasukOktober,
  getDataTotalSaldoMasukSeptember,
} from "../store/action/pembayaranAction";

const ContentGrafik = () => {
  const { saldoMasukJanuari } = useSelector((state) => state.pembayaran);
  const { saldoMasukFebruari } = useSelector((state) => state.pembayaran);
  const { saldoMasukMaret } = useSelector((state) => state.pembayaran);
  const { saldoMasukApril } = useSelector((state) => state.pembayaran);
  const { saldoMasukMei } = useSelector((state) => state.pembayaran);
  const { saldoMasukJuni } = useSelector((state) => state.pembayaran);
  const { saldoMasukJuli } = useSelector((state) => state.pembayaran);
  const { saldoMasukAgustus } = useSelector((state) => state.pembayaran);
  const { saldoMasukSeptember } = useSelector((state) => state.pembayaran);
  const { saldoMasukOktober } = useSelector((state) => state.pembayaran);
  const { saldoMasukNovember } = useSelector((state) => state.pembayaran);
  const { saldoMasukDesember } = useSelector((state) => state.pembayaran);

  const dispatch = useDispatch();
  const data = [
    { bulan: "Januari", total_pemasukan: saldoMasukJanuari?.data },
    { bulan: "Februari", total_pemasukan: saldoMasukFebruari?.data },
    { bulan: "Maret", total_pemasukan: saldoMasukMaret?.data },
    { bulan: "April", total_pemasukan: saldoMasukApril?.data },
    { bulan: "Mei", total_pemasukan: saldoMasukMei?.data },
    { bulan: "Juni", total_pemasukan: saldoMasukJuni?.data },
    { bulan: "Juli", total_pemasukan: saldoMasukJuli?.data },
    { bulan: "Agustus", total_pemasukan: saldoMasukAgustus?.data },
    { bulan: "September", total_pemasukan: saldoMasukSeptember?.data },
    { bulan: "Oktober", total_pemasukan: saldoMasukOktober?.data },
    { bulan: "November", total_pemasukan: saldoMasukNovember?.data },
    { bulan: "Desember", total_pemasukan: saldoMasukDesember?.data },
  ];

  useEffect(() => {
    dispatch(getDataTotalSaldoMasukJanuari());
    dispatch(getDataTotalSaldoMasukFebruari());
    dispatch(getDataTotalSaldoMasukMaret());
    dispatch(getDataTotalSaldoMasukApril());
    dispatch(getDataTotalSaldoMasukMei());
    dispatch(getDataTotalSaldoMasukJuni());
    dispatch(getDataTotalSaldoMasukJuli());
    dispatch(getDataTotalSaldoMasukAgustus());
    dispatch(getDataTotalSaldoMasukSeptember());
    dispatch(getDataTotalSaldoMasukOktober());
    dispatch(getDataTotalSaldoMasukNovember());
    dispatch(getDataTotalSaldoMasukDesember());
  }, [dispatch]);
  return (
    <BarChart width={1011} height={250} data={data}>
      <Bar dataKey="total_pemasukan" fill="#16a34a" />
      <XAxis dataKey="bulan" />
      <YAxis dataKey="total_pemasukan" />
    </BarChart>
  );
};

export default ContentGrafik;
