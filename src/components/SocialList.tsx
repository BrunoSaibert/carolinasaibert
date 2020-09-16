import React from "react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import { lighten } from "polished";

import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Instagram"
        href={`https://www.instagram.com/${config.instagram_account}`}
        target="_blank"
        rel="noopener"
      >
        <FaInstagram size={22} />
      </a>
      <a
        title="WhatsApp"
        href={`https://api.whatsapp.com/send?phone=55${config.phone_number.replace(
          /[^A-Z0-9]+/gi,
          ""
        )}`}
        target="_blank"
        rel="noopener"
      >
        <FaWhatsapp size={22} />
      </a>
      <a
        title="E-mail"
        href={`mailto:${config.mail_account}`}
        target="_blank"
        rel="noopener"
      >
        <FaEnvelope size={22} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
          color: ${config.color_primary};
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
        a:hover {
          color: ${lighten(0.2, config.color_primary)};
        }
      `}</style>
    </div>
  );
}
