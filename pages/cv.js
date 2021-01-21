import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Col, Row } from "reactstrap";
const Cv = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading} >
      <BasePage title="Download my Resume- Arhan Choudhury">
        <Row>
          <Col md={{size : 8, offset : 2}}>
            <iframe style={{width : "100%", height :'800px'}} src="/Arhan_CV.pdf"></iframe>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default Cv;
