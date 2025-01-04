import Link from "next/link";
import Form from "./_components/Form";
import Experiments from "./_components/Experiments";

export default function HomePage() {
  return (
    <main className="flex flex-col items-start justify-center p-4 text-white">
      <Form />
      <Experiments />
    </main>
  );
}
