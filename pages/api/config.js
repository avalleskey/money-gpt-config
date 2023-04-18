export default function handler(req, res) {
  const { charLimit } = req.query;

  if (req.method === "GET") {
    res.status(200).json({
      prompts: {
        roast: [
          `I'm using an app called Money.xyz. In this money insighs app, I have linked some bank accounts. Those bank account balances are updated frequently, though may be slightly delayed by a day or two.",
          "In less than ${charLimit ?? 240} characters, answer this question:",
          "${question}`,
        ],
      },
    });
  } else {
    res.status(404).json({
      error: true,
      message: "The endpoint you requested does not exist.",
    });
  }
}
