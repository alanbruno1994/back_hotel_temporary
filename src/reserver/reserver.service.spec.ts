import { Test, TestingModule } from '@nestjs/testing';
import { ReserverService } from './reserver.service';

describe('ReserverService', () => {
  let service: ReserverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReserverService],
    }).compile();

    service = module.get<ReserverService>(ReserverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
