import PropTypes from 'prop-types';
import {WebexMeetingsWidget} from '@webex/widgets';

import '@webex/widgets/dist/css/webex-widgets.css';
import './WebexMeeting.css';

function WebexMeeting({webexToken}) {
  return (
    <div className="WebexMeeting">
        <WebexMeetingsWidget
            accessToken={webexToken}
            meetingDestination={"thematthewpull@meet167.calls.webex.com"}
        />
    </div>
  )
}

WebexMeeting.propTypes = {
  webexToken: PropTypes.string.isRequired
};

export default WebexMeeting;
