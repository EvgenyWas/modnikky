import { fetchRequest, postRequest } from ".";
import type {
  TCartPost,
  TResponsePostRequests,
  TSubscriptionPost,
} from "./types";

export default {
  getCatalog() {
    return fetchRequest("catalog", {});
  },
  postCart(cart: TCartPost): TResponsePostRequests {
    return postRequest("cart", cart);
  },
  postSubscription(email: TSubscriptionPost): TResponsePostRequests {
    return postRequest("subscription", email);
  },
};
