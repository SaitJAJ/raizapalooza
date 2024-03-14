"use server";
import PSPDFKit from "pspdfkit";

export default async function PdfView() {
  await PSPDFKit.load({
    container: document.getElementById(".foo"),
    document:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  });

  return (
    <>
      <div id=".foo" style={{ height: "100vh" }}></div>
    </>
  );
}
