import React from "react"
import PropTypes from "prop-types"
import { Container } from "../../atoms/Container"
import { Heading } from "../../atoms/Heading"
import { TextBlock } from "../../atoms/TextBlock"
import { Button } from "../../atoms/Button/Button"

HomeHero.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function HomeHero({ className = "" }) {
    
    return (
        <header className={`bg-gray-100 ${className}`}>
            <Container className="md:items-center">
                <div className="col-span-full order-2 md:order-1 md:col-span-5">
                    <Heading>The reporting tools taking the fintech world by storm.</Heading>
                    <TextBlock theme="subtle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</TextBlock>
                    <Button href="#">Schedule a demo</Button>
                </div>
                <div className="order-1 md:order-2 md:col-span-7">
                    <picture>
                        <source type="image/webp" srcSet="/images/hero-image-small.webp" />
                        <source type="image/png" srcSet="/images/hero-image-small.png" />
                        <img src="/images/hero-image-small.png" width="657" height="571" alt="" />
                    </picture>
                </div>
            </Container>
        </header>
    )
}
