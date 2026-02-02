import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export function Links() {
  return (
    <Layout title="Things I've Made">
      <ul>
        <li>
          <a
            href="https://github.com/dinghar/tldr"
            target="_blank"
            rel="noopener noreferrer"
          >
            tldr
          </a>{" "}
          - A Slackbot for summarizing recent conversations.
        </li>
        <li>
          <a
            href="https://prezzy.gifts"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prezzy
          </a>{" "}
          - Create and personalize gift pages for your children.
        </li>
        <li>
          <a
            href="https://pointdexter.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            PointDexter
          </a>{" "}
          - Analyze your historical spending and find the perfect rewards card
          for you.
        </li>
        <li>
          <Link to="/rossgpt">RossGPT</Link> - Chat with AI Ross.
        </li>
        <li>
          <a
            href="https://dinghar.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            dinghar.com
          </a>{" "}
          - You are here.
        </li>
      </ul>
    </Layout>
  );
}
