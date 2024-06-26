import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Profile } from '../../src/modules/profile/profile.entity';

export default class ProfileSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await dataSource.query('DELETE FROM profiles');
    await dataSource.query('ALTER TABLE profiles AUTO_INCREMENT=1');
    const profileRepo = dataSource.getRepository(Profile);
    await profileRepo.insert({
      feProfileId: 1,
      beProfileId: 1,
      ssProfileId: 1,
      xp: 5,
      indType: ['TECH', 'HEALTH'],
    });
  }
}
