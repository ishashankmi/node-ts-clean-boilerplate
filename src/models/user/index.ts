import { db } from "../../database/connection";
import { UserSchema } from "../../database/schema/user";

export const User = db.model('users', UserSchema);