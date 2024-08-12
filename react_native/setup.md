# Setup

```sh
yarn create expo-app app-name
```

```bash
# For typescript
yarn create expo-app -t expo-template-blank-typescript .
```

```sh
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

## Add entry file as main

```json
{
  "name": "rn",
  "version": "1.0.0",
  // "main": "node_modules/expo/AppEntry.js",
  "main": "expo-router/entry", // This line is what is meant to be there
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~50.0.14",
    "expo-constants": "~15.4.6",
    "expo-linking": "~6.2.2",
    "expo-router": "~3.4.9",
    "expo-status-bar": "~1.11.1",
    "nativewind": "^2.0.11",
    "react": "18.2.0",
    "react-native": "0.73.6",
    "react-native-safe-area-context": "4.8.2",
    "react-native-screens": "~3.29.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0"
  },
  "private": true
}
```

Move content from App.js to `app/_layout.jsx`

Add a scheme to the `app.json`

```json
{
  "expo": {
    "name": "Mobile",
    "slug": "mobile",
    "scheme": "mobile", // This scheme is not there originally and must be added
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": ["expo-router"]
  }
}
```

Starting

```sh
npx expo start
```

Creating different pages in the app folder. `index.jsx` and `profile.jsx`

`app/_layout.jsx`

```jsx
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  //   return (
  //     <>
  //       <Text>Header</Text>
  //       <Slot />
  //       <Text>Footer</Text>
  //     </>
  //   );
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* // This screen is the home page*/}
    </Stack>
  );
};

export default RootLayout;
```

> `index.jsx`

```jsx
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Profile Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

> `profile.jsx`

```jsx
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
```

## Styling with nativewind

```sh
yarn add nativewind
```

```sh
yarn add -D tailwindcss
```

```sh
npx tailwindcss init
```

`tailwind.config.js`

```js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add babel plugin to `babel.config.js`

```js
// babel.config.js

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};
```

> Restart the server

```jsx
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Aora!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// No need for a style sheet
```

If working with typescript, you can add typescript support

> global.d.ts

```ts
/// <reference types="nativewind/types" />
```

### AsyncStorage

- @react-native-async-storage/async-storage
