import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function mongoConnect() {
  if (conn.isConnected) return;
  const pool = await connect(
    String(process.env.DB_URI)
  );
  conn.isConnected = Boolean(pool.connections[0].readyState);
}

connection.on("error", (e) => console.log(e));

connection.on("connected", () =>
  console.log("database connected successfully")
);
