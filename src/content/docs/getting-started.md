---
title: Getting Started
description: Prerequisites, installation, and authentication
---

## Prerequisites

You need a paid [Apple Developer Program](https://developer.apple.com/programs/) membership ($99/yr).

## Generate a MusicKit Key

1. Go to the [Apple Developer Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources/certificates/list) page.
2. Click **Keys** → **Create a new key**.
3. Enable **MusicKit** under Services.
4. Download the `.p8` file. You can only download it once, so keep it safe.
5. Note the **Key ID** and your **Team ID** (found in your account's membership details).

## Installation

```bash
npm install node-musickit-api
# or
yarn add node-musickit-api
# or
bun add node-musickit-api
```

## Key Security

Never hardcode your credentials. Use environment variables or a gitignored file:

```ts
// ✅ Recommended: environment variables
import { MusicKit } from "node-musickit-api"

const musicKit = new MusicKit({
  key: {
    id: process.env.MUSICKIT_KEY_ID!,
    teamId: process.env.MUSICKIT_TEAM_ID!,
    p8: process.env.MUSICKIT_P8!
  }
})
```

```ts
// ✅ Alternative: read from a gitignored file
import { MusicKit } from "node-musickit-api"

const p8 = await Bun.file("./AuthKey_XXXXXXXX.p8").text()

const musicKit = new MusicKit({
  key: {
    id: "YOUR_KEY_ID",
    teamId: "YOUR_TEAM_ID",
    p8
  }
})
```

Add the key file path to `.gitignore`:

```
# node-musickit-api
AuthKey_*.p8
```

## Authenticate

```ts
await musicKit.auth()
```

Call `auth()` before making any requests. It generates a JWT signed with your private key that expires every 180 days. Call `auth()` again to refresh it.
