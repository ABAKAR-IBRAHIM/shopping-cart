export default interface ProductModel {
  _id: any;
  name: string;
  imageSrc: string;
  discription: string;
  price: number;
  off: number;
  rating: number;
  review: number;
  quantity: number;
  totalPrice: number;
  totalItems: number;
  images: [
    {
      _id: any;
      image: string;
    }
  ];
}

export interface CartModel {
  items: ProductModel[];
  totalQuantity: number;
  totalAmount: number;
}

export interface UserModel {
  email: string;
  password: string;
}
