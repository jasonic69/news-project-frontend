import "./ArticleCommentsCard.css";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { getUser } from "../../services/api";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";


const ArticleCommentsCard = ({comment}) =>{

  const {loggedInUser, setLoggedInUser} = useContext(UserContext)

    const [comment_user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getUser(comment.author).then((data) => {
        setUser(data)
        setIsLoading(false);
        })
        .catch(() => {
            setIsError(true);
            setIsLoading(false);
        });
    }, []);

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

    if (isError) {
      return (
          <>
          <h1>404 Error</h1>
          </>
      )
    }

  

    return (
    <div className="comments-card">
      <div className="comments-header">
        <img className="comments-profile-img" src={comment_user.avatar_url}/>
        <span className="comment-author">{comment.author}</span><span className="comment-created-at">{comment.created_at}</span>
      </div>
      <p className="comment-body">{comment.body}</p>
      <div className="comment-stats">
        <BsArrowUpCircle />
        <span>{comment.votes}</span>
        <BsArrowDownCircle/>
      </div>
    </div>
    );
}

export default ArticleCommentsCard