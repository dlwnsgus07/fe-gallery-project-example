import { useState, useEffect } from "react";

import * as imageApi from "../apis/imageApi";

import Profile from "../components/Profile";
import Grid from "../components/Grid";
import GridImage from "../components/GridImage";

const HomePage = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    imageApi.getAllImages().then((images) => {
      setImages(images);
    });
  }, []);

  if (!images) return "로딩중";

  return (
    <div>
      <Profile postCount={images.length} />
      <Grid>
        {images.map((image) => (
          <GridImage
            key={image.id}
            imageId={image.id}
            image={image.image}
            title={image.title}
            description={image.description}
          />
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
