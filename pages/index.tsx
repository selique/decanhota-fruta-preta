import { NextPage } from "next";
import Page from "../components/Page";

const Index: NextPage = () => {
  return (
    <Page title="decanhota" description="Decanhota Podcast">
      <iframe src="https://decanhota.sounder.fm/" />
    </Page>
  );
};

export default Index;
