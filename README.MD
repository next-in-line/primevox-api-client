# Primevox Api Client
## Installing Api Client
Yarn
```bash
yarn add primevox-api-client
```

Npm
```bash
npm install --save primevox-api-client
```

## Using Api Client
#### Initializing Client
```typescript
import {PrimevoxApi} from "primevox-api-client"

const primevoxApiClient = PrimevoxApi.create({
    auth: "your auth",
    containerID: "your container id",
    tenantID: "your tenant id"
})
```

#### Getting Call history
```typescript
const yourAsyncFunction = async ()=>{
    const calls = await primevoxApiClient.callHistory()
    console.log(calls)
}
```

