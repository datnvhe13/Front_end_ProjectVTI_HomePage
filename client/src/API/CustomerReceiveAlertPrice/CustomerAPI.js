import { api } from "./api"


// create new customer API
export let add_NewCustomerAPI = (customer_New) => {
    return api("POST", "ListCustomerType2", customer_New);
}
