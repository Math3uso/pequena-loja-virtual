import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google"
import { ProviderSession } from "@/utils/providers/session-provider";
import { getSession } from "@/lib/auth";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getSession();

  return (
    <html lang="en">
      <body
        className={` ${poppins.className} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
