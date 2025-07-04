
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main className="flex justify-center items-center w-full h-dvh">
   {children}
   
   </main>
     
  );
}
