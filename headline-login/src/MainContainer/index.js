import React, { Component } from 'react';
//import logo from './logo.svg';
import NewsList from './NewsList'

class MainContainer extends Component {
  constructor(){
    super();

    this.state = {
      news: []
    }
  }

  getNews = async () => {

    try {
      // fetch, which is a new native function to JS
      // Other Ajax packages commonly used with React are
      // superagent and axios

      const news = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c52029ac7a854be1b217e85bd9dd9f5a');
      console.log(news)
      // This line parses the response from JSON, and allows us to read
      // the nody of our request, which is where the data are
      const newsJson = await news.json();
      console.log(newsJson);
      return newsJson
      
    } catch(err){
      return err
      
    }
    
  }

  /*starNews = (index, e) => {

    // one way is to use the Splice method
    const state = this.state;
    state.news.splice(index, 1);
    this.setState(state);
    
    // filter returns a new array that meets tbe condition in the return
    // the return in a single is implicit

    //this.setState({
    //  crimes: this.state.crimes.filter((crime, i) => i !== index)

    //})


  }
  */
  componentDidMount(){
    // We want to setState immediatley after we get the data
    this.getNews().then((data) => {
      console.log(data, 'this is data')

      this.setState({news: data.articles})
      console.log(this.state.news)
    });
  }

  render() {
    return (
      <div className="App">
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

export default MainContainer;