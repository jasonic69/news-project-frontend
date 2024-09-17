import "./ArticleCard.css"
import { Link } from "react-router-dom"

const ArticleCard = ({article}) => {
    return (
        <article className="article-card">
            <div>
                <p className="article-author">{article.author}</p>
                <h2>{article.title}</h2>
                <Link to={`/article/${article.article_id}`}>
                    <img src={article.article_img_url}/>
                </Link>
            </div>
        </article>
    )
}

export default ArticleCard