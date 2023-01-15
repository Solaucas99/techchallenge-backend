import { IUser } from '@entities/IUser';

export interface IUserRepository {
  readAllUser(): Promise<IUser[] | void>;

  readUser({ id }: IUser): Promise<IUser | void>;

  readUserByEmail({ email }: IUser): Promise<IUser | void>;

  readUserByUsername({ username }: IUser): Promise<IUser | void>;

  createUser({
    code_complete_score,
    quiz_score,
    html_solutions_score,
    js_solutions_score,
    is_admin,
    email,
    password,
    username,
  }: IUser): Promise<IUser | void>;

  updateUser({
    id,
    code_complete_score,
    quiz_score,
    html_solutions_score,
    js_solutions_score,
    is_admin,
    email,
    password,
    username,
  }: IUser): Promise<IUser | void>;

  deleteUser({ id }: IUser): Promise<IUser | void>;
}
