import { useEffect, useState } from "react";
import { getArticle } from "../../services/api";
import { useParams, Navigate } from "react-router-dom";
import "./SingleArticle.css";
import { BsChat } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";

const SingleArticle = () => {
    const { id } = useParams();

    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getArticle(id).then((data) => {
        setArticle(data)
        setIsLoading(false);
        })
        .catch(() => {
            setIsError(true);
            setIsLoading(false);
        });
}, []);

    if (isError) {
    return <Navigate to="/404" />;
  }

  if (isLoading) return <div>...Loading</div>;
    return (
            <article className="article-card">
            <div>
                <div className="article-header">
                    <span className="article-author">{article.author}</span>
                    <span>{article.created_at}</span>
                </div>
                <h2>{article.title}</h2>
                    <img src={article.article_img_url}/>
                <p>{article.body}</p>
                <div className="article-stats">

                    <span><BsArrowUpCircle /><span className='article-votes'>{article.votes}</span><BsArrowDownCircle /></span>
                    <span><BsChat /><span className='article-comments-count'>{article.comment_count}</span></span>
                    <span><span className='article-topic'>{article.topic}</span></span>

                </div>
            </div>
            </article>
    )
}

export default SingleArticle