import { TopNavigation } from "./TopNavigation";
import "./globals.css";
import { Providers } from "./Redux/provider";
export const metadata = {
  title: "ShoppingCart",
  description: "Shopping cart Ecomerce App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className="bg-white text-black  ">
          <TopNavigation />

          <div className="border-2  border-green-500 flex-1">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
