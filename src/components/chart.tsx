import { Component } from "preact";
import ApexCharts, { ApexOptions } from 'apexcharts';

import { jsPDF } from "jspdf";
import "./GenShinGothic-Monospace-Regular-normal";

import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'


//
import { css } from 'twind/css'
const charts = css`
  width: 480px;
`

//
export class Chart extends Component {
  div: HTMLDivElement | undefined | null;
  chart: ApexCharts | undefined;

  chartRender() {
    const options: ApexOptions = {
      chart: {
        type: "line",
      },
      series: [
        {
          name: "sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: ['こんにちは', 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    };

    this.chart = new ApexCharts(this.div, options);
    this.chart.render();
  }

  componentDidMount() {
    this.chartRender();
  }

  componentWillUnmount() {
    this.chart?.destroy();
  }

  onClick = async () => {
    const pdfDoc = await PDFDocument.create();

    // Kanji
    const url = './GenShinGothic-Monospace-Regular.ttf';
    const fontBytes = await fetch(url).then((res) => res.arrayBuffer());

    pdfDoc.registerFontkit(fontkit);
    const customFont = await pdfDoc.embedFont(fontBytes, { subset: true });

    const page = pdfDoc.addPage();

    //
    page.drawText('こんにちは', {
      x: 40,
      y: 100,
      size: 35,
      font: customFont,
      color: rgb(0, 0.53, 0.71),
    });

    // chart
    const o = (await this.chart?.dataURI()) as { imgURI: string };
    const png = await pdfDoc.embedPng(o.imgURI);

    const dims = png.scale(0.6)
    page.drawImage(png, {
      x: 40,
      y: 600,
      width: dims.width,
      height: dims.height,
    });

    download(await pdfDoc.save(), 'pdf-lib.pdf');
  }

  _onClick = async (e: Event) => {
    const o = await this.chart?.dataURI() as { imgURI: string };
    const pdf = new jsPDF();

    console.log(pdf.getFontList());

    pdf.setFont('GenShinGothic-Monospace-Regular', 'normal');
    pdf.setFontSize(35);
    pdf.text('こんにちは', 40, 200);

    pdf.addImage(o.imgURI, 'PNG', 10, 30, 100, 60);
    pdf.save("pdf-chart.pdf");
  }

  render() {
    return (
      <div>
        <div tw={charts} ref={(elm) => this.div = elm} />
        <hr />
        <button tw="m-2 p-1 bg-blue-200" onClick={this.onClick}>PDF-LIB</button>
        <button tw="m-2 p-1 bg-blue-200" onClick={this._onClick}>jsPDF</button>
      </div>
    );
  }
}

function download(pdfBytes: Uint8Array, filename: string) {
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const blobUrl = URL.createObjectURL(blob);

  const a = document.createElement('a');
  document.body.appendChild(a);
  a.download = filename;
  a.href = blobUrl;
  a.click();
  a.remove();
  URL.revokeObjectURL(blobUrl);
}
