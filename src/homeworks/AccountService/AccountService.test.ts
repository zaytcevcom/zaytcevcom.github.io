import { AccountService } from '../AccountService';

describe('AccountService', () => {
  let accountService: AccountService;

  beforeEach(() => {
    accountService = new AccountService();
  });

  it('Set user discount', () => {
    accountService.setUserDiscount('Premium', 20);
    accountService.setUserDiscount('Standard', 10);

    const discountPremium = accountService.getDiscount('Toy', 'Premium');
    const discountStandard = accountService.getDiscount('Toy', 'Standard');

    expect(discountPremium).toBe(20);
    expect(discountStandard).toBe(10);
  });

  it('Set product and user discount', () => {
    accountService.setUserDiscount('Premium', 20);
    accountService.setUserDiscount('Standard', 0);

    accountService.setProductDiscount('Toy', 'Premium', 7);
    accountService.setProductDiscount('Toy', 'Standard', 5);

    const discountPremium = accountService.getDiscount('Toy', 'Premium');
    const discountStandard = accountService.getDiscount('Toy', 'Standard');
    const discountFree = accountService.getDiscount('Toy', 'Free');

    expect(discountPremium).toBe(27);
    expect(discountStandard).toBe(5);
    expect(discountFree).toBe(0);
  });

  it('Set user negative discount', () => {
    expect(() => accountService.setUserDiscount('Premium', -10)).toThrow(
      'Размер скидки должен быть больше или равен нулю'
    );
  });

  it('Set product negative discount', () => {
    expect(() => accountService.setProductDiscount('Car', 'Premium', -5)).toThrow(
      'Размер скидки должен быть больше или равен нулю'
    );
  });
});
