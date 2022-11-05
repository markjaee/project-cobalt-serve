import { CHAR_ZERO_WIDTH_NOBREAK_SPACE } from 'https://deno.land/std@0.152.0/path/_constants.ts';
import { Context } from '../../deps.ts';

export async function signUpUser(ctx: Context) {
    const result = ctx.request.body();
    let req;

    if(result.type !== "json") {
        ctx.response.status = 415;
        return;
    } else {
        req = await result.value;
    }

    if(!(req.name && req.email && req.password)) {
        ctx.response.status = 400;
        return;
    }

    try {
        // await attemptSignup(req);
        ctx.response.status = 201;
    } catch(e) {
        ctx.response.status = 500;
        if (e instanceof Deno.errors.AlreadyExists) {
            ctx.response.body = "User already exists";
        }
    }
};