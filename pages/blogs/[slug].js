import React from "react";
import Header from "@/components/shared/Header";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import BlogApi from "lib/api/blogs";
import { Col, Row } from "reactstrap";
import { SlateView } from "slate-simple-editor";

const BlogDetail = ({ blog }) => {
  debugger;
  const { data, loading } = useGetUser();
  // debugger
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="slate-container">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <SlateView initialContent={blog.content} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  const json = await new BlogApi().getAll();
  const blogs = json.data;
  const paths = blogs.map((blog) => {
    //We will return an array of objects with params of id.
    return {
      params: { slug: blog.slug },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const json = await new BlogApi().getBySlug(params.slug);
  return { props: { blog: json.data } };
}
export default BlogDetail;
