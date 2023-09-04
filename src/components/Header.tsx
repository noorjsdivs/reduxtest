import React from "react";
import Container from "./Container";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-slate-950 text-slate-200 border-b-[1px] border-b-slate-700">
      <Container className="py-6 flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-lg font-semibold hover:text-white duration-200">
            Todo Application
          </h1>
        </Link>
        <ul className="flex items-center gap-x-10 text-slate-300">
          <Link href={"/alltodo"}>
            <li className="hover:text-white duration-200 cursor-pointer">
              View All todos
            </li>
          </Link>
          <Link href={"/query"}>
            <li className="hover:text-white duration-200 cursor-pointer">
              Query
            </li>
          </Link>
          <Link href={"/settings"}>
            <li className="hover:text-white duration-200 cursor-pointer">
              Settings
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className="hover:text-white duration-200 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
