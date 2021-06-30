import { CustomRouter } from './components';
import { Provider } from 'react-redux';
import { store } from './components/componentslesson10/redux';
export default function App() {
	return (
		<Provider store={store}>
			<div>
				<CustomRouter />;
			</div>
		</Provider>
	);
}
