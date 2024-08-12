# Introduction to Markdown

## Some components

### Views

- View: Like div with extra functionality from `react-native`
- SafeAreaView from "react-native-safe-area-context": React Native SafeAreaView renders content within the safe area boundaries of a device. The safe area refers to the display excluding the top status bar and front camera notch.
  - It should be used as the view for a page-screen. Like the index.jsx, sign-in.jsx
- ScrollView from `react-native`
- Stack from `expo-router`:
  - Usually put in the \_layout.jsx
  - Stack.Screen
    - name: filename of the page (without jsx), name="sign-in"
    - options:
      - headerShown: false

### Typography

- Text: This is for text
  - numberOfLines={num}. Specifiesthe number of lines you want it to be.
- Tabs from "expo-router"

### Routing

- Redirect from "expo-router"
- router from "expo-router"
  router.push
  router.replace("/home"): Redirect home
  router.setParams({query})
- Link
  - href
- useLocalSearchParams
  - const {query} = useLocalSearchParams();
- usePathname
  - pathname = usePathName()

### Styling

- StyleSheet utility

### Clickables

- TouchableOpacity
  - onPress={()=> setPlay(true)}
  - activeOpacity={}
  - disabled
- TouchableHighlight
- TouchableWithoutFeedback: For links and images
- ActivityIndicator
- Button. For advanced styling, use one of the touchable elements.
- Switch

### Listing

- `{Flatlist} from "react-native"`: For rendering a long list of items that need to be scrolled efficiently (like the map function in react). For larger list with smooth scrolling (flatlist) for smaller lists, `map()` function will do the job
  - data: Import part: a list of the data to be rendered
  - keyExtractor={(item)=>item.id}
  - `renderItem={({ item })=>(<><Text>{item.id}</Text></>)}`
  - `ListHeaderComponent={()=>(<View><Text></Text></View>)}`
  - `ListEmptyComponent={()=>(<></>)}`: This will be rendered if the flatlist is empty
  - horizontal
  - `refreshControl={<RefreshControl />}`
  - Note: You cannot put two different FlatList Types of horizontal and vertical in a scroll view. To implement that, you have to put one flat list in another flat list's (ListHeaderComponent)
- `{RefreshControl} from "react-native"`
  - `< RefreshControl refreshing={false} onRefresh={()=>{}}/>`
  - onViewableItemsChanged={({viewableItems})=>{if (viewableItems.length > 0){
  - setActiveItem(viewableItems[0].key)}}}
  - contentOffset={{ x: 170 }}: This will set the position to get the

### Images

- Image
  - source={{uri: ""}}
  - source={"../images/show"} (if the image is a local image)
  - resizeMode
- ImageBackground
- Svg from "react-native-svg"

### Modals And Alerts

- Modal
- Alert

### StatusBar

- StatusBar from "expo-status-bar"

### Input

- `{TextInput} from "react-native"`
  - value={value}
  - placeholder={placeholder}
  - plaveholderTextColor="#7b7b8b"
  - onChangeText={handleChangeText}
  - secureTextEntry={title === "Password" && !showPassword}

### ActivityIndicator

- ActivityIndicator
  - size="large"

### AsyncStorage

- @react-native-async-storage/async-storage

## Loading Fonts

```jsx
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
```

## CustomFields

### CustomInputField

```jsx
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useState } from "react";
import { icons, images } from "../constants";

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeText = (e) => {
    setValue(e); // Similar to react but not e.target.value. It is just e
  };
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="flex-row items-center px-4 w-full h-16 rounded-2xl border-2 border-black-200 bg-black-100 focus:border-secondary">
        <TextInput
          className="flex-1 text-white border-2 border-red-500 font-psemibold"
          value={value}
          placeholder={placeholder}
          plaveholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={(e) => setShowPassword((prev) => !prev)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
```

## Useful Packages

### React Native Animatable

`yarn add react-native-animatable`

### Expo-AV

`yarn add expo-av`

- `Video, ResizeMode from "expo-av"`
- Video
  - source={{uri: ""}}
  - resizeMode={ResizeMode.CONTAIN}
  - useNativeControls
  - shouldPlay
  - `onPlaybackStatusUpdata={(status)=>{if (status.didJustFinish){setPlay(false)}}}`

### Expo document picker

`npx expo install expo-document-picker`

```ts
import * as DocumentPicker from "expo-document-picker";
const result = await DocumentPicker.getDocumentAsync({
  type: selectType === "image" ? ["image/png", "image/jpg"] : ["video/mp4"],
});

if (!result.canceled) {
  if (selectType === "image") {
    setForm({ ...form, thumbnail: results.assests[0] });
  }
  if (selectType === "video") {
    setForm({ ...form, video: results.assests[0] });
  }
} else {
  setTimeout(() => {
    Alert.alert("Document picked", JSON.stringify(result, null, 2));
  }, 100);
}
```

### Expo image picker

`npx expo install expo-document-picker`

```ts
import * as DocumentPicker from "expo-document-picker";
const result = await ImagePricker.launchImageLibraryAsync({
  mediaTypes: ImagePicker.MediaTypeOptions.All,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
});

if (!result.canceled) {
  if (selectType === "image") {
    setForm({ ...form, thumbnail: results.assests[0] });
  }
  if (selectType === "video") {
    setForm({ ...form, video: results.assests[0] });
  }
} else {
  setTimeout(() => {
    Alert.alert("Document picked", JSON.stringify(result, null, 2));
  }, 100);
}
```

### react-native-gesture-handler

```sh
npx expo install react-native-gesture-handler
```
