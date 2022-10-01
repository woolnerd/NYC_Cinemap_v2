export { Component };
class Component {
  constructor(elType, content, parentNode) {
    this.elType = elType;
    this.content = content;
    this.parentNode = parentNode;
  }

  create() {
    const newEl = document.createElement(this.elType);
    newEl.append(this.content);
    this.parentNode.appendChild(newEl);
  }
}
