import SiteContainer from "../UI/SiteContainer";
import Cropper from "react-easy-crop";
import { useCallback, useState } from "react";
import getCroppedImg from "../cropImage";

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

const New = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  };

  return (
    <SiteContainer className="flex flex-col items-center gap-2">
      <h1 className="text-left w-full mb-2 font-medium text-lg">New post</h1>

      {!imageSrc ? (
        <input type="file" onChange={onFileChange} accept="image/*" />
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
            className="zoom-range"
          />

          <form className="flex flex-col gap-1">
            <label htmlFor="bodyInput">Post description</label>
            <input
              type="text"
              id="bodyInput"
              className="border px-3 py-1 mb-3"
              name="body"
            />

            <button
              type="button"
              className="bg-white text-black px-4 py-2 rounded-xl font-medium border-2"
              onClick={showCroppedImage}
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
