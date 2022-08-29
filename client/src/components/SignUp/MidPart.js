// global imports
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import axios from "axios";

// Redux actions imports
import updateDataSignUpForm from "../../actions/dataSignUpForm";

// component imports
import Button from "../General/Button";
import Label from "../SignUp/FileInputLabel";
import PhotoCropper from "./PhotoCropper";

// styled components imports
import { useState } from "react";
import {
  MainWrapper,
  PhotoWrapper,
  TextContent,
  Photo,
  FileInput,
} from "../../styledComponents/SignUp/MidPart";

const MidPart = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.dataSignUpForm);

  const {
    firstName,
    isFirstNameCorrect,
    lastName,
    isLastNameCorrect,
    email,
    isEmailCorrect,
    password,
    passwordRepeat,
    passwordStrength,
    passwordsMatch,
    photo,
    isReadyInPercentage,
    isSignUpFormReady,
  } = formData;

  const [filesChosen, setFilesChosen] = useState(null);
  const [localPhotoUrl, setLocalPhotoUrl] = useState(null);
  const [readyPhotoUrl, setReadyPhotoUrl] = useState(null);

  const fileInputElem = useRef();

  class UpdatedFormData {
    constructor(value) {
      this.firstName = firstName;
      this.isFirstNameCorrect = isFirstNameCorrect;
      this.lastName = lastName;
      this.isLastNameCorrect = isLastNameCorrect;
      this.email = email;
      this.isEmailCorrect = isEmailCorrect;
      this.password = password;
      this.passwordRepeat = passwordRepeat;
      this.passwordStrength = passwordStrength;
      this.passwordsMatch = passwordsMatch;
      this.photo = value;
      this.isReadyInPercentage = isReadyInPercentage;
      this.isSignUpFormReady = isSignUpFormReady;
    }
  }

  // When file input changes, both states are updated.
  // The localPhotoUrl state updates the photo preview
  const fileInputChangeHandler = async (e) => {
    setFilesChosen(e.target.files);
    setLocalPhotoUrl(URL.createObjectURL(e.target.files[0]));
    // Resetting the file input value. This is done, so that when
    // the user clear it themselves, they still can upload the same
    // picture twice in the row.
    e.target.value = null;
  };

  // When the photo is deleted, both states update to null.
  // This cause the div to contain text content as default.
  // The form is mechanically reset, so that teh file input
  // has empty files list. This could be done by few more
  // methods, for now, this was chosen as the best to go with.
  const removePhoto = () => {
    setFilesChosen(null);
    setReadyPhotoUrl(null);
    // Updating Redux state of the whole sign up form with
    // empty photo field.
    const updatedFormData = new UpdatedFormData("");
    dispatch(updateDataSignUpForm({ ...updatedFormData }));
  };

  const saveEditedPhoto = async (newUrl) => {
    setLocalPhotoUrl(null);

    // converting the blob url into file so that it can be uploaded then
    const file = await fetch(newUrl)
      .then((r) => r.blob())
      .then(
        (blobFile) => new File([blobFile], "photo", { type: blobFile.type })
      );

    setReadyPhotoUrl(URL.createObjectURL(file));
    // Updating Redux state of the whole sign up form with new photo.
    const updatedFormData = new UpdatedFormData(file);
    dispatch(updateDataSignUpForm({ ...updatedFormData }));
  };

  return (
    <MainWrapper>
      <label for="sign-up-photo-input">
        <PhotoWrapper
          className="sign-up-photo-wrapper"
          // onClick={() => document.getElementById("sign-up-photo-input").click()}
        >
          {readyPhotoUrl ? (
            <Photo src={readyPhotoUrl} alt="Fotka, ktorú si si zvolil/a" />
          ) : (
            <TextContent>chcem pridať aj svoju fotku</TextContent>
          )}
        </PhotoWrapper>
      </label>
      <FileInput
        type="file"
        name="sign-up-photo-input"
        id="sign-up-photo-input"
        ref={fileInputElem}
        accept="image/*"
        onInput={(e) => {
          fileInputChangeHandler(e);
        }}
      />
      <Button
        type="click"
        size="mid"
        text="odstrániť"
        onClick={removePhoto}
        disabled={readyPhotoUrl === null}
      />
      <Label size="mid" forName="sign-up-photo-input" text="zmeniť" />
      {localPhotoUrl && (
        <PhotoCropper photoURL={localPhotoUrl} onSave={saveEditedPhoto} />
      )}
    </MainWrapper>
  );
};

export default MidPart;
