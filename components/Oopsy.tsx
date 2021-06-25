import * as React from "react";
import Link from "next/link";

type OopsyProps = {
  error: Error;
};

// TODO: Does Next supply its own ErrorBoundary for us?
const Oopsy: React.FC<OopsyProps> = ({ error }) => {
  return (
    <div className="sans-serif ph4 content-narrow f4 center fg2 lh-copy">
      <h1>pkmn.help: Error</h1>
      <p>
        Please send an email to{" "}
        <a href="mailto:brian@wavebeem.com" className="fg-link">
          brian@wavebeem.com
        </a>{" "}
        describing how to reproduce this error, and include the following error
        message:
      </p>
      <pre className="f5 bg2 pa2 br2 ba border4 overflow-x-auto">
        {error.message}
      </pre>
      <p>
        <Link href="/">
          <a className="f3 fg-link">&larr; Back to pkmn.help</a>
        </Link>
      </p>
    </div>
  );
};

Oopsy.displayName = "Oopsy";

export default Oopsy;