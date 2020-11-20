import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";

import withAuth from "@/hoc/withAuth";

const Secret = ({ user, loading }) => {
  //debugger;
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>I am Secret page - Hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

//High Order Component - HOC
//Simple function that takes a component and returns a new component with some extended functionality

// const withAuth = (Component) => {
//     return (props) => {
//         return <Component title="Hello World" {...props}/>
//     }
// }

export default withAuth(Secret)();
