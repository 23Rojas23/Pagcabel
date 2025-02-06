import { History } from "./History";
import { Valores } from "./Valores";
import { Politica } from "./Politica";
export const Body = () => {
  return (
    <div className="justify-items-center">
      <History />
      <Valores />
      <Politica />
    </div>
  );
};
