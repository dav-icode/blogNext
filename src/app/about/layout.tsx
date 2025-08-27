type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <>
      <header>Header</header>
      <div className="bg-red-500">{children}</div>
    </>
  );
}
