# Next

## Routing

Folder structure

- app
  - global.css
  - favicon.ico
  - layout.js
  - page.js
  - loading.js: The special file `loading.js` helps you create meaningful Loading UI with React Suspense. With this convention, you can show an instant loading state from the server while the content of a route segment loads. The new content is automatically swapped in once rendering is complete.
  - error.ts
  - not-found.js: This is a specific name for 404 page
  - users
    - [userId]: For dynamic routes for specific items
    - page.ts
    - params will be passed as a prop. params = {userId: "value_gone_to"}
  - projects/
    - page.ts
  - orders/
    - page.ts
    - users/
      - good // Notice the neste routes
  - [...allRoutes]: This will take all parts of the url. It is called the `Catch-All Routes`
  - [[...allRoutes]]: This will optionally take all parts of the url. It is called the `Optional Catch-All Routes`
    - page.js: params = {allRoutes: ["segment1", "segment2", "segment3"]}
  - (groupRoute): A group route using curly braces
  - (auth)/:
    - login/
      - page.js
    - register/
  - `_folder/`: foler and all children folders are not used for routing

Learning routing

- using Link from next/link
- use useRouter() from next/navigation in client side.
  - `const router = useRouter()`
  - `router.push("")`
  - `const pathname = usePathname()`
  - `const searchParams = useSearchParams()`

```tsx
import { Suspense } from "react";
import { PostFeed, Weather } from "./Components";

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
}
```

```tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function SortProducts() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <>
      <button onClick={() => updateSorting("asc")}>Sort Ascending</button>
      <button onClick={() => updateSorting("desc")}>Sort Descending</button>
    </>
  );
}
```

> error.js

```tsx
"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
```

For server only functions/data

```sh
yarn add server-only
```

```tsx
import "server-only";

export async function getData() {
  const res = await fetch("https://external-service.com/data", {
    headers: {
      authorization: process.env.API_KEY,
    },
  });

  return res.json();
}
```

Now, any Client Component that imports getData() will receive a build-time error explaining that this module can only be used on the server.

The corresponding package client-only can be used to mark modules that contain client-only code – for example, code that accesses the window object.

## redirect

The redirect function allows you to redirect the user to another url. redirect can be used in Server Components, Client Components,Route Handlers, Server Actions.

## Client Components and Server Components

Use client components when you want interactivity: like clicking, state, hooks etc.

### Moving Client Components Down the Tree

To reduce the Client JavaScript bundle size, we recommend moving Client Components down your component tree.

For example, you may have a Layout that has static elements (e.g. logo, links, etc) and an interactive search bar that uses state.

Instead of making the whole layout a Client Component, move the interactive logic to a Client Component (e.g. `<SearchBar />`) and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client.

## metadata

### Static Metadata

To define static metadata, export a Metadata object from a layout.js or static page.js file.

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

export default function Page() {}
```

### Dynamic Metadata

You can use generateMetadata function to fetch metadata that requires dynamic values.

```tsx
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function Page({ params, searchParams }: Props) {}
```

Add opengraph and twitter images

- opengraph-image.png
- twitter-image.png
- opengraph-image.alt.txt
- twitter-image.alt.txt

You can also generate the image

```tsx
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const interSemiBold = fetch(
    new URL("./Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        About Acme
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
```

## Images

using the image tag

If you are using an external images, you have to add the image domain to the server

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
};
```

## Fonts

```tsx
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const Home = () => {
  return (
    <section>
      <h1>Google Font</h1>
      <h2 className={roboto.className}>Hello this is roboto font</h2>
    </section>
  );
};
```

## For API

You have to create an `api` folder.

create your folder and your route.js. Note to not use
`app/api/users/route.js`

```ts
import { NextResponse } from "next/server";

// Note that the function name has to be the name of the method
export function GET() {
  return NextResponse.json({ result: "" });
  // if you want a custom status code
  // return NextResponse.json({ result: "" }, {status: 201});
}
```

When a get request is made to `/api/users`, the get function will be ran

For dynamic routes

`/api/users/[id]/route.js`

```ts
export function GET(request, response) {
  console.log(response.params.id);

  return NextResponse.json({ result: "Hello" });
}
```

## Middleware

This is a function that will be ran before a request is successfully submitted to the server.

This can be written in the app, api, root folder of the project

```js
import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname != "/login") {
    return NextResonse.redirect(new URL("/login", request.url));
  }
  return NextResponse.json({ message: "Successfully ran" });
}

export const config = {
  matcher: ["userslist/:path*"], // This matcher property tells which route to apply this middleware
};
```

For Posting

```ts
import {} from "next/server";

export async function POST(req, res) {
  let data = await req.json(); // usually request.body in express
  console.log(data);

  return NextResponse.json();
}
```

## NextAuth

```sh
yarn add next-auth
```
