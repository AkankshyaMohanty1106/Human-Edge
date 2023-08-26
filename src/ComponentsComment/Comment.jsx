import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as DownArrow } from "../Assets/down-arrow.svg";
import { ReactComponent as UpArrow } from "../Assets/up-arrow.svg";
import AddComment from "./AddComment";
import CommentAction from "./CommentAction";
import moment from "moment";

const Comment = ({
  comments,
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
  handelLikeNode,
  isSeessionStorageTrue
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(isSeessionStorageTrue? false : true);
  const inputRef = useRef(null);
  const [comment, setComment] = useState();

  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);
  useEffect(() => {
    const updateCommentTime = () => {
      let timeAgoArray = comments;
      timeAgoArray.items = comments.items.map((comment) => ({
        ...comment,
        timeAgo: moment(comment.createdAt).fromNow(),
      }));
      setComment(timeAgoArray);
      //   console.log("timeAgoArray",timeAgoArray)
    };

    updateCommentTime();
    const interval = setInterval(updateCommentTime, 360000); // Update every minute
    return () => clearInterval(interval);
  }, [comments]);

  //   console.log(comment?.items)
  //   const sortedNestedComments = comment?.items.slice().sort((a, b) => b.like - a.like);
  //   console.log(sortedNestedComments)

  const onAddComment = () => {
    if (editMode) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
      handleInsertNode(comment.id, input);
      setShowInput(false);
      setInput("");
    }

    if (editMode) setEditMode(false);
  };
  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };
  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };
  const onClickLike = () => {
    handelLikeNode(comment.id);
  };
  // console.log(comment)
  return (
    <>
      {comment && (
        <div>
          <div
            className={comment.id === 1 ? "inputContainer" : "commentContainer"}
          >
            {comment.id === 1 ? (
              <>
                <AddComment inputValue={input} setInput={setInput} />
                <div className="reply comment" onClick={onAddComment}>
                COMMENT
              </div>
              </>
            ) : (
              <>
                <span style={{ wordWrap: "break-word" }}>
                  <div style={{ display: "flex" , justifyContent:"space-between" }}>
                    <div style={{ display: "flex" }}>
                      <div className="comment-image-container">
                        <img src="/user-icon.png" />
                      </div>
                      <div style={{ color: "blue" }}>{comment.name}</div>{" "}
                    </div>
                    <span style={{ position: "relative" }}>
                      <div style={{ display: "flex" }}>
                        <span className="watch-image-container">
                          <img src="/stop-watch.png" />
                        </span>
                        <span style={{ fontSize: "11px" }}>
                          {comment.timeAgo}
                          {/* {new Date(comment.createdAt).toLocaleDateString()} */}
                          {/* {console.log(new Date(comment.createdAt).getHours())} */}
                          {/* {moment().startOf('minutes').fromNow()} */}
                          {/* {
                        moment()
                          .startOf(
                            new Date(comment.createdAt).getMinutes()
                          )
                          .fromNow()} */}
                        </span>
                      </div>
                    </span>
                  </div>
                  <div
                    style={{
                      marginLeft: "20px",
                      fontSize: "13px",
                      wordWrap: "break-word",
                    }}
                    contentEditable={editMode}
                    suppressContentEditableWarning={editMode}
                    ref={inputRef}
                  >
                    {comment.text}
                  </div>
                </span>
                <div style={{ display: "flex", marginTop: "5px" }}>
                  {editMode ? (
                    <>
                      <CommentAction
                        className="reply"
                        type="Save"
                        handleClick={onAddComment}
                      />
                      <CommentAction
                        className="reply"
                        type="Cancle"
                        handleClick={() => {
                          if (inputRef.current)
                            inputRef.current.innerText = comment.name;
                          setEditMode(false);
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <div
                        className="like-image-container"
                        onClick={onClickLike}
                      >
                        <img src="/like.png" />
                      </div>
                      {comment.like}
                      <CommentAction
                        className="reply"
                        type={
                          <>
                            {expand ? (
                              <UpArrow width="10px" height="10px" />
                            ) : (
                              <DownArrow width="10px" height="10px" />
                            )}{" "}
                            Reply
                          </>
                        }
                        handleClick={handleNewComment}
                      />
                      <CommentAction
                        className="reply"
                        type="Edit"
                        handleClick={() => {
                          setEditMode(true);
                        }}
                      />
                      <CommentAction
                        className="reply"
                        type="Delete"
                        handleClick={handleDelete}
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
          <div
            style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
          >
            {showInput && (
              <div className="inputContainer">
                <input
                  type="text"
                  className="inputContainer__input"
                  autoFocus
                  onChange={(e) => setInput(e.target.value)}
                />
                <CommentAction
                  className="reply-out"
                  type="Reply"
                  handleClick={onAddComment}
                />
                <CommentAction
                  className="reply-out"
                  type="Cancle"
                  handleClick={() => {
                    setShowInput(false);
                    if (!comment?.items?.length) setExpand(false);
                  }}
                />
              </div>
            )}
            {comment?.items?.map((com) => {
              return (
                <Comment
                  key={com.id}
                  comments={com}
                  handleInsertNode={handleInsertNode}
                  handleEditNode={handleEditNode}
                  handleDeleteNode={handleDeleteNode}
                  handelLikeNode={handelLikeNode}
                  isSeessionStorageTrue={isSeessionStorageTrue}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Comment;
