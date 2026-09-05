export interface FishSlide {
  number: string;
  subtitle: string;
  title: string;
  desc: string;
  size: string;
  texture: string;
  protein: string;
  fat: string;
  calories: string;
  omega: string;
  cooking: string;
  themeColor: string;
  filletGrad: [string, string, string];
  realBody: [string, string, string, string, string];
  realFins: [string, string, string, string];
}

export interface OrderFormData {
  name: string;
  product: string;
  qty: string;
  location: string;
}
