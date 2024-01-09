export class StyleDTO {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public currentPrice: number,
      public productImageUrls: string[],
      public cartCount: number,
      public orderCount: number,
      public grossIncome: number,
      public isAvailableForOrder: boolean,
      public isLimitedTimeOnly: boolean,
      public unavailableOn: Date,
      public isComingSoon: boolean,
      public availableOn: Date,
      public discountedPrice: number,
      public useSalePrice: boolean,
      public digitalOnly: boolean,
      public packagedDimensions: number,
      public packagedWeight: number,
      public productId: number,
      public companyId: number
    ) {}
  }
  