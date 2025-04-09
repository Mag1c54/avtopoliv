import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="test">
 
 
        {children}
      
      
      </body>
      
    </html>
  );
}
