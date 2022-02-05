import PropTypes from 'prop-types';
import {WebexMeetingWidget} from '@webex/widgets';

import '@webex/widgets/dist/webexWidgets.css';
import './WebexMeeting.css';

function WebexMeeting({webexToken}) {
  return (
    <div className="WebexMeeting">
        <WebexMeetingWidget
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
