import { Document } from 'mongoose';

export interface Todo  {
  _id: string;
  name: string;
  completed: boolean;
}
