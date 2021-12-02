import { useNavigate } from 'react-router-dom'

export default function withNavigation(Component) {
    return props => <Component {...props} navigate={useNavigate()} />;
}