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
      
      const news = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c52029ac7a854be1b217e85bd9dd9f5a');
      console.log(news)
      const newsJson = await news.json();
      console.log(newsJson);
      return newsJson
      
    } catch(err){
      return err
      
    }
    
  }

  /*starNews = (index, e) => {

    // future functionality to HIGHLIGHT items
    const state = this.state;
    state.news.splice(index, 1);
    this.setState(state);
    
    // filter returns a new array that meets tbe condition in the return
    // the return in a single is implicit

    //this.setState({
    //  news: this.state.news.filter((news, i) => i !== index)

    //})


  }
  */
  componentDidMount(){
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