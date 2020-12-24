import Header from "../shared/Header";
import { ToastContainer } from 'react-toastify';
//import LinkedAnimation from './LinkedAnimation';

const BaseLayout = (props) => {
  const { className, user, navClass = "with-bg", loading, children } = props;
  return (
    <div className="layout-container">
      <Header className={navClass} user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      <ToastContainer/>
    </div>
  );
};

export default BaseLayout;
