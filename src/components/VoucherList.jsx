import React, { useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";
import endpoint from "../constant/endpoint";
import VoucherListLoader from "./VoucherListLoader";
import VoucherRowEmpty from "./VoucherRowEmpty";
import VoucherListRow from "./VoucherListRow";
import useSWR, { useSWRConfig } from "swr";
import { debounce } from "lodash";
import Pagination from "./Pagination";
import useCookie from "react-use-cookie";

const VoucherList = () => {
  // const [search, setSearch] = useState();
  const [fetchUrl, setFetchUrl] = useState(`${endpoint}/vouchers`);

  const [token] = useCookie("my_token");

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);

  const handleSearch = debounce((event) => {
    // setSearch(event.target.value);
    setFetchUrl(`${endpoint}/vouchers?q=${event.target.value}`);
  }, 500);

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
  };

  return (
    <div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <form className="max-w-[220px]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <HiSearch className="size-5 text-gray-400" />
              </div>
              <input
                onChange={handleSearch}
                type="search"
                id="default-search"
                className="block w-full px-4 outline-none py-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-stone-500 focus:border-stone-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-stone-500 dark:focus:border-stone-500"
                placeholder="Search Product"
              />
            </div>
          </form>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Voucher ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-end">
                  Created At
                </th>
                <th scope="col" className="px-6 py-3 text-end">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <VoucherListLoader />
              ) : data?.data?.length === 0 ? (
                <VoucherRowEmpty />
              ) : (
                data?.data?.map((voucher, index) => (
                  <VoucherListRow
                    key={voucher.id}
                    index={index}
                    voucher={voucher}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>

        {!isLoading && (
          <Pagination
            links={data?.links}
            meta={data?.meta}
            updateFetchUrl={updateFetchUrl}
          />
        )}
      </div>
    </div>
  );
};

export default VoucherList;
