import { internet, name } from 'faker'
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

  test('should return user if it is found in the repository', async () => {
    const users: UserData[] = []
    const userName = name.findName()
    const email = internet.email()
    const userRepository = new InMemoryUserRepository(users)
    await userRepository.add({ name: userName, email })
    const user = await userRepository.findByEmail(email)
    expect(user.name).toBe(userName)
  })

  test('should return all users in the repository', async () => {
    const usersData: UserData[] = [
      { name: name.findName(), email: internet.email() },
      { name: name.findName(), email: internet.email() }
    ]
    const userRepository: UserRepository = new InMemoryUserRepository(usersData)
    const users = await userRepository.findAll()
    expect(users.length).toBe(2)
    expect(users[0]).toEqual(usersData[0])
    expect(users[1]).toEqual(usersData[1])
  })
})
