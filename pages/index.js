// domain.com/
import MeetupList from "../components/meetups/MeetupList"

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
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}


export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10 // incremental Static Generation, number of seconds NextJS will wait untill it regenerates this page for an incoming request
    }
}
