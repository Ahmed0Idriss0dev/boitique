import Crad from "@/components/kits/store/components/Crad";
import Nav from "@/components/kits/store/components/Nav";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main className="section ">
    <div className="w-full relative mx-auto h-dvh sm:w-[500px]  ">
     <Nav/>
     <Provider>

     {children}
     </Provider>
     <Crad/>
    </div>
   
   </main>
     
  );
}
