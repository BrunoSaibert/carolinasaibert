import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

import config from "../../lib/config";

import * as S from "./styles";

const SocialList: React.FC = () => {
  return (
    <S.Container>
      <a
        title="Instagram"
        target="_blank"
        rel="noopener"
        href={`https://www.instagram.com/${config.instagram_account}`}
      >
        <FaInstagram size={30} />
      </a>

      <a
        title="WhatsApp"
        target="_blank"
        rel="noopener"
        href={`https://api.whatsapp.com/send?phone=55${config.phone_number.replace(
          /[^A-Z0-9]+/gi,
          ""
        )}`}
      >
        <FaWhatsapp size={30} />
      </a>

      <a
        title="E-mail"
        target="_blank"
        rel="noopener"
        href={`mailto:${config.mail_account}`}
      >
        <FaEnvelope size={30} />
      </a>
    </S.Container>
  );
};

export default SocialList;
