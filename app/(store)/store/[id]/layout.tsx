import Crad from "@/components/kits/store/components/Crad";
import Nav from "@/components/kits/store/components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main className="section ">
    <div className="w-full relative mx-auto h-dvh sm:w-[500px]  ">
     <Nav/>
     {children}
     <Crad/>
    </div>
   
   </main>
     
  );
}
