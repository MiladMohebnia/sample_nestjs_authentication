import { DeleteUser } from './deleteUser';
import { DeleteUserDto } from './deleteUser.dto';

describe('input id must be valid', () => {
  let deleteUser: DeleteUser;
  const request = new DeleteUserDto();

  beforeEach(async () => {});

  it('should accept app king of integer', () => {
    let acceptList = [123, '123', '123aa'];
    for (let item of acceptList) {
      request.userId = item;
      deleteUser = new DeleteUser(request);
      expect(deleteUser.validate()).toBe(true);
    }
  });

  it('should not accept invalid data and negative numbers', () => {
    let rejectList = ['a123', 'daf', 0, -123];
    for (let item of rejectList) {
      request.userId = item;
      deleteUser = new DeleteUser(request);
      expect(deleteUser.validate()).toBe(false);
    }
  });
});
