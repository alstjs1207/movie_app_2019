import React from 'react';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history } =  this.props;
        if(location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location:{state}} = this.props;
        if(state){
            return(
            <div className="movie">
                <img src={state.poster} alt={state.title} titlt={state.title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{state.title}</h3>
                <h4 className="movie__rating">{state.rating}/10</h4>
                <h5 className="movie__year">{state.year}</h5>
                <ul className="movie__genres">
                    {state.genres.map((genre, index) => (
                    <li key={index} className="genres__genre">
                    {genre}
                    </li>
                    ))}
                </ul>
                <p className="movie__summary">{state.summary}</p>
            </div>
            </div>
            )
        } else {
            return null
        }
    }

}

export default Detail;