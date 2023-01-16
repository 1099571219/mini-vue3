const render= (vNode:vNode,root:HTMLElement):void=>{
    if(!root){root = document.body}
    const el = document.createElement(vNode.tag)
    if(vNode.children instanceof Array && vNode.children.length!==0){
        vNode.children.forEach(item=>render(item,el))
    }
    el.innerText = vNode.children
    root.appendChild(el)
}

interface vNode {
    tag:string,
    children:any,
}

// const vNode = {
//     tag:'div',
//     children:[
//         {
//             tag:'span',
//             children:[
//                 {
//                     tag:'span',
//                     children:'运行时测试'
//                 }
//             ]
//         }
//     ]
// }




export default render;