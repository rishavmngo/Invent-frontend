export type AuthResult = {
  message: string;
  token: string;
};

export type Business = {
  id: number;
  name?: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
};
export type BusinessLoginCredentials = Omit<
  Business,
  "id" | "created_at" | "updated_at"
>;
