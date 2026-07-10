---
title: Getting Started
description: Prerequisites and installation for node-musickit-api
---

## Prerequisites

You need a paid [Apple Developer Program](https://developer.apple.com/programs/) membership ($99/yr).

## Generate a MusicKit Key

1. Go to the [Apple Developer Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources/certificates/list) page.
2. Click **Keys** → **Create a new key**.
3. Enable **MusicKit** under Services.
4. Download the `.p8` file. You can only download it once, so keep it safe.
5. Note the **Key ID** and your **Team ID** (found in the membership details page).

## Installation

```bash
npm install node-musickit-api
# or
yarn add node-musickit-api
# or
bun add node-musickit-api
```

## Initialize the Client

```ts
import { MusicKit } from "node-musickit-api"

const musicKit = new MusicKit({
  key: {
    id: "YOUR_KEY_ID",
    teamId: "YOUR_TEAM_ID",
    p8: `-----BEGIN PRIVATE KEY-----
YOUR_P8_KEY_CONTENT
-----END PRIVATE KEY-----`
  }
})
```

## Authenticate

```ts
await musicKit.auth()
```

Call `auth()` before making any requests. It generates a JWT that expires every 180 days. You can call `auth()` again to refresh it.
