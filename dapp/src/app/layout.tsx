import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import AppProvider from "@/lib/AppContext";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <div className={"bg-red-100 max-w-screen-md mx-auto min-h-screen"}>
            <Header />
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
