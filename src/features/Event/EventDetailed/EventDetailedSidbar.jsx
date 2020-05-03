import React,{ useState, Fragment } from 'react'
import { Segment, Item, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const EventDetailedSidbar = ({attendees}) => {
    const isHost = false
    return (
    <div>
      <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
          {attendees && attendees.length}{' '}
          {attendees && attendees.length === 1 ? 'Person':'People'} going
      </Segment>
      <Segment attached>
        <Item.Group divided>
            {   attendees &&
                attendees.map((attendee)=>(
                <Item key={attendee.id} style={{ position: 'relative' }}>
                   {attendee.host && (
                    <Label style={{ position: 'absolute',marginLeft:'1rem' }} color="orange" ribbon="right">
                    Host
                    </Label>
                    )}

                    <Item.Image size='tiny' src={attendee.photoURL||'/assets/user.png'} />
                    <Item.Content verticalAlign='middle'>
                    <Item.Header as='h3'>
                    <Link to={`/profile/${attendee.id}`}>{attendee.displayName}</Link>
                    </Item.Header>
                    </Item.Content>
                </Item>
                        ))
            }
        </Item.Group>
      </Segment>
    </div>
    )
}

export default EventDetailedSidbar