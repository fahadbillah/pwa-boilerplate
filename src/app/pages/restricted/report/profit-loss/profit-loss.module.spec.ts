import { ProfitLossModule } from './profit-loss.module';

describe('ProfitLossModule', () => {
  let profitLossModule: ProfitLossModule;

  beforeEach(() => {
    profitLossModule = new ProfitLossModule();
  });

  it('should create an instance', () => {
    expect(profitLossModule).toBeTruthy();
  });
});
