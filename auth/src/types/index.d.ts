export interface ISignIn {
  username?: string | null;
  email: string | null;
  password: string | null;
}

export interface ISignUp {
  email: string;
  password: string;
  rePassword: string;
}
