# Image Preview


```tsx
import React, { useRef, useState } from "react";
import InputIcon from "./InputIcon";

const InputBox = () => {
  const filePickerRef = useRef(null);
  const addImageToPost = (e) => {
    e.preventDefault();
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
        // Here, we set the image state to the value of this
      setImageToPost(readerEvent.target.result);
    };
  };
  const [imageToPost, setImageToPost] = useState(null);
  return (
    <form >
      <div >
        <Image
          src={NextImage}
          alt={""}
        />
        <div >
          <input type="text" />
        {/* Here the image is being rendered */}
          {imageToPost && (
            <div>
              <img src={imageToPost} alt=""/>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default InputBox;

```
