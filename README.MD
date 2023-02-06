# Primevox Api Client
## Installing Api Client
Yarn
```bash
yarn add primevox-api-client
```

```bash
npm install --save primevox-api-client
```

## Using Api Client
```typescript
import {PrimevoxApi} from "primevox-api-client"

const primevoxApiClient = PrimevoxApi.create({
    auth: "your auth",
    containerID: "your container id",
    tenantID: "your tenant id"
})

const calls = primevoxApiClient.callHistory()

console.log(calls)
```

