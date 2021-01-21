import moment from 'moment';

const Avatar = ({image, title, date}) =>
  <div className="media avatar-box mb-2">
    <img className="mr-2" src={image} />
    <div className="media-body align-self-center">
      <h4 className="mt-0 mb-0" style={{fontWeight : "600"}}>{title}</h4>
      <p className="mt-0 subtitle">{moment(date).format('LLL')}</p>
    </div>
  </div>

export default Avatar;