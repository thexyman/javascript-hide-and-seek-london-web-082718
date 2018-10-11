
function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild() {
    let node = document.getElementById('grand-node');
    let nextNode = node.children[0];

    // nextNode basically looks for a child node, if there is a child node then the
    // iterations will continue, otherwise it will stop, at which point node is returned 
    while (nextNode) {
      node = nextNode;
      nextNode = node.children[0];
    }
  
    return node;
  }

function increaseRankBy(n) {
    // Get the ranked list 
    const rankedLists = document.querySelectorAll('.ranked-list');
  
    for (let i = 0, l = rankedLists.length; i < l; i++) {
      let children = rankedLists[i].children;
  
      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n;
      }
    }
    
        
}

