## ScrollViews

Keep in mind that ScrollViews must have a bounded height in order to work. In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height.

When you set flex: 1 on a View component in React Native, it primarily affects the vertical space because the default main axis of a View container is vertical.

## flex

The reason you don't need to define display: flex explicitly is that the View component in React Native is designed to work with flexbox layout out of the box. When you use a View component, it's assumed to be a flex container, and you can use flexbox properties like flex, flexDirection, alignItems, and justifyContent to control the layout of its children.
justify-content aligns elements along the main axis (horizontal or vertical, depending on the flex-direction property)
