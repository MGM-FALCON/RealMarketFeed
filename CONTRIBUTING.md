# Contributing to RealMarketFeed

Thanks for your interest in contributing! This project is community-driven — anyone can submit new RSS feeds via a Pull Request.

## How to Add a Feed

### 1. Fork the Repository

Click the **Fork** button at the top right of [this repo](https://github.com/Phideround/RealMarketFeed), then clone your fork locally:

```bash
git clone https://github.com/<your-username>/RealMarketFeed.git
cd RealMarketFeed
```

### 2. Edit `data/feeds.json` and `README.md`

You need to update **two files**:

#### `data/feeds.json`

Add your feed entry at the end of the array:

```json
{
  "name": "Feed Name",
  "url": "https://example.com/rss",
  "category": "crypto | forex | stocks | macro",
  "tags": ["tag1", "tag2", "tag3"],
  "description": "Short description of the feed"
}
```

**Rules:**

- **`name`** — The official name of the source
- **`url`** — A valid, working RSS/Atom feed URL
- **`category`** — Must be one of: `crypto`, `forex`, `stocks`, `macro`
- **`tags`** — Maximum **3 tags** per feed, lowercase, relevant to the content
- **`description`** — One sentence describing the feed (keep it short)

#### `README.md`

Add a row to the matching category table:

```markdown
| Feed Name | [RSS](https://example.com/rss) | `tag1` `tag2` `tag3` |
```

### 3. Create a Pull Request

1. Commit your change:
   ```bash
   git checkout -b add-feed-<name>
   git add data/feeds.json README.md
   git commit -m "Add <Feed Name> RSS feed"
   git push origin add-feed-<name>
   ```
2. Open a Pull Request from your fork to the `main` branch of this repo
3. Fill in the PR description with the feed name and why it's useful

## What Happens Next

- We will **review your PR** and verify the feed is legit (working URL, relevant content, not spam)
- If everything checks out, we'll **merge it** into the project
- If we have questions, we'll discuss in the PR comments

## PR Pro Tips

- **One feed per PR** — makes reviews faster
- **Only modify `data/feeds.json` and `README.md`** — PRs that change other files will be rejected
- **Test the feed URL** before submitting — make sure it returns valid RSS/Atom XML
- **No duplicates** — check if the feed already exists in the list
- **Keep descriptions neutral** — no promotional language

## Discussions

Have a question or suggestion? Open a [Discussion](https://github.com/Phideround/RealMarketFeed/discussions) instead of an issue. We'd love to hear your ideas for improving the directory.

## Code of Conduct

Be respectful and constructive. We're all here to build a useful resource for the trading community.
