import "./globals.css";

export const metadata = {
  title: "Arquimedes Portfolio",
  description: "Created by Arquimedes Vasquez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-color30 bg-color60 flex flex-col items-center">
        {children}
      </body>
    </html>
  );
}
