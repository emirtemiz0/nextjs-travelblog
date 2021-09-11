import classes from './MeetupDetail.module.css';

export default function MeetupDetail(props) {
    return (
        <div className={classes.main}>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <p>{props.address}</p>
        <p>{props.description}</p>
        </div>
    )
}
