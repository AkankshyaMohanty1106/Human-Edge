import React from "react";

const AddComment = ({inputValue,setInput}) => {
  return (
    <input
      type="text"
      className="inputContainer__input first_input"
      autoFocus
      maxLength={200}
      value={inputValue}
      onChange={(e) => setInput(e.target.value)}
      placeholder="type..."
    />
  );
};

export default AddComment;
