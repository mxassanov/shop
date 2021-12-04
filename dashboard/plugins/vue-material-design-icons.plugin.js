import Vue from 'vue';
import 'vue-material-design-icons/styles.css';
import ViewDashOut from 'vue-material-design-icons/ViewDashboardOutline.vue';
import TableLargePlus from 'vue-material-design-icons/TableLargePlus.vue';
import DeleteSweep from 'vue-material-design-icons/TrashCanOutline.vue';

export default function materialIcons() {
  Vue.component('ViewDashOut', ViewDashOut);
  Vue.component('TableLargePlus', TableLargePlus);
  Vue.component('DeleteSweep', DeleteSweep);
}