---
to: src/components/<%= level %>/<%= name %>/index.tsx
---

/**
  * TODO: Fix props
*/
type Props = {
  propsName: string;
  <% if(hasChildren){ -%>
  children: React.ReactNode;
  <% } -%>
}

export const <%= name %>:React.FC<Props> = ({ propsName <% if(hasChildren){ -%>, children<% } -%> }) => {
  return (
    <>
      <% if(hasChildren){ -%>
      {children}
      <% } -%>
    </>
  )
}