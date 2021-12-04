import store from "~/store/genericStore";

export default {
  ...store({
    name: 'categories',
    url: 'categories',
  })
}
