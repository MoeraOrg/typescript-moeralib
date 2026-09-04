# TypeScript

1. Do not use `enum` or `namespace`. Represent string-valued enumerations as
   string literal union types, adding new values with `|`. For example:
   `type NodeSourceUriService = "telegram" | "rss" | "livejournal"`.
