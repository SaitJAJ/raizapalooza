import CookieDev from "@/components/CookieDev";
import InfoForm from "@/components/InfoForm";
import CurrentTickets from "@/components/CurrentTickets";
import PdfView from "../components/PdfView";

export default function Page() {
  return (
    <div className={""}>
      <CookieDev />
      <InfoForm />
      <CurrentTickets />
      <PdfView />
    </div>
  );
}
