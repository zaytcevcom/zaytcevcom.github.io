export type UserType = 'Standard' | 'Premium' | 'Gold' | 'Free';
export type ProductType = 'Car' | 'Toy' | 'Food';

export class AccountService {
  private userDiscounts: Map<UserType, number> = new Map();
  private productDiscounts: Map<ProductType, Map<UserType, number>> = new Map();

  setUserDiscount(userType: UserType, discount: number): void {
    if (discount < 0) {
      throw new Error('Размер скидки должен быть больше или равен нулю');
    }

    this.userDiscounts.set(userType, discount);
  }

  setProductDiscount(productType: ProductType, userType: UserType, discount: number): void {
    if (discount < 0) {
      throw new Error('Размер скидки должен быть больше или равен нулю');
    }

    if (!this.productDiscounts.has(productType)) {
      this.productDiscounts.set(productType, new Map());
    }

    const mapProducts = this.productDiscounts.get(productType);
    mapProducts.set(userType, discount);
  }

  getDiscount(productType: ProductType, userType: UserType): number {
    const userDiscount = this.userDiscounts.get(userType) ?? 0;
    const productDiscount = this.productDiscounts.get(productType)?.get(userType) ?? 0;

    return userDiscount + productDiscount;
  }
}
