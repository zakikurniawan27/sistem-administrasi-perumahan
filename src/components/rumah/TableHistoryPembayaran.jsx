import { useEffect } from "react";
import { getDetailDataRumah } from "../../store/action/rumahAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TableHistoryPembayaran = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.rumah);

  useEffect(() => {
    dispatch(getDetailDataRumah(params.id));
  }, [dispatch, params]);
  return (
    <table className="w-full">
      <thead className="border-b border-gray-500">
        <tr>
          <th>Nama Lengkap</th>
          <th>Bulan</th>
          <th>Status Pembayaran</th>
          <th>Jenis Iuran</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {detail?.detail?.penghuni?.map((item) => (
          <tr key={item.id} className="border-b border-gray-500">
            <td className="py-3">{item.nama_lengkap}</td>
            <td className="flex flex-col gap-1">
              {item?.bayar?.map((itm) => (
                <p key={itm.id}>{itm?.bulan?.nama}</p>
              ))}
            </td>
            <td>
              {item?.bayar?.map((itm) => (
                <p key={itm.id}>{itm?.bulan?.status_pembayaran}</p>
              ))}
            </td>
            <td>
              {item?.bayar?.map((itm) => (
                <p key={itm.id}>{itm.jenis_iuran}</p>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableHistoryPembayaran;
