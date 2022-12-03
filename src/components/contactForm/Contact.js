import React, { useState } from "react";
import { Button, createStyles,  Input, Textarea } from "@mantine/core";
import { send } from "emailjs-com";

import './Contact.scss';
import Social from "./Social";
import Background from "../../UI/Background";

const useStyles = createStyles((theme) => ({
  button: {
    display: 'block',
    margin: 'auto',
    width: 150,
  },
  input: {
    spacing: 'var(--mantine-spacing-sm)'
  },
  inputWrapper: {
    zIndex: 4,
  }
}))

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { classes } = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    const toSend = {
      from_name: name,
      reply_to: email,
      message: message,
    }

    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text)
      })
      .catch((err) => {
        console.log('Messaged failed to send...', err);
      });
    console.log('form submitted');
    setName('');
    setEmail('');
    setMessage('');
    e.reset();
  }

  return (
    <div id="contact">
      <Background />
      <section className="content">
        <h2 className="text_shadows">Get In Touch</h2>
      </section>
      <Social />
      <form id="form">
        <Input.Wrapper
          id='name-input'
          label="Full Name"
          size="lg"
          className={classes.inputWrapper}
        >
          <Input
            type="text"
            name="Full Name"
            placeholder="Full Name"
            value={name}
            size="lg"
            onChange={(e) => setName(e.target.value)}
            m="md"
            className={classes.inputWrapper}
          />
        </Input.Wrapper>
        <Input.Wrapper
          id="email-input"
          label="Email"
          size="lg"
          className={classes.inputWrapper}
        >
          <Input
            type="text"
            name="Email"
            placeholder="Email"
            value={email}
            size="lg"
            onChange={(e) => setEmail(e.target.value)}
            m="md"
            className={classes.inputWrapper}
          />
        </Input.Wrapper>
        <Textarea
          type="text"
          label="Message"
          name="message"
          placeholder="Message"
          value={message}
          minRows={8}
          autosize={true}
          size="lg"
          className={classes.input}
          onChange={(e) => setMessage(e.target.value)}
          m="md"
        />
      </form>
      <Button
        type="submit"
        color="red"
        radius="lg"
        size="sm"
        className={classes.button}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  )
}