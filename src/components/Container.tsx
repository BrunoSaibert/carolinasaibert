import Copyright from "../components/Copyright";

type Props = {
  children: React.ReactNode;
  hasFooter?: boolean;
};
export default function Container({ children, hasFooter = true }: Props) {
  return (
    <div className="container">
      {children}

      {hasFooter && (
        <footer>
          <Copyright />
        </footer>
      )}
      <style jsx>
        {`
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            flex: 1 1 auto;
            padding: 0 1.5rem;
          }
        `}
      </style>
    </div>
  );
}
