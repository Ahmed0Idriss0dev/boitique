import Nav from "@/components/section/Nav";
import Sidebar from "@/components/section/Sidebar";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <div className="grid h-dvh w-full grid-cols-[200px_1fr] ">
    <Sidebar/>
    <div className="w-full h-full ">
     <Nav/>
     <div className="w-full bg-brand-50/20 p-2.5 h-full">
      <Provider>
      {children} 

      </Provider>

     </div>
    </div>

   </div>
   
   
   </>
     
  );
}
