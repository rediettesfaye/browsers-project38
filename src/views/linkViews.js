export const createLinks = (links) => {
    const element = document.createElement('ul');
    links.forEach(link => {
      element.appendChild(createLink(link));
    });
    return element;
  };
  
  export const createLink = (item) => {
    const element = document.createElement('li');
    element.classList.add('link'); 
    element.innerHTML = String.raw`
        <a href='${item.href}' target='_blank'>${item.text}</a>
      `;
    return element;
  };
