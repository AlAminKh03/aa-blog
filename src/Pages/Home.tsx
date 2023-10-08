import Asidebar from "../Components/Asidebar";
import Blogs from "../Components/Blogs";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <main className="flex gap-10">
        <Asidebar />
        <Blogs />
      </main>
    </>
  );
};

export default Home;
