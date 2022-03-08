import React, { useState, useRef, useEffects, useEffect } from "react";
import ShoppingList from '../components/ShoppingList'
import { v4 as uuidv4 } from 'uuid'
import '../styles/shopping.css'

const LOCAL_STORAGE_KEY = 'shoppingApp.items'

function Shopping() {

  const [items, setItems] = useState([])
  const itemNameRef = useRef()

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedItems) {
      setItems(storedItems)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function toggleItem(id) {
    const newItems = [...items]
    const item = newItems.find(item => item.id === id)
    item.complete = !item.complete
    setItems(newItems)
  }

  function handleClearItems() {
    const newItems = items.filter(item => !item.complete)
    setItems(newItems)
  }

  function handleAddItem() {
    const name = itemNameRef.current.value
    if (name === '') {
      return
    }
    setItems(prevItems => {
      return [...prevItems, { id: uuidv4(), name: name, complete: false }]
    })
    itemNameRef.current.value = null
  }

  return (
    <div class="wrapper">
      <h1>Shopping List</h1>
      <input class="form-control new-item" type="text" ref={itemNameRef} />
      <button class="btn btn-dark" onClick={handleAddItem}>Add Item</button>
      <button class="btn btn-dark" onClick={handleClearItems}>Clear Checked Items</button>
      <p>{items.filter(item => !item.complete).length} items missing from cart</p>
      <h2>Items on shopping list</h2>
      <div className="shopping-list">
        <ShoppingList items={items} toggleItem={toggleItem} />
      </div>
    </div>
  )
}

export default Shopping;