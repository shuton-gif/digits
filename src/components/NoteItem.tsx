'use client';

import { ListGroup } from 'react-bootstrap';

/* Renders a single note item in the Notes list. */
const NoteItem = ({ note }: { note: { id: number; note: string; createdAt: Date } }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
    <p>{note.note}</p>
  </ListGroup.Item>
);

export default NoteItem;
