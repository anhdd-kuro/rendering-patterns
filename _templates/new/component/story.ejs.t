---
to: src/components/<%= level %>/<%= name %>/__stories__/index.mdx
---

import { <%= name %> } from '..';
import { Meta, Props, Story, Canvas } from '@storybook/addon-docs/blocks';

<Meta title="<%= titleLevel %>/<%= name %>" component={<%= name %>} />

# <%= name %>

<%= name %>コンポーネント

# Template
<% if (!hasChildren) { -%>
export const Template = (args) => <<%= name %>> {...args} />;
<% } else { %>
export const Template = (args) => <<%= name %>> {...args} > Slot </<%= name %>>;
<% } %>

## Example

<!-- TODO: Fix args -->
<Canvas>
  <Story
    name="<%= name %>"
    args={{}}>
  >
    {Template.bind({})}
  </Story>
</Canvas>

<Props story="<%= name %>" />
