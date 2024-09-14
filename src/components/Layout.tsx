import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

type PageLayoutProps = PropsWithChildren;

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen w-full flex justify-between flex-col gap-20   bg-[#c43737] text-black overflow-hidden  font-sans">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
