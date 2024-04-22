function customRender(Element,container)
{  /* version 1
    const domElement=document.createElement(Element.typeof)
    domElement.innerHTML=Element.children
    domElement.setAttribute('href',Element.props.href)
    domElement.setAttribute('target',Element.props.target)

    container.appendChild(domElement)
    */

    const domElement=document.createElement(Element.typeof)
    domElement.innerHTML=Element.children

    for (const key in Element.props) {
        
        if(key==='children') continue

        domElement.setAttribute(key,Element.props[key])
    }

    container.appendChild(domElement)
} 



const reactElement={
    typeof:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click here to visit google'
}


const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)