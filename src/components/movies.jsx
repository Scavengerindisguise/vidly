import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';



class Movies extends Component {

    state = {
        movies: getMovies()
    };

    handleLike = (movie) => {
        let movies = [...this.state.movies];
      movies.map(item => {
            if (item._id === movie._id) {
                console.log(item);
                item.liked ? item.liked = false : item.liked = true;
                return item;
            }
            return item;
        });
        console.log(movies);
        this.setState({ movies })
    }

    handleDelete = (movie) => {
        console.log(movie);
        let movies = this.state.movies.filter((item) => item._id !== movie._id);
        this.setState({ movies })

    };
    renderTable = () => {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    {this.state.movies.map((movie) => {
                        let classes = "fa fa-heart";
                        classes += movie.liked ? "-o" : "";
                        return <tbody >
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><i onClick={()=>this.handleLike(movie)} className={classes} aria-hidden="true"></i></td>
                                <td><button onClick={() => this.handleDelete(movie)} className="badge badge-danger">Delete</button></td>
                            </tr>
                        </tbody>

                    })}

                </table>
            </div>
        )
    }
    render() {
        if (this.state.movies.length === 0)
            return <p>There are no movies in the database.</p>;
        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length} movies in the database.</p>
                <main className='container'>
                    {this.renderTable()}
                </main>
            </React.Fragment>
        );
    }
}

export default Movies;