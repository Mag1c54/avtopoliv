import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="test">
       
        {children}
      </body>
    </html>
  );
}
