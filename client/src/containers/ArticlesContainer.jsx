import React, { Component } from 'react'
import ArticleCard from '../components/ArticleCard.jsx'

const divStyle = {
  margin: '5px',
  padding: '10px',
  border: '2px solid #100431'
};

class ArticlesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.getArticles()
  }

  getArticles() {
    fetch('/api/articles')
      .then(response => response.json())
      .then(articles => {
        if (articles.length) {
          this.setState({ articles: articles })
          // this.getArticle(articles[0].id)
        } else {
          this.setState({ articles: [] })
        }
      })
  }

  render() {
    return (
      <div className="ArticlesContainer" style={divStyle} >
        
        <h3>I am the parent component</h3>
        {this.state.articles.map(article =>
          <ArticleCard key={article.id} article={article} />
        )}
      </div>
    )
  }
}

export default ArticlesContainer