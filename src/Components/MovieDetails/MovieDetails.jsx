import axios from 'axios';
import React, { Component } from 'react';

export default class MovieDetails extends Component {
    state = {movieDetails : []}
    getmovieDetails = async ()=>{
        let {data} = await axios.get('https://api.themoviedb.org/3/movie/436969?api_key=b5bc4bee282556342ee2d33bdc411424&language=en-US')
        

        console.log(data);
        this.setState({
            movieDetails:data
        })
    }
    componentDidMount(){
        this.getmovieDetails()
    }
    render() {
        return (
            <div className='container'>
                <div className="ay7aga">
                {this.state.movieDetails.overview}
                </div>
                <img className="w-25 " src={"https://image.tmdb.org/t/p/w500"+this.state.movieDetails.poster_path} alt="" />    
            </div>
        )
    }
}
