import { MovieList as List } from './MovieList';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './PropsAndEvent';

export const MovieList = connect(mapStateToProps, mapDispatchToProps)(List)
