'use client';

import { Contact } from '@prisma/client';
import { Card, Image } from 'react-bootstrap';
import Link from 'next/link';

/* Renders a single contact card in the List Contacts page. */
const ContactCard = ({ id, firstName, lastName, address, image, description }: Contact) => (
  <Card className="h-100">
    <Card.Body>
      <Image src={image} width={75} className="float-start me-3" />
      <Card.Title>
        {firstName}
        {' '}
        {lastName}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{address}</Card.Subtitle>
      <Card.Text style={{ clear: 'both' }}>
        {description}
      </Card.Text>
      <Link href={`/edit/${id}`}>Edit</Link>
    </Card.Body>
  </Card>
);

export default ContactCard;
