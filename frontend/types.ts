export type User = {
  id: number;
  name: string;
  email: string;
  calorieLog: calorie[] | null;
};

export type calorie = {
  datetime: string;
  calorie: string;
};