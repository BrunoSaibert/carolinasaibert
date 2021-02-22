import styled from "styled-components";

import config from "../../lib/config";

export const Container = styled.div`
  display: block;
  background-color: ${config.color.primaryDark};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  .navigation {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.25em;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      font-size: 1rem;
      padding: 0 0 0 1.5rem;

      a {
        font-weight: 600;
        color: ${config.color.gray};
        text-decoration: none;
        transition: all 0.3s ease;
        text-transform: lowercase;

        &:active,
        &:hover,
        &.current {
          color: ${config.color.light};
          border-bottom: 1px solid ${config.color.light};
        }
      }
    }
  }

  @media (max-width: 769px) {
    & {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }

    ul {
      opacity: 0;
      width: 100%;
      height: calc(100vh - 70px);
      margin: 70px 0 0;
      padding: 0;
      position: fixed;
      top: 0;
      left: 0;
      background-color: ${config.color.light};
      flex-direction: column;
      text-align: right;
      transform: translateY(100%);
      transition: opacity 200ms;

      li {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        padding: 0 1.5rem 0 0;

        a {
          color: ${config.color.dark};
        }
      }
    }
    .active ul {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
