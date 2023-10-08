import Image from "next/image";

import Header from "./components/header/header";
import Table from "./components/table/table";

export default function Home() {
  return (
    <div>
      <Header />
      {/* Consider: flex flex-col items-center justify-between */}
      <main className="min-h-screen p-24">
        <Table />
      </main>
    </div>
  );
}
