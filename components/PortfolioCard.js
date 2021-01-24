import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

//import Tilt from "react-parallax-tilt";

const PortfolioCard = ({ portfolio, children }) => {
  return (
    <>
     
        <Card className="portfolio-card">
          <CardHeader className="portfolio-card-header">
            {portfolio.jobTitle}
          </CardHeader>
          <CardBody>
            <p className="portfolio-card-city">{portfolio.location}</p>
            <CardTitle className="portfolio-card-title">
              {portfolio.title}
            </CardTitle>
            <CardText className="portfolio-card-text">
              {portfolio.description}
            </CardText>
            {children}
          </CardBody>
        </Card>
      
    </>
  );
};

export default PortfolioCard;
