import Mongoose from 'mongoose';
import { Movie } from '../model/Movie'
import { IMovie } from '../types/Movie';
const movieSchema = new Mongoose.Schema<IMovie>({
    name: String,
    type: [String],
    areas: [String],
    timeLong: Number,
    isClasic: Boolean,
    description: String,
    poster: String,
    isHot: Boolean
}, {
    versionKey: false,
})

export default Mongoose.model<IMovie>('Movie', movieSchema)