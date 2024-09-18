import { useEffect, useState } from "react";
import { getArticle } from "../../services/api";
import { useParams, Navigate } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { TailSpin } from "react-loader-spinner";

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

    if (isLoading) return 
    <div>
        <TailSpin
        visible={true}
        height="80"
        width="100%"
        color="rgb(235, 229, 229)"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>;

    return (
        <article className="article-card">
            <div className="article-header">
                <span className="article-author">{article.author}</span>
                <span>{article.created_at}</span>
            </div>
            <h2>{article.title}</h2>
                <img src={article.article_img_url}/>
            <p>{article.body}</p>
            <div className="article-stats">
                <span><BsArrowUpCircle /><span>{article.votes}</span><BsArrowDownCircle /></span>
                <span><BsChat /><span>{article.comment_count}</span></span>
                <span><span className='article-topic' >{article.topic}</span></span>
            </div>
        </article>
    )
}

export default SingleArticle