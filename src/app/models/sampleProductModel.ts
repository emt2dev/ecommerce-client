export class SampleProductModel {
    id: number;
    title: string;
    description: string;
    price: number;
    keyword: string;
  
    constructor(id: number, title: string, description: string, price: number, keyword: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.keyword = keyword;
    }
  }

  