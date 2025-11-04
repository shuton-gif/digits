'use client';

import { Card, Image } from 'react-bootstrap';

/* Renders a single contact card. See list/page.tsx. */
const ContactCard = ({ firstName, lastName, address, image, description }: Contact) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={image} width={75} style={{ paddingBottom: '10px' }} />
      <Card.Title>
        {firstName}
        {' '}
        {lastName}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default ContactCard;
