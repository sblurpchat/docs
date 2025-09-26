---
title: Business
---

> [!IMPORTANT]
> This document is currently **a proposal.** Sblurp is not yet in development.

# Business

The idea of Sblurp is ambitious: produce open-source real-time communication software alongside a platform for paid, hosted servers that could serve thousands or even millions of users. How is it possible for a small team of people or even an individual to grow and support such a product?

The answer is to radically simplify and make sure all incentives are aligned. Sblurp's business model is simple: charge community administrators reasonable fees for hosting. No algorithm, no third-party ads, no venture capital pressure.

### Radical Simplicity

As covered in [Architecture](./architecture), the goal of Sblurp isn't to invent new protocols or technology, but to keep the technology stack simple and use off-the-shelf, commonplace components. A service with Sblurp's goals doesn't need new realtime protocols, industry shifts, or internet standards. All of the components Sblurp needs to operate are already built into modern web browsers and operating systems.

### Bootstrapping and Alignment

At Sblurp, we won't be taking venture capital, nor will we ever sell to a private equity firm. Third-party investments exist to accelerate a product in order to reach and/or dominate a market quickly. Since Sblurp won't need much up-front capital, there's no need to take on additional capital investment which might influence the trajectory of the business or product decisions.

### No Algorithm, No Third-Party Ads

The Sblurp platform is for hosting chat communities, plain and simple. Communities are autonomous, and Sblurp does not cross-promote communities.

It would be simpler to say "no ads," but it's important that we leave open the possibility of Sblurp offering promoted servers and plugins. Communities may wish to appear in a "Featured Communities" list, and commercial plugins may wish to pay for promotion. Such a system would remain simple and user details, such as location and demographics, would never be involved in such a system.

## Pricing

In addition to cloud computing costs, Sblurp will need to pay for legal and graphic design services. Sblurp might eventually employ engineers. And there will certainly be costs associated with moderation, trust, and safety.

## Tier-Based Pricing

The initial proposed price structure revolves around Monthly Active Users -- the number of users who have made a request in the current monthly period. Since inactive users consume virtually no resources, it makes sense to charge based on them rather than the total number of users in the community.

#### Free Tier

> [!NOTE]
> A free tier will only exist if it's able to be subsidized by paid plans. For this reason, a free tier is not planned for the first phase of Sblurp.
>
> A hypothetical tier might be:
>
> - Free
> - 5 active users
> - 7 day message retention
> - 0.5 GB attachment storage
> - No database backups or custom subdomain

### Bronze Tier

- USD $5/month
- 25 active users
- 30 day message retention
- 5 GB attachment storage
- Daily database backups and custom subdomain

### Silver Tier

- USD $25/month
- 250 active users
- 90 day message retention
- 25 GB attachment storage
- Daily database backups and custom subdomain

### Gold Tier

- USD $50/month
- 1,000 active users
- 1 year message retention
- 100 GB attachment storage
- Daily database backups and custom subdomain

### Platinum Tier

- USD $100/month
- 5,000 active users
- 2 year message retention
- 250 GB attachment storage
- Daily database backups and custom subdomain

### Diamond Tier

- USD $150/month
- 10,000 active users
- 2 year message retention
- 500 GB attachment storage
- Daily database backups and custom subdomain

### Custom Tier

- USD $200/month or greater (custom usage-based pricing options become available)
- Unlimited active users
- Unlimited message retention
- Unlimited attachment storage
- Daily database backups and custom subdomain

## Optional Add-Ons

Community prices should feel reasonable and fair. Commercial interests, however, may be more demanding. Entities that make money through Sblurp may have increased reliance on the platform, so it's sensible to offer commercial features which cater to commercial use.

### Community Promotion

Community administrators may pay an additional USD $50/month for their community to appear at the top of the directory and in searches. These aren't targeted ads, but simply the raising of visibility for any community that pays for the feature. Promoted communities will be clearly labeled.

### Plugin Promotion

Similar to promoted communities, plugin authors may pay USD $50/month for a plugin to appear at the top of the plugin directory and in keyword searches. Promoted plugins will be labeled as such.
