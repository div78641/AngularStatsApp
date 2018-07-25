import { MlbModule } from './mlb.module';

describe('MlbModule', () => {
  let mlbModule: MlbModule;

  beforeEach(() => {
    mlbModule = new MlbModule();
  });

  it('should create an instance', () => {
    expect(mlbModule).toBeTruthy();
  });
});
