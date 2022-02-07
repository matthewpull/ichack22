import Auth from './OAuthLink';
import WebexMeeting from './WebexMeeting';
import useCurrentUri from './useCurrentUri';
import useWebexOAuth from './useWebexOAuth';

import './App.css';
import Rate from "./Rate";

function App() {
  const webexToken = useWebexOAuth();
  const redirectURI = useCurrentUri();

  return (
      <>
          <header className="bg-white shadow flex-shrink-0">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex">
                        <h1 className="text-3xl font-bold text-textdark">Calling</h1>
                        <div className="flex-1"/>
                        {webexToken && <Rate/>}
                    </div>
                </header>
                <main className="flex-1 max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Start replace */}
                    {webexToken ?
      (
        <WebexMeeting webexToken={webexToken} />
      ) :
      (
        <Auth
          clientID={process.env.REACT_APP_WEBEX_CLIENT_ID}
          loginText="Continue with Webex"
          redirectURI={redirectURI}
          webexAPIBaseURL={process.env.REACT_APP_WEBEX_BASE_URL}
        />
      )}
                    {/* /End replace */}
                </main>
      </>
  );
}

export default App;
