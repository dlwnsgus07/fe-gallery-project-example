import Profile from "../components/Profile";
import Grid from "../components/Grid";
import GridImage from "../components/GridImage";

const HomePage = () => {
  return (
    <div>
      <Profile />
      <Grid>
        <GridImage image="https://picsum.photos/200" />
        <GridImage image="https://picsum.photos/200" />
        <GridImage image="https://picsum.photos/200" />
        <GridImage image="https://picsum.photos/200" />
        <GridImage image="https://picsum.photos/200" />
        <GridImage image="https://picsum.photos/200" />
        <GridImage image="https://picsum.photos/200" />
        <GridImage image="https://picsum.photos/200" />
        <GridImage image="https://picsum.photos/200" />
        <GridImage image="https://picsum.photos/200" />
      </Grid>
    </div>
  );
};

export default HomePage;
