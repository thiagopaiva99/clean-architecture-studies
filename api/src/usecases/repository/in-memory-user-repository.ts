import { UserRepository } from '../ports/user-repository.model'
import { UserData } from '../register-user-on-mail-list/user-data.model'

export class InMemoryUserRepository implements UserRepository {
    private repository: UserData[];

    constructor (private users: UserData[]) {
      this.repository = users
    }

    add (user: UserData): Promise<void> {
      throw new Error('Method not implemented.')
    }

    findByEmail (email: string): Promise<UserData> {
      return null
    }

    findAll (): Promise<UserData[]> {
      throw new Error('Method not implemented.')
    }

    exists (user: UserData): Promise<boolean> {
      throw new Error('Method not implemented.')
    }
}
