// global imports
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { Box } from "@mui/system";

// styled components imports
import {
  MainWrapper,
  StyledSlider,
} from "../../styledComponents/SignUp/PhotoCropper";

// components imports
import Button from "../General/Button";

const PhotoCropper = ({ photoURL, onSave }) => {
  const [zoom, setZoom] = useState(1);
  const [editor, setEditor] = useState(null);

  const setEditorRef = (editor) => setEditor(editor);

  const handleZoom = (e, val) => {
    setZoom(val);
  };

  const saveImage = () => {
    if (editor) {
      const newURL = editor
        .getImageScaledToCanvas()
        .toDataURL("image/jpeg", 1.0);
      onSave(newURL);
    }
  };

  return (
    <MainWrapper className="photo-cropper-wrapper">
      <AvatarEditor
        ref={setEditorRef}
        image={photoURL}
        width={250}
        height={250}
        border={50}
        scale={zoom}
      />
      <Box sx={{ width: "250px" }}>
        <StyledSlider
          //   componentsProps={{ rail: { className: "my-rail" } }}
          defaultValue={zoom}
          value={zoom}
          onChange={handleZoom}
          step={0.01}
          min={1}
          max={3}
        />
      </Box>
      <Button
        type="click"
        size="mid"
        text="takto sa mi to páči"
        onClick={() => saveImage()}
        disabled={false}
        id="photo-cropper-button-save"
      />
      <Button
        type="click"
        size="mid"
        text="zahodiť"
        disabled={false}
        id="photo-cropper-button-cancel"
      />
    </MainWrapper>
  );
};

export default PhotoCropper;
