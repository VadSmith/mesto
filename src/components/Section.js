export default class Section {
  constructor({ items, renderer }, sectionContainer) {
    this._sectionContainer = sectionContainer;
    this._items = items;
    this._renderer = renderer;
  }

  _clear() {
    this._sectionContainer.innerHTML = '';
  }

  renderItems() {
    this._clear();
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._sectionContainer.append(element);
  }
}
