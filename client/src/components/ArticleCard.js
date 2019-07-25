import React from 'react';

const ArticleCard = (props) => (
  <div className="ArticlesCard">
    <h5>Individual Article, or whatever</h5>
    {props.article.title}
  </div>
  
)

export default ArticleCard