import { MlbRoutingModule } from './mlb-routing.module';

describe('MlbRoutingModule', () => {
  let mlbRoutingModule: MlbRoutingModule;

  beforeEach(() => {
    mlbRoutingModule = new MlbRoutingModule();
  });

  it('should create an instance', () => {
    expect(mlbRoutingModule).toBeTruthy();
  });
});
