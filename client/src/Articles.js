import React from 'react';

const Articles = (props) => (
  <div className="ArticlesComponent">
    <h3> article listings </h3>
    {props.articles.map(article =>
      <div key={article.id} className="ArticleCard">
        <p>{article.title}</p>
      </div>
    )}
  </div>
)

export default Articles