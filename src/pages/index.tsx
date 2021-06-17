import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

type PageProps = unknown;
const Page: React.VFC<PageProps> = () => {
  const { t } = useTranslation("dev");

  return (<div>{t("WIP")}</div>);
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ko", ["dev"]))
    }
  };
};
export default Page;