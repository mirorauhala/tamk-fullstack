import SiteContainer from "../UI/SiteContainer";
import Cropper from "react-easy-crop";
import { useCallback, useRef, useState } from "react";
import getCroppedImg from "../cropImage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

const New = () => {
  let navigate = useNavigate();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const bodyRef = useRef();
  const [zoom, setZoom] = useState(1);
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  };

  const getImage = async () => {
    try {
      return await getCroppedImg(imageSrc, croppedAreaPixels);
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * Handle publishing new image.
   *
   * @returns {Promise<void>}
   */
  const handlePublish = async () => {
    const image = await getImage();

    // fetch pre-signed upload
    const presignedResponse = await axios.get(
      process.env.REACT_APP_BACKEND_ENDPOINT + "/api/photos/presigned-url",
      { type: image.type }
    );

    const formData = new FormData();
    formData.append("key", presignedResponse.data.fields["Key"]);
    formData.append("acl", presignedResponse.data.fields["acl"]);
    formData.append("bucket", presignedResponse.data.fields["bucket"]);
    formData.append("X-Amz-Algorithm", presignedResponse.data.fields["X-Amz-Algorithm"]); // prettier-ignore
    formData.append("X-Amz-Credential", presignedResponse.data.fields["X-Amz-Credential"]); // prettier-ignore
    formData.append("X-Amz-Date", presignedResponse.data.fields["X-Amz-Date"]);
    formData.append("Policy", presignedResponse.data.fields["Policy"]);
    formData.append("X-Amz-Signature", presignedResponse.data.fields["X-Amz-Signature"]); // prettier-ignore
    formData.append("file", await getBlob(image));

    // upload image
    const uploadResponse = await axios.post(
      presignedResponse.data.url,
      formData
    );

    const publishResponse = await axios.post(
      process.env.REACT_APP_BACKEND_ENDPOINT + "/api/photos",
      {
        path: `${presignedResponse.data.url}/${presignedResponse.data.fields["Key"]}`,
        body: bodyRef.current.value,
      }
    );

    navigate("/p/" + publishResponse.data.insertId, { replace: true });
  };

  const getBlob = async (fileUri) => {
    const resp = await fetch(fileUri);
    return await resp.blob();
  };

  return (
    <SiteContainer className="flex flex-col items-center gap-2">
      <h1 className="text-left w-full mb-2 font-medium text-lg">New post</h1>

      {!imageSrc ? (
        <input
          type="file"
          onChange={onFileChange}
          accept="image/*"
          className="block w-full text-sm text-neutral-500
            file:px-4 file:mr-3 file:py-2 file:rounded-2xl file:border-0
            file:text-sm file:font-semibold file:bg-white
            file:text-violet-700
            hover:file:bg-violet-100"
        />
      ) : (
        <>
          <div className="relative top-0 aspect-square w-full overflow-hidden">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>

          <label htmlFor="zoomInput">Zoom</label>
          <input
            type="range"
            id="zoomInput"
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e) => {
              setZoom(e.target.value);
            }}
          />

          <form className="flex flex-col gap-1">
            <label htmlFor="bodyInput">Post description</label>
            <input
              type="text"
              id="bodyInput"
              ref={bodyRef}
              className="border px-3 py-1 mb-3"
              name="body"
            />

            <button
              type="button"
              className="bg-white text-black px-4 py-2 rounded-xl font-medium border-2"
              onClick={handlePublish}
            >
              Publish
            </button>
          </form>
        </>
      )}
    </SiteContainer>
  );
};
export default New;
