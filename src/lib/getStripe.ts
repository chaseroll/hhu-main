import { Stripe, loadStripe } from '@stripe/stripe-js';

const STRIPE_PUBLISHABLE_KEY = 'pk_test_51PUB3wAccrqcXLxOozk1Ip6qp0qXdfEi1MnTqPVw1CePRpGqDectQ1saVZgBHcGa05jgktdBeDCw3zWbYPBbcRUf00nmAwb1JW';

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default getStripe;

export const PRICE_ID = 'price_1PUB4RAccrqcXLxOKOWd0RYp';
