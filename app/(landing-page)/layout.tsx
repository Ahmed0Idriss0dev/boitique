import Navigtion from "@/components/landing-page/Navigtion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <Navigtion/>
   {children}
   
   </>
     
  );
}
