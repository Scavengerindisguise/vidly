import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {

    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        sortColumn: { path: 'title', order: 'asc' }
    };

    componentDidMount() {
        const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
        this.setState({ movies: getMovies(), genres });

    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
        console.log(genre);
    }

    handlePageChange = page => {
        console.log(page);
        this.setState({
            currentPage: page
        });
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index]= {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
      
    }

    handleDelete = (movie) => {
        console.log(movie);
        let movies = this.state.movies.filter((item) => item._id !== movie._id);
        this.setState({ movies })

    };

    handleSort = sortColumn => {
        this.setState({
            sortColumn
        });
    }

getPagedData = () =>{
    const { selectedGenre, movies: allMovies, currentPage, pageSize, sortColumn } = this.state;
       
    const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return {totalCount: filtered.length, data: movies};

}




    render() {
        const {  currentPage, pageSize, sortColumn } = this.state;
        const {totalCount, data: movies} = this.getPagedData();
    
        if (this.state.movies.length === 0)
            return <p>There are no movies in the database.</p>;


        return (
            <main className='container'>
                <div className='row'>
                    <div className="col-3">
                        <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} />
                    </div>
                    <div className="col">
                        <p>Showing {totalCount} movies in the database.</p>
                        <MoviesTable movies={movies} sortColumn={sortColumn} onSort={this.handleSort} onLike={this.handleLike} onDelete={this.handleDelete} />
                        <Pagination onPageChange={this.handlePageChange}
                            itemsCount={totalCount} pageSize={pageSize} currentPage={currentPage} />
                    </div>
                </div>
            </main>
        );
    }
}

export default Movies;