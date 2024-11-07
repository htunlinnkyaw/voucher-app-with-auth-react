import React, { useState } from "react";
import { HiOutlineEye, HiOutlineTrash } from "react-icons/hi";
import ShowDate from "./ShowDate";
import { mutate, useSWRConfig } from "swr";
import { bouncy } from "ldrs";
import endpoint from "../constant/endpoint";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useCookie from "react-use-cookie";
bouncy.register();

const VoucherListRow = ({
  voucher: { id, voucher_id, customer_name, customer_email, sale_date },
}) => {
  const [token] = useCookie("my_token");
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    setIsDeleting(true);

    const res = await fetch(`${endpoint}/vouchers/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    mutate(`${endpoint}/vouchers`);
    setIsDeleting(false);
    toast.success("Voucher has been deleted");
  };

  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">{voucher_id}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
        >
          {customer_name}
        </th>
        <td className="px-6 py-4 ">{customer_email}</td>
        <td className="px-6 py-4 text-end">
          <ShowDate timestamp={sale_date} />
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex  rounded-md shadow-sm" role="group">
            <button
              onClick={handleDeleteBtn}
              type="button"
              className="size-10 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              {isDeleting ? (
                <l-bouncy size={20} speed="1.75" color="gray" />
              ) : (
                <HiOutlineTrash />
              )}
            </button>
            <Link
              to={`/dashboard/voucher/detail/${id}`}
              className="size-10 text-stone-900 flex justify-center items-center text-sm font-medium  bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <HiOutlineEye />
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default VoucherListRow;