import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
//import { useGetPostsById } from "@/actions";
import { useRouter } from "next/router";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";

const Portfolio = ({ portfolio }) => {
  const router = useRouter();
  //const { data: portfolio, error, loading } = useGetPostsById(router.query.id);
  const { data: dataU, loading: loadingU } = useGetUser();
  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage header="Portfolio Detail" title={`${portfolio.title} - Arhan Choudhury`}>{JSON.stringify(portfolio)}</BasePage>
    </BaseLayout>
  );
};

//Statically Optimised and Dynamic Data
//Similar to getStaticProps

// export async function getServerSideProps({ query }) {
//   const json = await new PortfolioApi().getById(query.id);
//   const portfolio = json.data;

//   return { props: { portfolio } };
// }

//This function is executed at build time
export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  //Get paths that we want to re-render based on portfolio id
  const paths = portfolios.map((portfolio) => {
    //We will return an array of objects with params of id.
    return {
      params: { id: portfolio._id },
    };
  });

  // fallback : false means that "not found pages" will be resolved into 404 page.
  return { paths, fallback: false };
}

//The difference between the first one and this on is the params, we get all the params
export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: { portfolio } };
}

//[{params : {id : '  ....   '}},  {}, {}]

export default Portfolio;
