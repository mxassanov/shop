import store from "~/store/genericStore";

export default {
  ...store({
    name: 'products',
    url: 'products',
  })
}
