# Undetectable Crawler
This is a Node.js script that leverages Puppeteer with extra settings to create a web crawler that avoids detection. This tool allows you to scrape websites while minimizing the risk of being blocked or identified as a bot.

![image.jpeg](image.jpeg)

## Features
- Bypasses common bot detection mechanisms.
- Customizable settings for stealthy web scraping.
- Easily extensible for your specific scraping needs.

## Proxy
Please note that it is essential to use a reliable residential proxy list, such as the one available at [BrightData](https://brightdata.com/), to ensure smooth and efficient web crawling while minimizing the risk of IP bans and detection

## Installation using Docker
1. Clone this repository:
```
git clone git@github.com:darkotodoric/undetectable-crawler.git
cd undetectable-crawler
```

2. Build the Docker image
```
docker-compose build
```

3. Run the Docker container
```
docker-compose up -d
```

4. Run the crawler
```
docker exec -it undetectable-nodejs-container node crawler.js https://bot.sannysoft.com/
```

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.
