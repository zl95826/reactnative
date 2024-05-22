## ScrollViews

Keep in mind that ScrollViews must have a bounded height in order to work. In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height.

When you set flex: 1 on a View component in React Native, it primarily affects the vertical space because the default main axis of a View container is vertical.

## flex

The reason you don't need to define display: flex explicitly is that the View component in React Native is designed to work with flexbox layout out of the box. When you use a View component, it's assumed to be a flex container, and you can use flexbox properties like flex, flexDirection, alignItems, and justifyContent to control the layout of its children.
justify-content aligns elements along the main axis (horizontal or vertical, depending on the flex-direction property)

run project: npx expo start

## StatusBar

backgroundColor property only works for Android, we cannot change the backgound color on iOS. We can adjust the text color on both platforms using prop barStyle="default". By default, dark texxt on iOS and white text on Android.

## Alert vs Modal

React Native provides an Alert API, which can be used to display native alert dialogs on Android and iOS.
Alert dialogs were created to display short messages in the simplest way possible, and that’s why they are limited in their functionality.
On the other hand, modals are used for complex displays. They require us to define the whole content by ourselves. By default, they provide event listeners like a back button handler.
on Android we can’t show more than three buttons, and no option is provided to capture users’ inputs. Although iOS allows us to have many buttons and lets users input the data, we still can’t show images, charts, or have any kind of customization except text.
