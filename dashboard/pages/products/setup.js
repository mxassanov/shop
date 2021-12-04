export const config = {
  name: 'Products',
  storeName: 'products',
  singleName: 'Products',
  pageName: 'ProductsPage'
}

export const columns = [
  { name: 'Name product', key: 'title' },
  { name: 'Amount', key: 'amount' },
  { name: 'Price', key: 'price' },
]

export const actions = [
  { 
    className: 'py-2 px-3 rounded-lg bg-yellow-400 text-white',
    label: 'Edit',
    emit: 'onEdit',
    actionKey: '_id',
  },
  {
    className: 'py-2 px-3 rounded-lg bg-red-400 text-white',
    label: ``,
    emit: 'onDelete',
    actionKey: '_id',
    icon: 'delete-sweep',
  },
]
