import imagemin from "imagemin";

// lossless
// import imageminJpegtran from "imagemin-jpegtran";
// import imageminOptipng from "imagemin-optipng";
import imageminGifsicle from "imagemin-gifsicle";

// lossy
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
// import imageminWebp from "imagemin-webp";

const compressImage = async () => {
  const files = await imagemin(
    ["images/original/*.{jpg,png,jpeg,svg,webP,gif}"],
    {
      destination: "images/compress",
      plugins: [
        // lossless
        // imageminJpegtran(),
        // imageminOptipng(),
        imageminGifsicle(),

        // lossy
        imageminSvgo(),
        // imageminWebp(),
        imageminMozjpeg(),
        imageminPngquant(),
      ],
    }
  );
};

compressImage();
