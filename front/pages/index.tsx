import React from "react";
import { Category } from 'types/Category';
import { Home } from 'types/Home';
import { ApiArticleArticle, } from 'types/schemas';
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

type HomeProps = {
  articles: ApiArticleArticle[];
  categories: Category[];
  homepage: Home;
}

const Home = ({ articles, categories, homepage }: HomeProps) => {
  const title = `${homepage.attributes.hero.attributes.title}`;
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}


export default Home;
