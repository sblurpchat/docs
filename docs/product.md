---
title: Product
outline: deep
---

> [!IMPORTANT]
> This document is currently **a proposal.** Sblurp is not yet in development.

# Product

Sblurp is a full-featured, modern multi-user chat application. The platform includes server hosting, an open-source server package, and native apps for all major desktop and mobile platforms. To get started, download the official client from your app store or [sblurp.chat](https://sblurp.chat).

## Hosting

In order for a group chat service to maximize both usability and control, Sblurp servers are available in two forms. In both cases, Sblurp clients can access both kinds of servers with a first-class experience. A user will typically find and connect to servers using the official directory.

### Paid Hosting

In order to facilitate easy onboarding, discoverability, and operation of communities, Sblurp offers a paid hosting solution for "official" servers. Official servers are fully managed and benefit from being placed in an global server directory. Admins of paid servers can choose a subdomain, such as `myserver.sblurp.net`.

The majority of communities are expected to be hosted on the paid platform. Communities are charged a reasonable fee based on community size in order to cover hosting and operational costs.

### Self-Hosting

Community owners may run Sblurp on their own infrastructure with no restrictions. This is a good solution for price-conscious communities, or those that want absolute control, while accepting that they will not be listed in the official directory. There is no licensing fee for self-hosting.

## Clients

Sblurp provides official reference clients for macOS, Windows, common Linux distributions, iOS, and Android. Native apps focus on speed and efficiency but are still built with browser-based frameworks instead of native controls due to limited development resources. Since the API and architecture are open, developers can create alternative clients with alternative interfaces or to support functionality introduced by third-party plugins.

## Developer Features

Sblurp servers provide WebHooks, an HTTP REST-like API, and a realtime WebSocket API. See [Architecture](./architecture).

The most important developer feature is the plugins system. Sblurp provides a core set of plugins, such as social media previews and polls. It is the job of clients to support additional behavior created by plugins, and it is expected that certain plugins might become popular enough to warrant support by the official clients. For more information see [Plugins](./plugins).

## Core Features

### Servers

Each Sblurp community is hosted with its own self-contained server and database, either officially hosted by Sblurp or self-hosted by a technical user. Servers hosted on the Sblurp platform are listed in an official directory for discoverability and visibility. Servers are not connected to each other or federated, but linking servers might be possible through third-party plugins.

### Users

Users on official servers authenticate through Sblurp Accounts, which makes it easy for users to log in to all their communities. Self-hosted servers can choose between Sblurp accounts for authentication or local accounts.

Official Sblurp accounts require a verified email address. A verified, non-VOIP phone number is optional, but communities may require it in order to limit abuse. Two-factor (2FA) through OTP and passkeys are supported, but SMS is not due to cost and reliability. Phone numbers cannot be reused between accounts.

Users' phone numbers and email addresses are private and will only ever be used for identity verification and never for marketing.

Official Sblurp accounts can claim a unique username once a phone number and email address has been verified. This username helps identify accounts as authentic. Usernames have length and character limitations and can be changed at most every 90 days to limit abuse.

Users can set a profile picture, name, pronouns, and short bio as part of their profile. This bio is available publicly at `sblurp.chat/@<username>` but can be made private. User profiles are visible server members and can be customized on a per-server basis.

### Channels

All communication occurs in channels. Channels have names (automatically prefixed with `#` when displayed) and optional descriptions. Users may join and leave channels as they wish. Channels can be public (anyone can join) or private (inaccessible until joined or invited). Direct messages between users are implemented as private channels.

Depending on the permission configuration, users may be able to create or delete channels, or turn public channels private, though private channels can never be made public again for privacy considerations.

### Messages

Messages are simply the text that a user or plugin sends to a channel. Messages may have attachments, such as pictures, files, and source code. Messages may have reactions (emoji that users can click in response to a message).

Messages use simple Markdown formatting, though most users prefer WYSIWYG editors for formatting. Depending on permissions, the retention of messages can be set globally or per-channel.

Plugins can be used to augment messages, such as social media previews, or previews for connected services.

#### Threads

Users can reply to a channel-level message to start a thread, which is similar to a mini-channel with the initial message at the top. When replying, users can optionally copy their threaded message to the channel.

#### Addressing

Users can use `@` to address users their messages. `@`-addressing a user will notify the target user. The special keyword `@channel` will notify everyone in the channel. Accidentally notifying thousands of people with `@`-addressing is a common problem in large communities, so admins can restrict access to this feature using permissions and plugins.

Users can use `#` to reference a channel. If a user does not have access to the channel referenced, it will appear as `private channel` in the client.

#### Notifications

Notifying users of pertinent messages is important, but other chat platforms frequently cause "notification overload" through an overabundance of push notifications, badges, and sounds. Instead, Sblurp provides sensible defaults by only notifying users when they are `@`-addressed or messaged in a private conversation. Users can force or mute notifications for any channel.

#### Read Status

Keeping track of the messages a user has read is an important part of the experience. Sblurp keeps track of the last seen message by a user for each channel in order to provide the user with a "What's New" style view of unread messages. Read status can be cleared per-channel and per-server.

#### Emoji

Emoji can be inserted into messages using a syntax like `:thumbs_up:`. Users can also react to messages using emoji, reacting at most once per emoji per message.

Custom emoji is an important part of community, especially animated emoji. Clients should expect servers to have tens of thousands of custom emoji. Users can upload emoji to their server if permitted by an admin.

Users may set a default skin color preference so that any message reactions they trigger will apply the skin tone modifier if applicable.

### Search

Users can search for messages or users. The search syntax supports search term prefixes for more specific searching:

- `"exact phrase"` - Find exact phrases
- `-<term>` - Exclude the given term from the search
- `in:<channel>` - Messages inside a given channel
- `from:<user>` - Messages from a specific user
- `with:<user>` - Threads where the given user has sent a message
- `has:attachment` - Messages with file attachments
- `reaction:<emoji>` - Messages that have at least one reaction with the given emoji

## Non-Features

It's important to mention features that will never be supported by Sblurp as core functionality. These include, but are not limited to:

- **Voice, video chat, and streaming**: Building this into the core Sblurp product would increase costs astronomically. Many services, such as Zoom and Google Meet, provide excellent voice and video capabilities, and integrating them into Sblurp is best left up to a plugin.
- **Audit logs**: Extensive, permanent structured logging for every user interaction would be burdensome and costly for the official Sblurp platform and self-hosted administrators. Such features are more targeted towards enterprises which require compliance, and other chat services would probably be a better fit.
- **End-to-end (E2E) encryption**: While Sblurp will do its best to preserve user privacy and encrypt data at rest, full end-to-end encryption is not feasible. For users wanting truly private chat, services such as Signal will be a better choice.
