import "./ArticleCard.css"

const ArticleCard = ({article}) => {
    return (
        <article className="article-card">
            <div>
                <p className="article-author">{article.author}</p>
                <h2>{article.title}</h2>
                <img src={article.article_img_url}/>
            </div>
        </article>
    )
}

export default ArticleCard