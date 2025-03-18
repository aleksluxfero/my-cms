import { neon } from '@neondatabase/serverless';

export default async function Home() {
  const sql = neon(process.env.DATABASE_URL!);
  const result = await sql('SELECT version();'); // Простой запрос для проверки

  return (
    <div>
      <h1>CMS Database Test</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
