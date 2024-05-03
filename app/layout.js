import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/components/Header";
import { cookies } from "next/headers";
import { decodeToken } from "./lib/decodeUser";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notebook | Home",
  description: "Cloud notebook - save your notes on the cloud",
};

export default function RootLayout({ children }) {
  const token = cookies().get("token")?.value;
  let firstname ;
  if(token){
    firstname = decodeToken(token).firstname;
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <Header token={token} firstname={firstname} />
        {children}
        </body>
    </html>
  );
}
