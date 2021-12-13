import { internet } from 'faker'
import { UserRepository } from '../ports/user-repository.model'
import { UserData } from '../register-user-on-mail-list/user-data.model'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('InMemoryUserRepository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepository: UserRepository = new InMemoryUserRepository(users)
    const user = await userRepository.findByEmail(internet.email())
    expect(user).toBeNull()
  })
})
