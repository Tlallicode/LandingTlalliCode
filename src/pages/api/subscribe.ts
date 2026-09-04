export const prerender = false;

export async function POST({ request }: { request: Request }) {
  const contentType = request.headers.get('content-type') ?? '';
  let payload: Record<string, unknown> = {};

  if (contentType.includes('application/json')) {
    payload = await request.json().catch(() => ({}));
  } else {
    const formData = await request.formData().catch(() => new FormData());
    payload = {
      name: formData.get('name'),
      email: formData.get('email'),
    };
  }

  const name = String(payload.name ?? '').trim();
  const email = String(payload.email ?? '').trim();

  if (!name || name.length < 2) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `Nueva suscripción Nehnemi:\nNombre: ${name}\nCorreo: ${email}`,
        }),
      });
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: 'El nombre es obligatorio y debe tener al menos 2 caracteres.',
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!email || !isValidEmail) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Ingresa un correo electrónico válido.',
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }

  return new Response(
    JSON.stringify({
      success: true,
      message: 'Te has unido a la sociedad secreta de Nehnemi. Pronto recibirás noticias exclusivas.',
      data: {
        name,
        email,
      },
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}
