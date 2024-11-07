import KisKep from "./KisKep";

export default function KisKepek(props) {
  return (
    <div>
      {props.lista.map((kep, i) => {
        return <KisKep kep={kep} key={i} index={i} />;
      })}
    </div>
  );
}
