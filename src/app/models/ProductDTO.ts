export class ProductDTO {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public createdOn: Date,
      public updatedOn: Date,
      public updatesMade: string,
      public mainImageUrl: string,
      public quantity: number,
      public grossIncome: number,
      public updatedBy: string,
      public companyId: number,
      public taxCode: string,
      public categoryId: number,
      public seo: string,
    ) {}
  }
  