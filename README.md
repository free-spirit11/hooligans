This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

// TODOs:

1. Make hooligans logo on the Navbar fixed, to avoid it changing position when search input opens
2. Change responsiveness and set up small screens view
3. Make menu closing even when clicking on any part of the screen outside of the box
4. Move navbar to layout and change its color depending on the route (if main page - white, the rest - black)
5. Store page with all products, pagination, sorting ...

Next todo:

1. Sorting, pagination+, filter+
2. Search
3. Payments
4. Auth
5. Proper pics display on product page
6. Show navigation on the products page
7. Make lines appear under the menu options
8. Navbar being transparent with white text on hero and changing to color and black text when scrolling down to other components or on other pages (https://www.urby.com/) (with slow transition)
9. Integrate with headles CMS (Content management system)
10. SEO and Metadata
11. nice dynamic changing header (banner) and banners on products page
12. Implement emails ...
13. Video banner
14. Migrate to TypeScript

---

Next step: integrate with medusa
for medusa:
Add:
brand, model, gender …
add option for different images depending on the color (or for each variants. In case of no image – take the main thumbnail and media images by default)

explore possibilities what is better to do – add as options and variants, or customize product entity to contain these additional features

As Brand and Model can not have variants, it should be one of the attributes of the product schema. And it should be available in the Admin UI.

2. Is it possible to change admin dashboard ui, so that it was possible to select multiple products and change some of parameters in bulk (think on it more)
3. Price should be visible and easily accessible in the Admin UI for each variant

> > > Implement Cart and Checkout functionality
> > > started implementing cart with chatgpt, but it doesn't work. Read documentation carefully and try again
> > > Try to understand how cart api works by logging it on all stages.
> > > in case of order, or registration - create cart with ready info and client info on the be.

As an option - can send api calls for updates after executing functions locally. and than in case of errors do some actions.

Impplement variants instead of products for product page and cart and so on when everything else is ready
Add animation for + - buttons in the shopping bag

The problem with the quantity of the items for Balenciaga is because I don't have enough in the inventory. Handle this case: I should block adding items if the quantity of the remaining ones in the inventory is less than client tries to select.
Disable button on the product page and wishlist as well when the quantity added is higher than allowed

!!! Current issue: I still get the error about inventory, although I'm not choosing too many items quantity when I handle multiple items.
GPT recommendation:
Batch Updates: Instead of calling the API multiple times in quick succession, consider batching the updates and sending them in a single API call if your backend supports it.
Check the gpt recommended chaining method - learn and notate

!!! ISSUE: Implemented cart, but I am getting error upon calling useGetCart hook when cartId is not defined yet. Can't find the way around accept for re-writing component to call this hook from a different component which renders only when cartId is defined. Implement this next time and start working on the checkout.

> Implement some indication of having products in the shopping bag (blue dot or number)
> make + - button available only if url endpoint is not /checkout

+++ Payment done

> Authorization - think what functionality do I need there and how it should be connected with the payments and teacking

> User cabinet > history od orders and orders statuses

> Notifications

> Search

> Filtering and sorting

> SEO

> Analytics dashboard on the admin page

IMPLEMENTING NOW: filtering> decide what attributes goes into what places. e.g. color will be in options, as well as size attribute. All the rest should probably be added to the general schema

FINISHED AT: Working on Search functionality:

1. State with the search input +
2. onChange sets the state +
3. find the function for clicking enter, which should send the state as the query parameter, and router.push to the corresponding one. +
4. Create search results page which will use meilisearch and show the search results page (start with the products page and than improve gradually) NEXT > need to implement the meilisearch functionality for search
