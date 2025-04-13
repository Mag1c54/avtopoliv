import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export const metadata = {
  title: "Автополив РФ",
  description: "Автоматический полив купить в Москве",

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
 
 
        {children}
      
      
      </body>
      
    </html>
  );
}
