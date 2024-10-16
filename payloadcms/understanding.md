# Understanding payload and how to use

The page collection is used to create custom pages to your website. Just like a website builder

Now to create a collection, go to the payload folder inside the src directory `/src/payload/collections`

Now create a new directory of the collection you want to create

`/src/payload/collections/Users`

To make it a collection,

```ts
export const CollectionName: CollectionConfig {
    slug: '/',
    access: {
        create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    },
    // Tells whether or not to collect the loging options

      auth: true,
    admin: {
        /**
        * These are the fields that you want to show by default in the admin panel
        */
        defaultColumns: ['title', 'slug', 'updatedAt'],
        livePreview: {
            url: ({ data }) => {
                const path = generatePreviewPath({
                    path: `/posts/${typeof data?.slug === 'string' ? data.slug : ''}`,
                })
                return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
            },
        },
        preview: (doc) =>
            generatePreviewPath({ path: `/posts/${typeof doc?.slug === 'string' ? doc.slug : ''}` }),
            /**
             * This is the
            */
        useAsTitle: 'title',
    },
    fields: [],
    hooks: [],
    versions: ''
}
```

Then in the payload.config.ts, you will see a collections field array, import this new collection and add it to the array
