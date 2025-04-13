import "./globals.css";

export const metadata = {
  title: "Автополив РФ",
  description: "Автоматический полив купить в Москве",
  viewport: "width=device-width, initial-scale=1",
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
