import { setClient } from '~/services/axiosClient.service'

export default ({ app }) => setClient(app.$axios)
