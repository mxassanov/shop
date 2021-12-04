export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Game Name',
      model: 'title',
      placeholder: 'input game name',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'vueMultiSelect',
      model: 'category',
      label: 'Category',
      styleClasses: 'col-md-6',
      selectOptions: {
        multiple: false,
        key: 'title',
        id: '_id',
        trackBy: 'title',
        label: 'title',
        searchable: true,
        hideSelected: true,
      },
      values: []
    },
    {
      type: 'input',
      label: 'Price',
      model: 'price',
      placeholder: 'input game price',
      inputType: 'text',
      styleClasses: [ 'col-md-4' ],
    },
    {
      type: 'textArea',
      label: 'Description',
      model: 'description',
      hint: 'max 500 characters',
      placeholder: 'game description',
      inputType: 'text',
      rows: 2,
      styleClasses: 'col-md-12',
    },
    {
      type: 'input',
      label: 'Amount',
      model: 'amount',
      placeholder: 'input amount available products',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'input',
      label: 'Image',
      model: 'imageUrl',
      placeholder: 'input link to image',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
  ]
}

export const defaultForm = {
  title: '',
  description: '',
  price: 0,
  amount: 0,
  imageUrl: '',
  category: '',
}
