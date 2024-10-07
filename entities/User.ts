// entities/User.ts
import fs from 'fs';
import path from 'path';

export interface User {
  email: string;
  password: string;
}

export class UserEntity {
  private users: User[];

  constructor() {
    this.users = this.loadUsers();
  }

  private loadUsers(): User[] {
    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  }

  public getUsers(): User[] {
    return this.users;
  }

  public findUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }
}
