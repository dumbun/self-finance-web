import Image from "next/image";
import logo from "../../public/icons/logo.svg";
export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center">
        <Image
          height={80}
          className="mr-10"
          alt="Vamshi krishna self-finance"
          src={logo}
        />
        <h1 className="text-5xl">Comming Soon</h1>
      </div>
    </main>
  );
}
