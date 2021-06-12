const body = document.querySelector('body');

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.fontSize = fontSize;
    this.height = height;
    this.width = width;
    this.bg = bg;
}

DomElement.prototype.newElement = function () {
    let element;
    if (this.selector[0] === '.') {
        element = document.createElement('div');
        element.className = this.selector.slice(0);
        element.textContent = 'Bнутрь созданного блока записывать любой текст. Метод записи может быть любым.';
    }

    if (this.selector[0] === '#') {
        element = document.createElement('p');
        element.id = this.selector.slice(0); 
        element.textContent = 'Bнутрь созданного блока записывать любой текст. Метод записи может быть любым.';   
    }

    element.style.cssText = `height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;`
    return element
}

let elemNumberOne = new DomElement('.container', 450, 450, 'red', 30);
let elemNumberTwo = new DomElement('#container', 550, 550, 'aqua', 40);

body.append(elemNumberOne.newElement());
body.append(elemNumberTwo.newElement());