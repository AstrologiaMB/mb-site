export type User = {
  dateOfBirth: string;
  email: string;
  name: string;
  password: string;
  scores?: [{ game: string; points: number }];
  sessionId?: string;
  verified: boolean;
};
