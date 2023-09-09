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

export type CreateUserType = {
  email: string
  token: string
}

export type UpdateProfileType = Required<
  Pick<IUser, 'firstName' | 'lastName'>
>

export type SetPasswordType = {
    password: string
}

export type UpdateEmailType = Pick<IUser, 'email' | 'password'>

export type UpdatePasswordType = {
  oldPassword: string
  newPassword: string
}

export type DeleteProfileType = {
  password: string
}
