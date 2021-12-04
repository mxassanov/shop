export const config = {
  name: 'Categories',
  storeName: 'categories',
  singleName: 'Categories',
  pageName: 'CategoriesPage'
}

export const columns = [
  { name: 'Name category', key: 'title' },
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
