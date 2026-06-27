# Configuration

The CUBE requires one server-side environment variable to reach Cassandra:

```text
CASSANDRA_CONTROL_PLANE_URL=https://your-control-plane.example
```

The route handler appends `/api/cassandra/process` and forwards only the declared intent, optional payload, optional tier request, and explicit BURST authorization.

Do not commit a control-plane credential or a provider secret into this repository. Provider credentials belong to the server that owns the relevant adapter.

## Runtime behavior

- Without the URL, `/api/cassandra` returns `503` and explains that the Control Plane is not configured.
- When the remote service is unavailable, the proxy returns `502`.
- The CUBE remains a presentation layer; upstream responses are not treated as automatic authorization or proof of truth.
