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
    </div>
  );
}
