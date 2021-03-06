import React, { Component } from 'react';
import TableHeader from '../components/common/tableHeader';
import TableBody from '../components/common/tableBody';
import Like from '../components/common/like';
import Table from './common/table';


class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like', content: movie =>( <Like liked={movie.liked} onClick={()=>this.props.onLike(movie)}/>) },
        { key: 'delete',content: movie => (<button onClick={() =>this.props.onDelete(movie)} className="btn btn-danger">Delete</button>) }
    ];
    raiseSort = path => {
        console.log(path);
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc'
        }
        this.props.onSort(sortColumn);
    };

    render() {
        const { movies, onSort, sortColumn } = this.props;


        return (
        <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort}/>
        );
    }
}

export default MoviesTable;