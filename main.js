import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";

const compressImage = async () => {
  const files = await imagemin(["public/images/*.{jpg,png,jpeg}"], {
    destination: "public/images/min",
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });
};

compressImage();
