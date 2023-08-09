import { Test, TestingModule } from '@nestjs/testing';
import { ReserverController } from './reserver.controller';

describe('ReserverController', () => {
  let controller: ReserverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReserverController],
    }).compile();

    controller = module.get<ReserverController>(ReserverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
