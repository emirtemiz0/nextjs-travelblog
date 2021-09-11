//ourdomain.com/new-meetup
import { useRouter } from 'next/dist/client/router';
import NewMeetupForm from '../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {
    const router = useRouter();

    async function handleAddMeetup (enteredData) { 
      const response = await fetch('/api/new-meetup', { 
          method: 'POST',
          body: JSON.stringify(enteredData),
          headers: { 
              'Content-Type':'application/json'
          }
      });

      const data = await response.json();

      console.log(data);

      router.push('/')
    }
    
    
    return ( 
    <NewMeetupForm onAddMeetup={handleAddMeetup} /> 
    )
}
