import { PrismaClient } from '@prisma/client';

import { IUser } from '@entities/IUser';
import { IUserRepository } from '../interfaces/IUserRepository';

export class UserRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createUser({
    code_complete_score,
    html_solutions_score,
    js_solutions_score,
    quiz_score,
    email,
    password,
    username,
    is_admin,
  }: IUser): Promise<IUser | void> {
    try {
      const result = await this.prisma.user.create({
        data: {
          code_complete_score: code_complete_score as number,
          html_solutions_score: html_solutions_score as number,
          js_solutions_score: js_solutions_score as number,
          quiz_score: quiz_score as number,
          email: email as string,
          password: password as string,
          username: username as string,
          is_admin: is_admin as boolean,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readUser({ id }: IUser): Promise<IUser | void> {
    try {
      const result = await this.prisma.user.findUnique({
        where: {
          id,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readUserByEmail({ email }: IUser): Promise<IUser | void> {
    try {
      const result = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readUserByUsername({ username }: IUser): Promise<IUser | void> {
    try {
      const result = await this.prisma.user.findUnique({
        where: {
          username,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readAllUser(): Promise<IUser[] | void> {
    try {
      const result = await this.prisma.user.findMany();

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async updateUser({
    id,
    code_complete_score,
    html_solutions_score,
    js_solutions_score,
    quiz_score,
    email,
    password,
    username,
    is_admin,
  }: IUser): Promise<IUser | void> {
    try {
      const result = await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          code_complete_score,
          html_solutions_score,
          js_solutions_score,
          quiz_score,
          email,
          password,
          username,
          is_admin,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteUser({ id }: IUser): Promise<IUser | void> {
    try {
      const result = await this.prisma.user.delete({
        where: {
          id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
