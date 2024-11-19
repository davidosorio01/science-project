import { fail, redirect } from '@sveltejs/kit'; 
import crypto from 'crypto';  
import type { Actions } from './$types';
import { db } from '$lib/server/database/client';  
import { usuarios } from '$lib/server/database/data';  
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';  
import type { RequestEvent } from '@sveltejs/kit'; 

export const actions: Actions = {

  register: async ({ request }: RequestEvent) => {
    const data = Object.fromEntries(await request.formData());

    if (
      typeof data.email !== 'string' ||
      typeof data.password !== 'string' ||
      typeof data.username !== 'string' ||
      !data.email ||
      !data.password ||
      !data.username
    ) {
      return fail(400, { invalid: true });
    }

    const user = await db.select().from(usuarios).where(eq(usuarios.email, data.email));
    
    if (user.length > 0) {
      return fail(400, { user: true });
    }
    
    await db.insert(usuarios).values({ 
      id: crypto.randomUUID(),
      username: data.username,
      email: data.email, 
      rol: 'user',
      password: await bcrypt.hash(data.password, 10),
      token: crypto.randomUUID(),
    });
    
    throw redirect(303, `/home`);
  },
};
