import { fetchRequest, postRequest } from '.'
import type { TCartPost, TSubscriptionPost } from './types';

export default {
    getCatalog() {
        return fetchRequest('catalog', {});
    },
    postCart(cart: TCartPost) {
        return postRequest('cart', cart)
    },
    postSubscription(email: TSubscriptionPost) {
        return fetchRequest('subscription', email)
    },
}
