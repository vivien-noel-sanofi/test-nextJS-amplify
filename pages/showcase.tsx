import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";
import { Layout } from "../components/Layout";

const Showcase = ({ page, navigation, settings }) => {
  return (
    <div>Hellooooooo</div>
  );
};

export default Showcase;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });
  const navigation = await client.getSingle("navigation", { lang: locale });

  return {
    props: {
      navigation,
    },
  };
}
