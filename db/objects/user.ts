import { Long } from "https://deno.land/x/mongo@v0.22.0/bson/bson.d.ts";

interface User {
    _id: { $oid: string };
    userName: string;
    pw: string;
    lastName: string;
    firstName: string;
    birthDate: string;
}