import React, { Component } from 'react'
import ArticleCard from '../components/ArticleCard'

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
      <div className="ArticlesContainer">
        <h3>Articles or whatever🤷🏾‍♂️</h3>  
        {this.state.articles.map(article =>
          <ArticleCard key={article.id} article={article} />
        )}
      </div> 
    )
  }
}

export default ArticlesContainer