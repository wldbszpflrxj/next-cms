import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "components/Layout/container";
import Intro from "components/Main/intro";
import Layout from "components/Layout/layout";
import { getAllPostsForHome, getMenu } from "lib/api";
import { CMS_NAME } from "lib/constants";
import Project from "components/Main/project";
import Skills from "components/Main/skills";

const Index = ({ allPosts: { edges }, allMenus }) => {
  const gnbMenu = allMenus?.edges;
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  return (
    <Layout gnbMenu={gnbMenu}>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <Intro />
        <Project heroPost={heroPost} morePosts={morePosts} />
        <Skills />
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);
  const allMenus = await getMenu();
  return {
    props: { allPosts, preview, allMenus },
    revalidate: 10,
  };
};

export default Index;
