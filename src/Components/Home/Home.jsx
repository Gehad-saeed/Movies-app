import React, { Component } from 'react';
import "./Home.css";
import axios from 'axios';


class Home extends Component {
    
    state = {Movies : []}


    getTrendingMovies = async ()=>{
        let {data} = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b5bc4bee282556342ee2d33bdc411424&language=en-US&page=1')
        // console.log(data.results);   
        this.setState({
            Movies:data.results
        })
    }
    componentDidMount(){
        this.getTrendingMovies()
    }
    MovieDetails =()=>{
        console.log(this.state.Movies);
        this.state.Movies.map((value,index)=>{
            return(
                <div key={index} className="movieDetails">
                    {value.id}
                    console.log(value.id);
                </div>
            )
        })
    }
    
    render() {
        console.log(this.props);
        return (
            <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="item text-left">
                            <div className="brdr w-25"></div>
                            <h1>Popular <br /> Movies <br /> To Watch Now</h1>
                            <p className="secondFontColor" >Most Watched Movies By Days</p>
                            <div className="brdr w-100"></div>
                        </div>
                    </div>
                    {this.state.Movies.map((value,index)=>{
                        return(
                            <div key={index} className="col-md-2 my-3">
                                    <div className="item">
                                        <img className="w-100 " src={"https://image.tmdb.org/t/p/w500"+value.poster_path} alt="" />
                                        <h5 className="my-2">{value.title}</h5>
                                        <span className="vote">{value.vote_average}</span>
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </>
        );
    }
}


  
  export default Home ;


