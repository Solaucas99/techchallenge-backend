import { UserRepository } from '@usersRep/user/implementations/UserRepository';
import { UserSignUpController } from './UserSignUpController';
import { UserSignUpUseCase } from './UserSignUpUseCase';

const repo = new UserRepository();
const useCase = new UserSignUpUseCase(repo);
const userSignUpController = new UserSignUpController(useCase);

export { userSignUpController };
