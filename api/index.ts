import axios from 'axios'

export const ForelleApi = {
    module_1: {
        request_1: async () => {
            const { data } = await axios({
                method: 'GET',
                url: 'api_url'
            })

            return data
        }
    }
}