import React, { Component } from 'react'
// import 'App.css'
import Articles from '../Articles.js'
// import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
       articles: []
     } 
  }

  componentDidMount() {
    this.getArticles()
  }
  
  getArticles () {
    fetch('/api/articles')
      .then(response => response.json())
      .then(articles => {
        if (articles.length) {
          this.setState({ articles: articles })
          // this.getArticle(articles[0].id)
        } else {
          this.setState({articles: []})
        }
      })
      // .catch(error => console.log(error))
  }

//   getArticle (id) {
//     this.fetch(`/api/articles/${id}`)
//       .then(article => this.setState({ article: article }))
//   }


  render() {
    return (
      <div className="App">
        <Articles articles={this.state.articles}/>
      </div>
    )
  }
}
  
export default App