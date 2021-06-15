interface ShoppingCart<ItemId, Item> {
  items: Array<Item>
  addItem(this: ShoppingCart<ItemId, Item>, item: Item): void
  getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId): Item | undefined
}

interface Item {
  id: number
  price: number
}

const cart: ShoppingCart<number, Item> = {
  items: [],

  addItem(item) {
    this.items.push(item)
  },

  getItemById(id) {
    return this.items.find(item => item.id === id)
  }
}