import Sidebar from "@/components/section/Sidebar";

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
      {children} 
    </div>

   </div>
   
   
   </>
     
  );
}
