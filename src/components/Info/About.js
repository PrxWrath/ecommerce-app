import React from 'react'
import {Container, Card} from "react-bootstrap"

const About = () => {
  return (
    <Container>
        <Card className="bg-dark text-light w-50 mx-auto text-center my-2 shadow-lg p-3">
            <Card.Title>TechStop - A one stop solution to all your techie needs</Card.Title>
            <Card.Body>
                <Card.Text>
                    Established in 2022, techstop is an online mart for all your nerdy cravings. Techstop was founded Pratyush Tiwari, an IT enthusisast like you to facilitate like minded individuals with an easy and quick shooping solution
                </Card.Text>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default About