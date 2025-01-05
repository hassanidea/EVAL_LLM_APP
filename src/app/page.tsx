import Link from "next/link";
import Form from "./_components/Form";
import Experiments from "./_components/Experiments";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const experiments = await db.query.experiments.findMany();

  return (
    <main className="flex flex-col items-start justify-center p-4 text-white">
      <Form />
      <Experiments />
    </main>
  );
}
