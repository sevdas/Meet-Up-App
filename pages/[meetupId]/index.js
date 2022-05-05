import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupDetails() {
    return (
        <MeetupDetail
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
            title='First Meetup'
            address='Some Street 5, Some City'
            description='This is a first meetup'
        />
    );
}


export async function getStaticPaths() {
    return {
        fallback: false, // your paths contain all supported meetup ID values.
        paths: [
            {
                params: {
                    meetupId: 'm1'
                },
            },
            {
                params: {
                    meetupId: 'm2'
                },
            }
        ]
    }
}


export async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId // name of dynamic path, to identify that meetup through ID.
    // useRouter can only be used in the component level. 

    console.log('meetupId', context)

    return {
        props: {
            meetupData: {
                id: meetupId,
                title: 'A First Meetup',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/275px-London_Montage_L.jpg',
                address: 'Some address 5, 12345 Some City',
                description: 'This is a first meetup!',
            }
        },
        revalidate: 10 // incremental Static Generation, number of seconds NextJS will wait untill it regenerates this page for an incoming request
    }
}
