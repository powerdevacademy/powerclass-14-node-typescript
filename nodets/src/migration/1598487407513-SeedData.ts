import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import {User} from '../entity/User';
import {Scope} from '../entity/Scope';

export class SeedData1598487407513 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository(Scope).save([
            {
                id: 1,
                name: 'Admin'
              },
              {
                id: 2,
                name: 'User'
              },
              {
                id: 3,
                name: 'Guest'
              }
        ]);
        await getRepository(User).save({
            name: 'Daniel Costa',
            username: 'daniel',
            email: 'daniel@icarusacademy.com.br',
            scopeId: 1,
            password: 'powerdev'
          });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
