import { useState } from "react"
import { postArticleComment } from "../../services/api"
import "./CommentForm.css"
import TextareaAutosize from 'react-textarea-autosize';
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const CommentForm = ({article_id, comments, setComments, setArticle})=>{

    const {loggedInUser} = useContext(UserContext)

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [commentBody, setCommentBody] = useState("")
    const [commentOldBody, setCommentOldBody] = useState("")
    const [submitHidden, setSubmitHidden] = useState(true)
    const [submitError, setSubmitError] = useState(false)
    const [imgClassName, setImgClassName] = useState()
    const [imgContClassName, setImgContClassName] = useState()

    const handleInputChange = (e) => {
        if(submitHidden || e.target.value.length >= 1){
            setSubmitHidden(false)
        } else {
            setSubmitHidden(true)
        }
        setCommentBody(e.target.value)
        setCommentOldBody(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault(e)
        setSubmitError(false)
        setCommentBody("")
        setImgContClassName("")
        setIsSubmitting(false)
        setSubmitHidden(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        const newComment = {
            author: "tickle122",
            body: commentBody
        }
        setIsSubmitting(true)
        setImgClassName("rotate-img")
        setArticle(article => ({
            ...article,
            comment_count: article.comment_count + 1
        })) 
        setCommentBody("")
        postArticleComment(article_id, newComment).then(()=>{
            const adjustedComment = { votes: 0, ...newComment }
            setComments([adjustedComment, ...comments])
            setIsSubmitting(false)
            setImgClassName("")
            setImgContClassName("")
            setSubmitHidden(true)
        }).catch(()=>{
            setArticle(article => ({
                ...article,
                comment_count: article.comment_count - 1
            })) 
            setCommentBody(commentOldBody)
            setSubmitError(true)
            setImgClassName("")
            setImgContClassName("center-img")  
            setIsSubmitting(false)
       })
    }

    return (
          <div id="comment-form-container" className={imgContClassName}>
            <img className={imgClassName} src={loggedInUser.avatar_url}/>
            <form id="comment-form"  className={imgContClassName} onSubmit={(e) => handleSubmit(e)}>
            {submitError ? (
                <p>Sorry there was an issue!</p>
            ) : (
                <TextareaAutosize
                    id="comment-box"
                    onChange={(e) => handleInputChange(e)}
                    value={commentBody}
                    placeholder="Add a comment"
                    minRows={1}
                    maxRows={6}
                    maxLength="160"
                    aria-placeholder="Leave a comment"
                />
            )}
            {submitError ? (
                <>
                <button hidden={submitHidden} disabled={isSubmitting} type="submit">Retry</button>
                <button hidden={submitHidden} disabled={isSubmitting} onClick={(e) => handleClick(e)} type="submit">Cancel</button>
                </>
            ) : (
                <button hidden={submitHidden} disabled={isSubmitting} type="submit">Submit</button>
            )}
            </form>
        </div>
    )
}