// import { drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";

// import { env } from "~/env";
// import * as schema from "./schema";
// import { sql } from "@vercel/postgres";
// /**
//  * Cache the database connection in development. This avoids creating a new connection on every HMR
//  * update.
//  */
// // const globalForDb = globalThis as unknown as {
// //   conn: postgres.Sql | undefined;
// // };

// // const conn = globalForDb.conn ?? postgres(env.DATABASE_URL);
// // if (env.NODE_ENV !== "production") globalForDb.conn = conn;

// export const db = drizzle(sql, { schema });

import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

export const db = drizzle(sql, { schema });
