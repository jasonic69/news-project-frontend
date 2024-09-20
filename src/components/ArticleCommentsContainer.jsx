import { useParams } from "react-router-dom";
import { getComments } from "../../services/api";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import ArticleCommentsCard from "./ArticleCommentsCard";
import "./ArticleCommentsContainer.css";
import { CommentForm } from "./CommentForm";

const ArticleComments = ({artical_id, setArticle}) => {
    const { id } = useParams();

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getComments(id).then((data) => {
        setComments(data)
        setIsLoading(false);
        })
        .catch(() => {
            setIsError(true);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
      return (
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
    </div>
    )
  }

    if (isError) {
      return (
          <>
          <h1>404 Error</h1>
          </>
      )
    }
 
    if (comments.length === 0) return (
      <p>No Comments</p>
    )
    
    return (
        <div className="article-comments-container">
          <CommentForm  article_id={id} comments={comments} setComments={setComments} setArticle={setArticle}/>
          {comments.map((comment,key) => {
            return (
            <ArticleCommentsCard key={"test"+comment.comment_id+key} comment={comment}/>
            );
          })}
        </div>
      );

}

export default ArticleComments