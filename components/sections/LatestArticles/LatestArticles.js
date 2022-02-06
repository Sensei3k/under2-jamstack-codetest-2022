import React from "react"
import PropTypes from "prop-types"
import { Container } from "../../atoms/Container"
import { Heading } from "../../atoms/Heading"
import { LogoCard } from "../../comps/LogoCard"
import { TextLink } from "../../atoms/TextLink"


LatestArticles.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function LatestArticles({ className = "", articles }) {
    return (
        <section className={` ${className}`}>
            <Container>
                <div className="col-span-full">
                    <Heading className="">The latest from Mula</Heading>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 my-8 md:my-16">
                        {articles.map(partner => <LogoCard // change this
                            key={partner.alt}
                            src={partner.src} 
                            alt={partner.alt} 
                            height={partner.height} 
                            width={partner.width}
                        />)}
                    </div>
                    <TextLink size="lg" href="#">read customer stories</TextLink>
                </div>
            </Container>
        </section>
    )
}
