import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCookie from "react-use-cookie";
import useUserStore from "../stores/useUserStore";

const Header = () => {
  // const [userCookie] = useCookie("my_user");
  // const { name, email, profile_image } = JSON.parse(userCookie);

  const {
    user: { name, email, profile_image },
  } = useUserStore();

  return (
    <header className="mb-5">
      <Container>
        <div className="flex justify-between">
          <div>
            <Link to={"/"} className="text-xl md:text-3xl font-bold">
              Voucher App
            </Link>
            <h2 className="text-gray-500">MMS Software</h2>
          </div>
          <div className="flex gap-2 items-center me-1 md:me-0">
            <img
              src={
                profile_image
                  ? profile_image
                  : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              }
              alt="profile"
              className="size-12 rounded-full shadow-sm object-cover object-top"
            />
            <div>
              <h1 className="text-sm md:text-lg font-bold capitalize">
                {name}
              </h1>
              <p className="text-gray-500 text-sm">{email}</p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
