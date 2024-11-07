import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import {
  HiCircleStack,
  HiComputerDesktop,
  HiDocumentDuplicate,
} from "react-icons/hi2";
import LoginPage from "./LoginPage";
import Logout from "../components/Logout";
import { HiUserCircle } from "react-icons/hi";

const DashBoardPage = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          <div className="col-span-1 row-span-1 ">
            <ModuleBtn
              url={"/dashboard/product"}
              name={"Product Module"}
              icon={<HiCircleStack className="size-14" />}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              url={"/dashboard/sale"}
              name={"Sale Module"}
              icon={<HiComputerDesktop className="size-14" />}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              url={"/dashboard/voucher"}
              name={"Voucher Module"}
              icon={<HiDocumentDuplicate className="size-14" />}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              url={"/dashboard/user-profile"}
              name={"User Profile"}
              icon={<HiUserCircle className="size-14" />}
            />
          </div>
        </div>
        <div className="flex gap-3 items-center justify-end">
          If you finish your task,
          <Logout />
        </div>
      </Container>
    </section>
  );
};

export default DashBoardPage;
