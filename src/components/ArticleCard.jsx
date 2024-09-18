import "./ArticleCard.css"
import { Link } from "react-router-dom"
import { BsChat } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";

const ArticleCard = ({article}) => {
    return (
        <article className="article-card">   
            <div className="article-header">
                    <span className="article-author">{article.author}</span>
                    <span>{article.created_at}</span>
                </div>
                <h2>{article.title}</h2>
                <Link to={`/article/${article.article_id}`}>
                    <img src={article.article_img_url}/>
                </Link>
                <div className="article-stats">
                    <span><BsArrowUpCircle /><span className='article-votes'>{article.votes}</span><BsArrowDownCircle /></span>
                    <span><BsChat /><span>{article.comment_count}</span></span>
                    <span><span className='article-topic'>{article.topic}</span></span>
                </div>
        </article>
    )
}

export default ArticleCard