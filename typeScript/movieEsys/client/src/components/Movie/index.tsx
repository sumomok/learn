import { MovieList as List } from './MovieList';
import { connect } from 'react-redux';
import { StoreToProps } from './PropsAndEvent';

export const MovieList = connect(StoreToProps)(List)
