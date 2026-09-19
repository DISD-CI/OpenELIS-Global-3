import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

function Footer() {
  const intl = useIntl();
  return (
    <footer className="footer py-2 mt-auto">
      <p className="m-0 text-center"><br />
       {/* © OpenElis Global2 2020. All rights reserved. */}<br /><br /><br /><br /><br /><br /><br /><br /><br />
        {intl.formatMessage({ id: "atelier.g2.footer.ministere" })}<br />
        {intl.formatMessage({ id: "atelier.g2.footer.direction" })}
      </p>
    </footer>
  );
}

export default Footer;