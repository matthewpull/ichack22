import PropTypes from 'prop-types';

function OAuthLink({clientID, loginText, redirectURI, webexAPIBaseURL}) {
  
  return (
    <div className="flex justify-center">
      <a
      href={`${webexAPIBaseURL}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=spark%3Aall%20spark%3Akms`}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-accent hover:bg-accent/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent mt-32"
      >
        {loginText}
      </a>
    </div>
  );
}

OAuthLink.propTypes = {
  clientID: PropTypes.string.isRequired,
  loginText: PropTypes.string.isRequired,
  redirectURI: PropTypes.string.isRequired,
  webexAPIBaseURL: PropTypes.string.isRequired
};

export default OAuthLink;