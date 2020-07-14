import React, { useState } from 'react';
import Form from './Form/index';
import FormInput from './FormInput/index';
import Button from './Button/index';

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    info: { error: false },
  });

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    handleResponse(res.status);
  };

  const handleResponse = (status) => {
    if (status === 200) {
      setStatus({
        submitting: false,
        submitted: true,
        info: { error: false },
      });
      setInputs({
        name: '',
        email: '',
        phone: '',
        enquiry: '',
      });
      setTimeout(resetForm, 3000);
    } else {
      setStatus({
        info: { error: true },
      });
    }
  };

  const resetForm = () => {
    const btnEl = document.getElementById('submit-btn');
    btnEl.innerText = 'Submit';
  };

  const handleClearInputs = (e) => {
    e.preventDefault();
    setInputs({
      name: '',
      email: '',
      phone: '',
      enquiry: '',
    });
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className="text-align--left"
    >
      <label
        htmlFor="name"
      >
        Name
      </label>
      <FormInput
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={handleInputChange}
        value={inputs.name}
        className="full-width"
      />

      <label htmlFor="email">Email Address</label>
      <FormInput
        type="text"
        name="email"
        id="email"
        placeholder="Email Address"
        onChange={handleInputChange}
        value={inputs.email}
        className="full-width"
      />

      <label>Phone Number - <span className="italic">Optional</span></label>
      <FormInput
        type="text"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        onChange={handleInputChange}
        value={inputs.phone}
        className="full-width"
        />

      <label htmlFor="enquiry">Enquiry</label>
      <FormInput
        name="enquiry"
        id="enquiry"
        placeholder="Enquiry"
        onChange={handleInputChange}
        value={inputs.enquiry}
        textarea
        className="full-width mb-md"
      />

      <Button
        className="btn--primary mr-sm"
        disabled={status.submitting}
        type="submit"
        primary
        id="submit-btn"
      >
        {!status.submitting
          ? !status.submitted
            ? 'Submit'
            : 'Submitted'
          : 'Submitting...'}
      </Button>
      <Button
        className="btn--secondary"
        type="submit"
        onClick={handleClearInputs}
        secondary
      >
        Clear
      </Button>
    </Form>
  );
};

export default ContactForm;
