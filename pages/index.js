// domain.com/
import Layout from '../components/layout/Layout';
import MeetupList from "../components/meetups/MeetupList"

debugger;
const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/275px-London_Montage_L.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
    },
    {
        id: "m2",
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/275px-London_Montage_L.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!',
    },
]

export default function HomePage() {

    return (
        <Layout>
            <MeetupList meetups={DUMMY_MEETUPS} />
        </Layout>
    )
}
