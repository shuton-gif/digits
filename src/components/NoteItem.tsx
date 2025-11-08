'use client';

import { ListGroup } from 'react-bootstrap';

const NoteItem = ({ note }: { note: { id: number; note: string; createdAt: Date } }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
    <p>{note.note}</p>
  </ListGroup.Item>
);

export default NoteItem;
