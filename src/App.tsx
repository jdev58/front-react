import './App.css'
import apiClient from './api';

function App() {

    const callApiOne = async () => {
        try {
            const response = await apiClient.get('rest/captcha');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const callApiTwo = async () => {
        try {
            const response = await apiClient.get('rest/get');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const callBothApis = async () => {
        try {
            const [responseOne, responseTwo] = await Promise.all([
                apiClient.get('rest/captcha'),
                apiClient.get('rest/get')
            ]);
            console.log('Response One:', responseOne.data);
            console.log('Response Two:', responseTwo.data);
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <>
        <div className="card">
            <button onClick={callApiOne}>
                Create Captcha
            </button>
            <button onClick={callApiTwo}>
                Get Captcha
            </button>
            <button onClick={callBothApis}>
                Create and Get
            </button>
        </div>
    </>
  )
}

export default App
