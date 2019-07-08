import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getArticles = this.getArticles.bind(this)
    this.getArticle = this.getArticle.bind(this)
  }

  componentDidMount () {
    this.getArticles()
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getArticles () {
    this.fetch('/api/articles')
    .then(articles => {
      if (articles.length) {
        this.setState({ articles: articles })
        this.getArticle(articles[0].id)
      } else {
        this.setState({articles: []})
      }
    })
  }

  getArticle (id) {
    this.fetch(`/api/articles/${id}`)
      .then(article => this.setState({ article: article }))
  }

  render() {
    let { articles, article } = this.state
    return (


  }
}
  
  export default App