'use client';

import { Contact, Note } from '@prisma/client';
import { Card, Image, ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import NoteItem from './NoteItem';
import AddNoteForm from './AddNoteForm';

/* Renders a single contact card in the List Contacts page. */
const ContactCard = ({ contact, notes }: { contact: Contact; notes: Note[] }) => (
  <Card className="h-100">
    <Card.Body>
      <Image src={contact.image} width={75} className="float-start me-3" />
      <Card.Title>
        {contact.firstName}
        {' '}
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{contact.address}</Card.Subtitle>
      <Card.Text style={{ clear: 'both' }}>
        {contact.description}
      </Card.Text>
      <ListGroup variant="flush">
        {notes.map((note) => <NoteItem key={note.id} note={note} />)}
      </ListGroup>
      <AddNoteForm contactId={contact.id} />
      <Link href={`/edit/${contact.id}`}>Edit</Link>
    </Card.Body>
  </Card>
);

export default ContactCard;
