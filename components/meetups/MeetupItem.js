import { useRouter } from 'next/router';
import Image from 'next/image'
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
debugger;
export default function MeetupItem({ id, image, title, address }) {
    // Use useRouter instead of Link to, to make use of its methods.
    const router = useRouter()

    function showDetailHandler() {
        router.push(`/${id}`) // '/' + id
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <Image
                        src={image}
                        alt={title}
                        width={650}
                        height={650}
                    />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

