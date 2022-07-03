---
inject: true
append: true
to: src/components/<%= level %>/index.ts
---
export * from "./<%= name %>"
