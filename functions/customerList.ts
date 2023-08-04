export interface Env {
  DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const stmt = context.env.DB.prepare("SELECT * FROM Customers");
  const data = await stmt.all();
  console.log("DB access: ", data);

  return new Response(JSON.stringify(data));
};
