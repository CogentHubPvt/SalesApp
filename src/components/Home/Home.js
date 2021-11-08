import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const Home = () => {
  const [content, setContent] = useState("1");

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar setContent={setContent} />
        </Grid>
        <Grid item xs={10}>
          <Content content={content} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
