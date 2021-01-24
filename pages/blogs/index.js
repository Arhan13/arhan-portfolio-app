import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Col, Container, Row } from "reactstrap";
import Masthead from "components/shared/Masthead";
import BlogApi from "lib/api/blogs";
import BlogItem from "components/BlogItem";

const Blogs = ({ blogs }) => {
  const { data, loading } = useGetUser();
  //debugger;
  return (
    <BaseLayout
      navClass="transparent"
      className="blog-listing-page"
      user={data}
      loading={loading}
    >
      <Masthead imagePath="/images/home-bg2.jpg">
        <h1>Fresh Blogs</h1>
        <span className="subheading">Programming, investing...</span>
      </Masthead>

      <BasePage
        className="blog-body background2 cover cover-white"
        title="Fresh Blogs - Arhan Choudhury"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Row>
          {blogs.map((blog) => (
            <Col key={blog._id} md="10" lg="8" className="mx-auto">
              <BlogItem blog={blog} />
              <hr></hr>
            </Col>
          ))}
        </Row>

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const { data } = await new BlogApi().getAll();
  const blogs = data.map((item) => ({ ...item.blog, author: item.author }));
  return {
    props: { blogs },
    revalidate: 60,
  };
}
export default Blogs;
