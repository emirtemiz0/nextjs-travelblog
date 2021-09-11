
import { Fragment } from 'react';
import Head from 'next/head'
import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'



export default function HomePage(props) {
    return (  
    <Fragment>
    <Head>
        <title>Emir | Gezi Rehberi</title>
        <meta name="Description" content="Example React project."/>
    </Head>
    <MeetupList meetups={props.meetups} />
    </Fragment>
    )
}

export async function getStaticProps(){ 
// Fetch data from a database

const client = await MongoClient.connect('mongodb+srv://emir:Post1306@cluster0.qlf3i.mongodb.net/meetups?retryWrites=true&w=majority');
     const db = client.db();
     const meetupsCollection = db.collection('meetups');
     const meetups = await meetupsCollection.find().toArray();

     client.close();

 return {  
    props: { 
        meetups: meetups.map(meetup => ({ 
            title : meetup.title,
            address : meetup.address,
            image : meetup.image,
            id: meetup._id.toString()
        }))
    }
  }
}
