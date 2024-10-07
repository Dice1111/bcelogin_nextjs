// controls/AuthControl.ts
import { UserEntity } from '../entities/User';

export class AuthControl {
  private userEntity: UserEntity;

  constructor() {
    this.userEntity = new UserEntity();
  }

  public async authenticateUser(email: string, password: string): Promise<{ success: boolean; message: string }> {
    const foundUser = this.userEntity.findUserByEmail(email);

    if (!foundUser) {
      return { success: false, message: 'Invalid email or password.' };
    }

    if (foundUser.password !== password) {
      return { success: false, message: 'Invalid email or password.' };
    }

    return { success: true, message: 'Login successful!' };
  }
}
