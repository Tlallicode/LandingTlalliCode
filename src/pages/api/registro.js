import { neon } from '@neondatabase/serverless'
const sql = neon(import.meta.env.DATABASE_URL)

export async function POST({ request }) {
    try {
        const { nombre, correo } = await request.json();

        if (!nombre || !correo) {
            return new Response(
                JSON.stringify({ error: 'Nombre y correo son obligatorios' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        await sql`
            INSERT INTO interesados (nombre, correo)
            VALUES (${nombre}, ${correo})
            `;

        return new Response(
            JSON.stringify({ success: true }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    } catch (error) {
        console.error(error);

        return new Response(
            JSON.stringify({ error: 'No se pudo guardar el registro' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}