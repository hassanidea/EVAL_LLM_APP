import Link from "next/link";
import Form from "./_components/Form";
import Experiments from "./_components/Experiments";
import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="flex flex-col items-start justify-center p-4 text-white">
      <Form />
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
      <Experiments />
    </main>
  );
}
