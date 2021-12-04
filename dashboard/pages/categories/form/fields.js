export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Category Name',
      model: 'title',
      placeholder: 'input category name',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'vueMultiSelect',
      model: 'products',
      label: 'Products',
      styleClasses: 'col-md-6',
      selectOptions: {
        multiple: true,
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
      type: 'textArea',
      label: 'Description',
      model: 'description',
      hint: 'max 100 characters',
      placeholder: 'input category description',
      inputType: 'text',
      rows: 3,
      styleClasses: 'col-md-12',
    },
  ]
}

export const defaultForm = {
  title: '',
  description: '',
  products: []
}
