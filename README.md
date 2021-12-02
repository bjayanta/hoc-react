# HOC in React App (react-router-dom v6)

### User "useParams" in class component as HOC
create a functional component & the code bellow:
```js
import { useParams } from 'react-router-dom'

export default function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}  
```

useage:
```js
export default withParams(ComponentName);
```

### User "useNavigate" in class component as HOC
create a functional component & the code bellow:
```js
import { useNavigate } from 'react-router-dom'

export default function withNavigation(Component) {
    return props => <Component {...props} navigate={useNavigate()} />;
}
```

useage:
```js
export default withNavigation(ComponentName);
```

Use "withParams" & "withNavigation" together:
```js
export default withNavigation(withParams(ComponentName));
```

Thanks.