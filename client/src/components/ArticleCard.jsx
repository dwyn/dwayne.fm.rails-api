import React from 'react';

const ArticleCard = (props) => (
  <div className="ArticlesCard">
    <h6>I am the child component</h6>
    {props.article.title}
    { props.article.description }
    {props.article.body}
  </div>

)

export default ArticleCard