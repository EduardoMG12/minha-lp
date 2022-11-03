import Header from "../header";
import { Outlet } from "react-router-dom";
import Footer from "../footer";

export default function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
