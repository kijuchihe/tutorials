# Static Websites In Next

In your package.json add an export script

```jsonc
...,
{
  "scripts":{
    // The other scripts
    "export": "next export"
   }
}
```

Thid will create an out folder
