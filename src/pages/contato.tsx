import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FaPinterest } from "react-icons/fa";

import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import TextMidia from "../components/TextMidia";
import SocialList from "../components/SocialList";

import config from "../lib/config";

export const Button = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 16.25rem;
  margin: 1rem auto 0;
  padding: 0.9375rem;

  border: 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  background: ${config.color.light};
  color: ${config.color.primary};

  font-size: 1.125rem;
  font-weight: bold;
  text-decoration: none;

  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  @media (max-width: 769px) {
    max-width: 100%;
  }
`;

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/contato"} />
      <OpenGraphMeta url={"/contato"} />
      <TwitterCardMeta url={"/contato"} />

      <TextMidia
        img={{
          url: "/images/contact.svg",
          alt: "Imagem de contato",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          as: "h2",
          color: "primary",
          align: "center",
          text: "Contato",
          decorator: true,
        }}
        description={{
          align: "center",
          text: (
            <>
              Se você tem alguma dúvida ou gostaria de mais detalhes sobre algo,
              entre em contato através dos links:
              <SocialList />
            </>
          ),
        }}
      />

      <TextMidia
        bgColor="primary"
        title={{
          text: "Se inspire comigo",
          as: "h2",
          color: "light",
          align: "center",
        }}
        description={{
          align: "center",
          text: (
            <>
              <Button
                as="a"
                title="Pinterest"
                target="_blank"
                rel="noopener"
                href={`https://br.pinterest.com/${config.pinterest_account}`}
              >
                <FaPinterest size={30} />
                &nbsp;Ver Pinterest
              </Button>
            </>
          ),
        }}
      />
    </Layout>
  );
}
