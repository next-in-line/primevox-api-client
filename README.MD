# Primevox Api

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

