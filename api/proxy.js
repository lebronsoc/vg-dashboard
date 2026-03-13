module.exports = async function handler(req, res) {
  const url = "https://app.findanomaly.ai/api/dashboards/049d18b4-92a4-4129-8ad5-29aeeccbe141/serve-public?token=961b02b12a27439c051e1004a7307b4da5473fe1b5cb721bebb58490cde98c02";

  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      "Referer": "https://app.findanomaly.ai/",
      "Origin": "https://app.findanomaly.ai"
    }
  });

  const contentType = response.headers.get("content-type") || "text/html";
  const body = await response.text();

  res.setHeader("Content-Type", contentType);
  res.status(response.status).send(body);
}
