import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    const history = useHistory()

    function addMeetupHandler(meetupData){
        fetch('https://curso-react-5c185-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() =>{
            history.replace('/')
        })
    }

    return (
        <section>
            <h1>Add a Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage
