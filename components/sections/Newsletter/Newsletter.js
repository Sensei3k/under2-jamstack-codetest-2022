import React from "react"
import PropTypes from "prop-types"
import { Container } from "../../atoms/Container"
import { Heading } from "../../atoms/Heading"
import { TextBlock } from "../../atoms/TextBlock"
import { Form } from "../../comps/Form"

Newsletter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function Newsletter({ className = "" }) {
    const inputs = [
        {_id: 1, name: "First name"},
        {_id: 2, name: "Last name"},
        {_id: 3, name: "Email"},
        {_id: 4, name: "Company"}
    ];

    return (
        <section className={`bg-gray-100 ${className}`}>
            <Container className="md:items-center">
                <div className="col-span-full md:order-1 md:col-span-5">
                    <Heading>Financial Tech trends, straight to your inbox.</Heading>
                    <TextBlock theme="subtle">sign up for trends, reports and papers on everything finance, and tech in the banking world.</TextBlock>
                </div>
                <div className="md:order-2 md:col-span-7">
                    <Form inputs={inputs} />
                </div>
            </Container>
        </section>
    )
}
