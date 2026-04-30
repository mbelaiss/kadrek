export const metadata = { metadataBase: new URL("https://kadrek.com") };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
