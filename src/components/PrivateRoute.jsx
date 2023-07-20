import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import PropTypes from 'prop-types';

function Private ( {children})  {
const {isauth} = useSelector((state) => state.auth);

if(!isauth)
{
    return <Navigate to = "/login" />
}
return children;
}

Private.propTypes = {
    children: PropTypes.node.isRequired,
  };
  export default Private;