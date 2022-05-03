// domain.com/
import MeetupList from "../components/meetups/MeetupList"
import NewMeetupForm from '../components/meetups/NewMeetupForm'

debugger;
const DUMMY_MEETUPS = [
    {
        id: "m1",
        tittle: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Feldherrnhalle_-_Odeonsplatz.jpg/268px-Feldherrnhalle_-_Odeonsplatz.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
    },
    {
        id: "m2",
        tittle: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Feldherrnhalle_-_Odeonsplatz.jpg/268px-Feldherrnhalle_-_Odeonsplatz.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!',
    },
]

export default function HomePage() {

    return (
        <div>
            <MeetupList meetup={DUMMY_MEETUPS} />
        </div>
    )
}
