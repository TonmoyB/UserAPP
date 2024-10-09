import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dateofbirth, setDate] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    
    const navigate = useNavigate();

    const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(gender);
        console.log(dateofbirth);
        console.log(city);
        console.log(phone);
        console.log(email);

        navigate('/read');
    };

    return (
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Gender</label>
                <input placeholder='Gender' onChange={(e) => setGender(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Date of Birth</label>
                <input placeholder='Date of Birth' onChange={(e) => setDate(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>City</label>
                <input placeholder='City' onChange={(e) => setCity(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Phone</label>
                <input placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            </Form.Field>
            <Button onClick={postData} type='button'>Submit</Button>
        </Form>
    );
}
