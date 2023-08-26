const CustomHookNode = () => {
    let nameList = [
        'Time', 'Past', 'Future', 'Dev','Paradox'
      ];
  const insertNode = function (tree, commentId, item) {
    if (tree.id === commentId) {
      let newItem = {
        id: new Date().getTime(),
        name: nameList[Math.floor(Math.random() * nameList.length)]+ "@"+ Math.floor(Math.random() * 90 + 10),
        text: item,
        like: 0,
        createdAt: new Date().toISOString(),
        timeAgo:"a few seconds ago",
        items: [],
      };
      let tempTree = tree;
      tempTree.items = [newItem,...tempTree.items];
      // console.log(tempTree)
      sessionStorage.setItem('myData', JSON.stringify(tempTree));
      return tempTree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, commentId, item);
    });
    
    let updatedtree = {items: latestNode , ...tree}
   
    sessionStorage.setItem('myData', JSON.stringify(updatedtree));
    return updatedtree;
  };

  const LikeNode = (tree,commentId) =>{
    
    
    if (tree.id === commentId) {
        let tempTree = tree;
        tempTree.like = Number(tempTree.like)+1;
        return tempTree;
      }
  
      tree.items.map((ob) => {
        return LikeNode(ob, commentId);
      });
      let sortTempTree = tree;
    //   if(sortTempTree.id === 1){
      
      sortTempTree.items = sortTempTree.items.slice().sort((a, b) => b.like - a.like);
    //   console.log(sortTempTree)
    //   }
    sessionStorage.setItem('myData', JSON.stringify(sortTempTree));
    
    return { ...sortTempTree };
  }
  const editNode = (tree, commentId, value) => {
    
    if (tree.id === commentId) {
      tree.text = value;
      return tree;
    }

    tree.items.map((ob) => {
      return editNode(ob, commentId, value);
    });
   
    sessionStorage.setItem('myData', JSON.stringify(tree));
    return { ...tree };
  };

  const deleteNode = (tree, id) => {
    for (let i = 0; i < tree.items.length; i++) {
      const currentItem = tree.items[i];
      if (currentItem.id === id) {
        tree.items.splice(i, 1);
        
        sessionStorage.setItem('myData', JSON.stringify(tree));
        return tree;
      } else {
        deleteNode(currentItem, id);
      }
    }
    
    sessionStorage.setItem('myData', JSON.stringify(tree));
    return tree;
  };

  return { insertNode, editNode, deleteNode ,LikeNode};
};

export default CustomHookNode;
