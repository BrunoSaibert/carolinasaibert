import TextMidia from "../components/TextMidia";

const QuemPodeContratar: React.FC<{ white?: boolean }> = ({ white = true }) => {
  return (
    <TextMidia
      bgColor={white ? "gray" : "tertiary"}
      img={{
        url: "/images/people.svg",
        alt: "imagem de contato",
        align: "right",
        props: {
          width: 1000,
          height: 800,
        },
      }}
      title={{
        as: "h2",
        text: "Quem pode contratar?",
        color: "primary",
        align: "center",
      }}
      description={{
        align: "center",
        color: white ? "dark" : "light",
        text: (
          <>
            Os serviços são oferecidos a qualquer pessoa que sinta que poderá se
            beneficiar deles.
            <br />
            <br />
            <strong>TODES SÃO BEM VINDES!</strong>
          </>
        ),
      }}
      cta={{
        href: "/contato",
        text: "Entrar em contato",
      }}
    />
  );
};

export default QuemPodeContratar;
