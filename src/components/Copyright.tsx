import config from "../lib/config";

export default function Copyright() {
  return (
    <>
      <p>&copy; 2020 - {config.copy}</p>
      <style jsx>
        {`
          p {
            font-size: 0.75rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
