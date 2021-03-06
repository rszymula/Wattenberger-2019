import React, { Component } from "react"
import Link from "components/_ui/Link/Link"
import NewsletterSignup from "components/_shared/NewsletterSignup/NewsletterSignup"
import flowerImg from "./flower.png"

import "./NewsletterSignupPage.scss"

const NewsletterSignupPage = () => {
    return (
        <div className="NewsletterSignupPage">
            <h1>
                Keep in touch!
            </h1>

            <div className="NewsletterSignupPage__content">
                <p>
                    Want me to send you updates on the newest things I've made? Sign up for my newsletter!
                     Content will be related to data visualization experiments, frontend development, and design.
                </p>
            </div>

            <NewsletterSignup />

            <div className="NewsletterSignupPage__images">
                <video autoplay="" loop={true} muted={true}>
                    <source src="https://video.twimg.com/tweet_video/D6nGU_gWwAAGek8.mp4" type="video/mp4" />
                </video>

                <video autoplay="" loop={true} muted={true}>
                    <source src="https://video.twimg.com/tweet_video/D86RGYqW4AAlA1F.mp4" type="video/mp4" />
                </video>
                <img alt="dog flower" src={flowerImg} />
                <video autoplay="" loop={true} muted={true}>
                    <source src="https://video.twimg.com/tweet_video/D9m1vM1XoAEhPYo.mp4" type="video/mp4" />
                </video>
                {/* <video autoplay="" loop={true} muted={true}>
                    <source src="https://video.twimg.com/tweet_video/D4ZSR2PWsAEAc8k.mp4" type="video/mp4" />
                </video> */}
            </div>
        </div>
    )
}

export default NewsletterSignupPage;