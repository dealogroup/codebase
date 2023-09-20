import "./globals.css";
import { Inter } from "next/font/google";
import { Chivo } from "next/font/google";
import RootLayout from "@/components/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "dealo_app",
    default: "A Nigerian freelancing platform",
  },
};

// const chivo = Chivo({
//   subsets: ["latin"],
//   weight: "300",
// });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout
        // className={chivo.className}
        >
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
