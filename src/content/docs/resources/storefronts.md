---
title: Storefronts
description: List and fetch storefronts
---

Access via `musicKit.storefronts`.

## `getAll(props?, raw?)`

List all available storefronts.

```ts
const storefronts = await musicKit.storefronts.getAll()
```

<details>
<summary>Response</summary>

```json
{
  "status": 200,
  "data": [
    {
      "id": "us",
      "explicitContentPolicy": "allowed",
      "name": "United States",
      "defaultLanguageTag": "en-US",
      "supportedLanguageTags": ["en-US", "es-MX"]
    },
    {
      "id": "gb",
      "explicitContentPolicy": "allowed",
      "name": "United Kingdom",
      "defaultLanguageTag": "en-GB",
      "supportedLanguageTags": ["en-GB"]
    }
  ],
  "error": null
}
```

</details>

### Raw

```ts
const raw = await musicKit.storefronts.getAll({}, true)
```

<details>
<summary>Raw response</summary>

```json
{
  "status": 200,
  "data": [
    {
      "id": "us",
      "type": "storefronts",
      "href": "/v1/storefronts/us",
      "attributes": {
        "explicitContentPolicy": "allowed",
        "name": "United States",
        "defaultLanguageTag": "en-US",
        "supportedLanguageTags": ["en-US", "es-MX"]
      }
    }
  ],
  "error": null
}
```

</details>

### Filtering

Pass optional props to paginate or configure the response:

```ts
const result = await musicKit.storefronts.getAll({ limit: 5, offset: 0 })
```

## `get(storefront, props?, raw?)`

Fetch a single storefront by its identifier (e.g. `"us"`, `"gb"`, `"jp"`).

```ts
const storefront = await musicKit.storefronts.get("us")
```

<details>
<summary>Response</summary>

```json
{
  "status": 200,
  "data": [
    {
      "id": "us",
      "explicitContentPolicy": "allowed",
      "name": "United States",
      "defaultLanguageTag": "en-US",
      "supportedLanguageTags": ["en-US", "es-MX"]
    }
  ],
  "error": null
}
```

</details>

### Raw

```ts
const raw = await musicKit.storefronts.get("us", {}, true)
```

Returns the same shape as the raw `getAll()` response.
