// import * as PDFKit from 'pdfkit';
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
const PDFDocument = require('pdfkit-table')
const fs = require('fs');

@Controller('pdf')
export class PdfController {
  @Get()
  async generatePDF(@Res() res: Response) {

    const doc = new PDFDocument({ margin: 30, size: 'A4' });

    doc.pipe(fs.createWriteStream("./src/lib/pdf/timesheet.pdf"));

    const table = {
        title: "Time Sheet",
        subtitle: "Daily Tasks",
        headers: [
          { label: "Date", property: 'date', width: 120, renderer: null, valign: 'middle' },
          { label: "Task", property: 'task', width: 300, renderer: null }, 
          { label: "Hours", property: 'hours', width: 100, align: 'center', headerAlign: 'center', renderer: null, valign: 'middle' }, 
        ],
        datas: [
           { 
            date: '04/02/2023', 
            task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend eros nec ex gravida, ut ornare erat varius. Aliquam sed congue erat. Proin neque odio, tristique at tellus eu, semper mollis diam. Pellentesque id urna non turpis blandit ullamcorper. Nunc justo tortor, rhoncus et elit sit amet, consectetur vestibulum felis.', 
            hours: 1
        }, { 
            date: '04/02/2023', 
            task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend eros nec ex gravida, ut ornare erat varius. Aliquam sed congue erat. Proin neque odio, tristique at tellus eu, semper mollis diam. Pellentesque id urna non turpis blandit ullamcorper. Nunc justo tortor, rhoncus et elit sit amet, consectetur vestibulum felis.', 
            hours: 0.5
        }, {
          date: '04/02/2023',
          task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend eros nec ex gravida, ut ornare erat varius. Aliquam sed congue erat. Proin neque odio, tristique at tellus eu, semper mollis diam. Pellentesque id urna non turpis blandit ullamcorper. Nunc justo tortor, rhoncus et elit sit amet, consectetur vestibulum felis.',
          hours: 0.2
        }, {
          date: '04/02/2023',
          task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend eros nec ex gravida, ut ornare erat varius. Aliquam sed congue erat. Proin neque odio, tristique at tellus eu, semper mollis diam. Pellentesque id urna non turpis blandit ullamcorper. Nunc justo tortor, rhoncus et elit sit amet, consectetur vestibulum felis.',
          hours: 0.1
        }, {
          date: '04/02/2023',
          task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend eros nec ex gravida, ut ornare erat varius. Aliquam sed congue erat. Proin neque odio, tristique at tellus eu, semper mollis diam. Pellentesque id urna non turpis blandit ullamcorper. Nunc justo tortor, rhoncus et elit sit amet, consectetur vestibulum felis.',
          hours: 0.1
        }, {
          date: '04/02/2023',
          task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend eros nec ex gravida, ut ornare erat varius. Aliquam sed congue erat. Proin neque odio, tristique at tellus eu, semper mollis diam. Pellentesque id urna non turpis blandit ullamcorper. Nunc justo tortor, rhoncus et elit sit amet, consectetur vestibulum felis.',
          hours: 0.1
        }, {
          date: '04/02/2023',
          task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend eros nec ex gravida, ut ornare erat varius. Aliquam sed congue erat. Proin neque odio, tristique at tellus eu, semper mollis diam. Pellentesque id urna non turpis blandit ullamcorper. Nunc justo tortor, rhoncus et elit sit amet, consectetur vestibulum felis.',
          hours: 0.1
        }, {
          date: '04/02/2023',
          task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend eros nec ex gravida, ut ornare erat varius. Aliquam sed congue erat. Proin neque odio, tristique at tellus eu, semper mollis diam. Pellentesque id urna non turpis blandit ullamcorper. Nunc justo tortor, rhoncus et elit sit amet, consectetur vestibulum felis.',
          hours: 0.1
        }
      ]
    };
      
      doc.table(table, {
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
        prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
          doc.font("Helvetica").fontSize(8);
          // indexColumn === 0 && doc.addBackground(rectRow, 'white', 0.15);
          indexRow % 2 === 0 && doc.addBackground(rectRow, 'white', 0.15);
          indexRow % 2 === 1 && doc.addBackground(rectRow, 'grey', 0.15);
          // indexColumn === 2 && doc.align('center')
          // indexRow === 2 && doc.addBackground(rectRow, 'white', 0.15);
          // indexRow === 3 && doc.addBackground(rectRow, 'grey', 0.15);
          // indexRow === 4 && doc.addBackground(rectRow, 'white', 0.15);
          // indexRow === 5 && doc.addBackground(rectRow, 'grey', 0.15);
          // indexRow === 6 && doc.addBackground(rectRow, 'white', 0.15);
        },
      });
    
      doc.pipe(res);
      doc.end();
  }
};
