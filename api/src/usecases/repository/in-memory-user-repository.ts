import { UserRepository } from '../ports/user-repository.model'
import { UserData } from '../register-user-on-mail-list/user-data.model'

export class InMemoryUserRepository implements UserRepository {
    private repository: UserData[];

    constructor (private users: UserData[]) {
      this.repository = users
    }

    async add (user: UserData): Promise<void> {
      const exists = await this.exists(user)

      if (exists) {
        return Promise.resolve()
      }

      this.repository.push(user)
      return Promise.resolve()
    }

    findByEmail (email: string): Promise<UserData> {
      const user = this.repository.find(({ email: userEmail }) => userEmail === email)
      return Promise.resolve(user)
    }

    findAll (): Promise<UserData[]> {
      throw new Error('Method not implemented.')
    }

    async exists (userData: UserData): Promise<boolean> {
      const user = await this.findByEmail(userData.email)
      return Promise.resolve(!!user)
    }
}
