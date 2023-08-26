import React, { useState ,useEffect} from "react";
import dataComment from "../dataComment";
import "../style.css";
import Comment from "./Comment";
import CustomHookNode from "../Hooks/CustomHookNode";
import moment from "moment";

const Comments = () => {
  const [commentsData, setCommentsData] = useState(dataComment);
  const { insertNode, editNode, deleteNode ,LikeNode} = CustomHookNode();
  const [data,setData] = useState();
  const [sessionStorages , setSessionStorages] = useState(false);

  // useEffect(()=>{
  //   sessionStorage.setItem('myData', JSON.stringify(data));
  // },[data])
  // useEffect(()=>{
  //   console.log("abc")
  //   console.log(commentsData)
  //   setData(commentsData)
    
  // },[commentsData])
  // useEffect(()=>{
  //   const storedData = JSON.parse(sessionStorage.getItem('myData'));
  //   // console.log(storedData)
  //   if(storedData){
  //     setSessionStorages(true)
  //     setData({
  //       id : 1,
  //       items : storedData})
  //   }else{
  //     setSessionStorages(false)
  //   }
  // },[])
  
  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
    // sessionStorage.setItem('myData', JSON.stringify(finalStructure.items));
    
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
    // sessionStorage.setItem('myData', JSON.stringify(finalStructure.items));
    
  };
  const handelLikeNode = (folderId) => {
    const finalStructure = LikeNode(commentsData,folderId);
    setCommentsData(finalStructure);
    // sessionStorage.setItem('myData', JSON.stringify(finalStructure.items));
    
  }
  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
    // sessionStorage.setItem('myData', JSON.stringify(temp.items));
    
  };
  return (
    <div>
      {data ? data && (
        <Comment
        comments={data}
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        handelLikeNode={handelLikeNode}
        isSeessionStorageTrue = {sessionStorages}
      />
      ) : (
        <Comment
        comments={commentsData}
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        handelLikeNode={handelLikeNode}
        isSeessionStorageTrue={sessionStorages}
        />
      )}
      
    </div>
  );
};

export default Comments;
