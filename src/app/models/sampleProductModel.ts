export class SampleProductModel {
    id: number;
    title: string;
    description: string;
    price: number;
    keyword: string;
    rating: number;
  
    constructor(id: number, title: string, description: string, price: number, keyword: string, rating: number) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.keyword = keyword;
      this.rating = rating;
    }
  }

  