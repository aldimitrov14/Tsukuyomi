import { Model, ObjectId } from 'mongoose'

export interface IUser {
  id: ObjectId
  email: string
  firstName?: string
  lastName?: string
  password?: string
  token?: string
}

export type UserModel = Model<IUser, unknown, unknown>

export type UpdateProfilePayload = Required<
  Pick<IUser, 'firstName' | 'lastName'>
>

export interface SetPasswordPayload {
    password: string;
}

export interface SetToken {
    typeOfToken: string,
    token: string,
}

export type UpdateEmailPayload = Pick<IUser, 'email' | 'password'>

export interface UpdatePasswordPayload {
  oldPassword: string
  newPassword: string
}

export interface DeleteProfilePayload {
  password: string
}
