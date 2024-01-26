import { Request, Response } from "express";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions, ContentText, Alignment } from "pdfmake/interfaces";
import newPrismaClient from "../prisma";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePdfReport = async (req: Request, res: Response) => {
  const userId = res.locals.decoded.sub;
  try {
    const data = await newPrismaClient.user.findMany({
      where: { id: userId },
      select: { fullName: true, contacts: true },
    });

    const content: ContentText[] = [
      {
        text: `Contatos registrados para ${data[0].fullName}`,
        fontSize: 20,
        alignment: "center",
        bold: true,
        margin: [0, 0, 0, 60],
      },
      ...data.flatMap((user) => {
        const meansOfContactsTexts = user.contacts
          .map((contact) => [
            {
              text: `E-mail: ${contact.email}`,
              fontSize: 16,
              alignment: "center" as Alignment,
              bold: true,
              margin: [0, 0, 0, 8] as [number, number, number, number],
            },
            {
              text: `Fone: (${contact.fone.substring(0, 3)}) ${contact.fone.substring(
                3
              )}`,
              fontSize: 16,
              alignment: "center" as Alignment,
              margin: [0, 0, 0, 0] as [number, number, number, number],
            },
            {
              text: "_________________________________",
              fontSize: 16,
              alignment: "center" as Alignment,
              margin: [0, 0, 0, 20] as [number, number, number, number],
            },
          ])
          .flat();

        return meansOfContactsTexts;
      }),
    ];

    const docDefinition: TDocumentDefinitions = {
      content,
      defaultStyle: {
        fontSize: 12,
        color: "#333",
      },
      pageMargins: [40, 60, 40, 60],
    };

    const pdfDoc = pdfMake.createPdf(docDefinition);

    const pdfBytes = await new Promise<Uint8Array>((resolve, reject) => {
      pdfDoc.getBuffer((buffer: Buffer) => {
        resolve(Uint8Array.from(buffer));
      });
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=seu-arquivo.pdf");

    res.write(Buffer.from(pdfBytes), "binary");
    res.end();
  } catch (error: any) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).send(`Erro ao gerar PDF: ${error.message}`);
  } finally {
    await newPrismaClient.$disconnect();
  }
};

export default generatePdfReport;
