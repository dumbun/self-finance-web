import "./globals.css";

export const metadata = {
  title: "Self-Finance",
  description:
    "self-finance application is a mobile application which is secure offline user friendly to the shop keeper or small finance companies owners to store there customer data with mobile friendly application and help them to calculate their monthly interest with out any hassle and see the data whenever required.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
