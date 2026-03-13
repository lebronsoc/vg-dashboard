module.exports = async function handler(req, res) {
  const url = "https://app.findanomaly.ai/api/dashboards/049d18b4-92a4-4129-8ad5-29aeeccbe141/serve-public?token=961b02b12a27439c051e1004a7307b4da5473fe1b5cb721bebb58490cde98c02";

  const response = await fetch(url, {
    headers: {
      "User-Agent": req.headers["user-agent"] || "Mozilla/5.0",
      "Accept": req.headers["accept"] || "text/html",
    }
  });

  const contentType = response.headers.get("content-type") || "text/html";
  const body = await response.text();

  res.setHeader("Content-Type", contentType);
  res.status(response.status).send(body);
}
