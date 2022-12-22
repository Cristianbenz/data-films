import {Schema, model, models} from "mongoose";

export interface IUser {
    username: string;
    hashedPass: string;
}

const UserSchema = new Schema<IUser>({
    username: 'String',
    hashedPass: "String"
})

export const User = models.User || model('User', UserSchema);