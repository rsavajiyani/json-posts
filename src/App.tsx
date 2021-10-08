import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PostList } from './PostList';
import { PostDetails } from './PostDetails';

export default function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Router>
					<Switch>
						<Route path="/post/:id" exact component={PostDetails}></Route>
						<Route path="/" component={PostList}></Route>
					</Switch>
				</Router>
			</header>
		</div>
	);
}
