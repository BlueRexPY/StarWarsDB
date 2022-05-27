import { useNavigate,useParams,useLocation } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const location = useLocation()
    
    return (
      <Component
        navigate={navigate}
        params={params}
        location={location}
        {...props}
        />
    );
  };
  
  return Wrapper;
};