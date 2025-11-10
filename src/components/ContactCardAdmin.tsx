'use client';

import { Card, Image } from 'react-bootstrap';
import { Contact } from '@/lib/validationSchemas';

/* Renders a single contact card for admin view. See admin/page.tsx. */
const ContactCardAdmin = ({ firstName, lastName, address, image, description, owner }: Contact & { owner: string }) => (
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
      <p className="blockquote-footer">{owner}</p>
    </Card.Body>
  </Card>
);

export default ContactCardAdmin;
