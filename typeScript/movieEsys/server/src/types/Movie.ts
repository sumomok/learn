import { Movie } from "../model/Movie";
import Mongoose from 'mongoose'
export interface IMovie extends Movie, Mongoose.Document { }