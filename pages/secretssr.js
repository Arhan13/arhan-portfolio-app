import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { authorizeUser, withAuth } from "../utils/auth0";

const SecretSSR = ({ user, title }) => {
  debugger;
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>I am Secret page - Hello {user && user.name}</h1>
        <h2>{title}</h2>
      </BasePage>
    </BaseLayout>
  );
};
export default SecretSSR;

//Getting data from server
// export const getServerSideProps = async ({req, res}) => {
//     const user = await authorizeUser(req, res);
//     return {
//         props:{user : session.user}
//         props : { user }
//     }
// }
const getTitle = () => {
  //Async
  return new Promise((res) => {
    setTimeout(() => {
      //After 500 ms
      res({ title: "My new title!!" });
    }, 500);
  });
};

export const getServerSideProps = withAuth(async () => {
  const title = await getTitle();
  return title;
});
