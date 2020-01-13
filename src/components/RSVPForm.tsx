import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { formStrings } from './Strings';
import { formInputFactory } from '../utils/FormHelpers';

const { valid, lName, fName, invalid, city, state, zip, submit } = formStrings;

const formInputs = [fName, lName, city, state, zip];

const inputFields = formInputFactory(formInputs, formStrings);

const RSVPForm: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: {
    currentTarget: HTMLFormElement;
    preventDefault: () => void;
    stopPropagation: () => void;
  }): void => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    return setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      method="POST"
      data-netlify="true"
      name="rsvp"
      className="mb-5"
    >
      <input type="hidden" name="form-name" value="rsvp" />
      <Form.Row>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {inputFields.map((field: any) => {
          const { type, placeholder, name, defaultValue, controlId } = field;
          console.log('field', type);
          return (
            <Form.Group as={Col} md="4" controlId={controlId} key={controlId}>
              <Form.Label>{placeholder}</Form.Label>
              <Form.Control
                required
                type={type}
                placeholder={placeholder}
                name={name}
                defaultValue={defaultValue}
              />
              <Form.Control.Feedback>{valid}</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {invalid + placeholder}
              </Form.Control.Feedback>
            </Form.Group>
          );
        })}
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>{fName}</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={fName}
            name="fName"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>{valid}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>{lName}</Form.Label>
          <Form.Control
            required
            type="text"
            name="lName"
            placeholder={lName}
            defaultValue="Otto"
          />
          <Form.Control.Feedback>{valid}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>{fName}</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder={fName}
              name={fName}
              required
            />
            <Form.Control.Feedback type="invalid">
              {invalid}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>{city}</Form.Label>
          <Form.Control type="text" placeholder={city} name={city} required />
          <Form.Control.Feedback type="invalid">
            {invalid}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>{state}</Form.Label>
          <Form.Control type="text" placeholder="State" name="state" required />
          <Form.Control.Feedback type="invalid">
            {invalid}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>{zip}</Form.Label>
          <Form.Control type="text" placeholder="Zip" name="zip" required />
          <Form.Control.Feedback type="invalid">
            {invalid}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button className="float-right" type="submit">
        {submit}
      </Button>
    </Form>
  );
};

export default RSVPForm;
