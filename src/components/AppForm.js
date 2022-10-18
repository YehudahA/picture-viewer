import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function AppForm(props) {
    const [url, setUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(url);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="url">Enter Picture Url:</Form.Label>
                <Form.Control
                    id="url"
                    placeholder="Picture Url"
                    type="url"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Button type="submit">Show Picture</Button>
            </Form.Group>
        </Form>
    );
}