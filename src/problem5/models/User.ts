import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    dayOfBirth: { type: Date }
}, { timestamps: true })

export const UserModel = mongoose.model('User', UserSchema)
export type UserType = mongoose.InferSchemaType<typeof UserSchema> & { id: mongoose.Types.ObjectId };