import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import { HiLockOpen, HiPencilSquare } from "react-icons/hi2";
import useCookie from "react-use-cookie";
import useUserStore from "../stores/useUserStore";

const UserProfilePage = () => {
  // const [user] = useCookie("my_user");
  // const { name, email, profile_image } = JSON.parse(user);

  const {
    user: { name, email, profile_image },
  } = useUserStore();

  return (
    <div>
      <Container>
        <Breadcrumb currentPage={"User Profile"} />
        <div className="border flex flex-col p-10">
          <div className="flex  gap-3 items-end mb-2">
            <div className="relative">
              <img
                src={
                  profile_image
                    ? profile_image
                    : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                }
                alt="user-profile"
                className="size-32 rounded-md"
              />
              <Link
                to={"user-change-image"}
                className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 size-6 items-center justify-center flex text-white bg-stone-600 rounded-full"
              >
                <HiPencilSquare size={10} />
              </Link>
            </div>
            <div>
              <span className="mb-1 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                Your Name
              </span>
              <div className="flex gap-4 items-center">
                <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">
                  {name}
                </h2>
                <Link
                  to="user-change-name"
                  className="size-6 items-center justify-center flex text-white bg-stone-600 rounded-full"
                >
                  <HiPencilSquare size={10} />
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h1 className="text-sm font-bold">Email Address</h1>
            <h2 className="text-sm text-gray-500">{email}</h2>
          </div>
          <button
            type="button"
            className="inline-flex md:max-w-md gap-3 items-center justify-center rounded-lg bg-stone-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
          >
            <HiLockOpen /> Change Password
          </button>
        </div>
      </Container>
    </div>
  );
};

export default UserProfilePage;
