import { DeleteUserDto } from './deleteUser.dto';

export class DeleteUser {
  userId: number;

  constructor(deleteUser: DeleteUserDto) {
    if (typeof deleteUser.userId != 'number') {
      deleteUser.userId = parseInt(deleteUser.userId) || 0;
    }
    this.userId = deleteUser.userId;
  }

  validate() {
    return this.userId > 0;
  }
}
