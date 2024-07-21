import { useEffect } from "react";
import { BiSolidDetail } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailDataRumah } from "../../store/action/rumahAction";

const TablePenghuniRumah = () => {
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
          <th>Nomor Telepon</th>
          <th>Status Hunian</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {detail?.detail?.penghuni?.map((item) => (
          <tr key={item.id} className="border-b border-gray-500">
            <td className="py-3">{item.nama_lengkap}</td>
            <td>{item.nomor_telepon}</td>
            <td>{item.status_hunian}</td>
            <td>
              <div className="flex flex-row gap-2 justify-center">
                <Link to={`/detail-penghuni/${item.id}`}>
                  <p className="text-gray-500 text-2xl">
                    <BiSolidDetail />
                  </p>
                </Link>
                <Link to={`/rumah/update-penghuni/${item.id}`}>
                  <p className="text-yellow-500 text-2xl">
                    <FaEdit />
                  </p>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablePenghuniRumah;
